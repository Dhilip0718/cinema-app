import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, RouterModule, HttpClientModule],
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Movie | null = null;
  loading: boolean = true;
  genres: string[] = [];
  actors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe((details) => {
        this.movieDetails = details;
        this.loading = false;
        this.processCommaSeparated(this.movieDetails, 'Genre', this.genres);
        this.processCommaSeparated(this.movieDetails, 'Actors', this.actors);
      });
    } else {
      this.loading = false;
    }
  }

  private processCommaSeparated(
    data: Movie,
    property: keyof Movie,
    targetArray: string[]
  ) {
    const value = data?.[property]; 

    if (typeof value === 'string') {
      targetArray.push(...value.split(',').map((item) => item.trim()));
    }
  }
  goBack(): void {
    this.router.navigate(['/search']);
  }
}
