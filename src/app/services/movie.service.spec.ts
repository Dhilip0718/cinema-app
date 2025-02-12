import { TestBed } from '@angular/core/testing';
import { Movie, MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService], 
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

  it('should search movies', () => {
    const dummyMovies: Movie[] = [
      { Title: 'Movie 1', Year: '2021', Rated: 'PG', Released: '2021-01-01', Genre: 'Action', Director: 'Director 1', Actors: 'Actor 1, Actor 2', Plot: 'Plot 1', Awards: 'None', Poster: 'url1', Type: 'movie', imdbID: 'id1' },
      { Title: 'Movie 2', Year: '2022', Rated: 'PG-13', Released: '2022-01-01', Genre: 'Drama', Director: 'Director 2', Actors: 'Actor 3, Actor 4', Plot: 'Plot 2', Awards: 'None', Poster: 'url2', Type: 'movie', imdbID: 'id2' }
    ];

    service.searchMovies('Movie').subscribe((movies) => {
      expect(movies.length).toBe(2);
      expect(movies).toEqual(dummyMovies);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}?s=Movie&apikey=${service['apiKey']}&plot=full`);
    expect(req.request.method).toBe('GET');
    req.flush({ Search: dummyMovies, totalResults: '2', Response: 'True' });
  });

  it('should handle errors', () => {
    service.searchMovies('Movie').subscribe(
      () => fail('should have failed with the 500 error'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne(`${service['apiUrl']}?s=Movie&apikey=${service['apiKey']}&plot=full`);
    expect(req.request.method).toBe('GET');
    req.flush('Something went wrong', { status: 500, statusText: 'Server Error' });
  });
});