import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { MovieService } from '../../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { FeaturedComponent } from '../featured/featured.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', [
      'searchMovies',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        SearchBarComponent,
        HttpClientTestingModule,
        FormsModule,
        CommonModule,
        MovieCardComponent,
        FeaturedComponent,
      ],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear movies when searchTerm is empty', () => {
    component.searchTerm = '';
    component.searchMovies();

    expect(movieService.searchMovies).not.toHaveBeenCalled();
    expect(component.movies).toEqual([]);
  });
});
