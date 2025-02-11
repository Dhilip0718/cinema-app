import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, BrowserModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {
  searchTerm: string = '';
  movies: Movie[] = [];
  plotLength: string = 'full'; // Default plot length

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchTerm.trim() !== '') {
      this.movieService
        .searchMovies(this.searchTerm, this.plotLength)
        .subscribe(
          (movies) => {
            this.movies = movies.slice(0, 5); // Limit to top 5
          },
          (error) => {
            console.error('Error fetching movies:', error);
            // Handle error, e.g., display a message to the user
            this.movies = []; // Clear previous results
          }
        );
    } else {
      this.movies = []; // Clear results if search term is empty
    }
  }

  togglePlotLength() {
    this.plotLength = this.plotLength === 'full' ? 'short' : 'full';
    this.searchMovies(); // Re-search with the new plot length
  }
}
