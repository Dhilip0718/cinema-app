import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-movie-details',
  imports: [CommonModule,RouterModule,HttpClientModule],
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Movie | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe(details => {
        this.movieDetails = details;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/search']);
  }
}
