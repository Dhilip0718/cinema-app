import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  providers: [MovieService]
})
export class FeaturedComponent implements OnInit {
  featuredMovies: Movie[] = [];
  movieIds = ['tt1285016', 'tt0118688', 'tt0327056','tt0060345','tt0108778', 'tt3722118'];
  loading = true;
  error: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadFeaturedMovies();
  }

  loadFeaturedMovies() {
    this.movieService.getFeaturedMovies(this.movieIds).subscribe(
      (movies) => {
        this.featuredMovies = movies;
        this.loading = false;
        console.log(this.featuredMovies);
      },
      (error) => {
        this.error = 'Failed to load featured movies';
        this.loading = false;
      }
    );
  }
}