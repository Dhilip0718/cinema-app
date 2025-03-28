import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Movie, MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { FeaturedComponent } from '../featured/featured.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule, MovieCardComponent,FeaturedComponent,HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
  providers: [MovieService],

})
export class SearchBarComponent {
  searchTerm: string = '';
  movies: Movie[] = [];
  plotLength: string = 'full';
  showFeatured = true;

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchTerm.trim() !== '' || this.plotLength) {
      this.movieService
        .searchMovies(this.searchTerm, this.plotLength)
        .subscribe(
          (movies) => {
            this.movies = movies.slice(0, 5); 
          },
          (error) => {
            console.error('Error fetching movies:', error);
            this.movies = [];
          }
        );
    } else {
      this.movies = []; 
    }
  }
  clearSearch() {
    this.searchTerm = '';
    this.movies = [];
    this.showFeatured = true;

  }

  togglePlotLength() {
    this.plotLength = this.plotLength === 'full' ? 'short' : 'full';
    this.searchMovies(); // Re-search with the new plot length
  }
}
