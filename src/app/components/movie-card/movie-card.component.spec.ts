import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';
import { Movie } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent, FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;

    const defaultMovie: Movie = {
      Title: 'Test Movie',
      Year: '',
      Rated: '',
      Released: '',
      Genre: '',
      Director: '',
      Actors: '',
      Plot: '',
      Awards: '',
      Poster: 'test_poster_url',
      Type: '',
      imdbID: '',
    };
    component.movie = defaultMovie;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should limit text correctly', () => {
    const longText = 'a'.repeat(200);
    const shortText = 'short text';
    expect(component.limitText(longText)).toBe(longText.substr(0, 190) + ' ...');
    expect(component.limitText(shortText)).toBe(shortText);
  });

  it('should have a movie input', () => {
    const movie: Movie = {
      Title: 'Test Movie',
      Plot: 'Test Summary',
      Year: '',
      Rated: '',
      Released: '',
      Genre: '',
      Director: '',
      Actors: '',
      Awards: '',
      Poster: 'www.test.com',
      Type: '',
      imdbID: '',
    };
    component.movie = movie; 
    fixture.detectChanges();
    expect(component.movie).toEqual(movie);
  });
});