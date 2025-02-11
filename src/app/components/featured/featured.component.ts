import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [MovieService]
})
export class FeaturedComponent implements OnInit {
  featuredMovies: Movie[] = [];
  movieIds = ['tt1285016', 'tt0050212'];
  loading = true; // Add loading state
  error: string | null = null; // Add error state

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadFeaturedMovies();
  }

  loadFeaturedMovies() {
    this.movieService.getFeaturedMovies(this.movieIds).subscribe(
      (movies) => {
        this.featuredMovies = movies;
        this.loading = false; // Set loading to false when movies are loaded
        console.log(this.featuredMovies); // Add this line to verify the movies array
      },
      (error) => {
        this.error = 'Failed to load featured movies';
        this.loading = false; // Set loading to false in case of error
      }
    );
  }
}