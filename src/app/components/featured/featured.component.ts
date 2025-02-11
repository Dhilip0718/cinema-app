import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  imports: [CommonModule],
  standalone: true,
  providers: [MovieService]

})
export class FeaturedComponent implements OnInit {
  featuredMovies: Movie[] = [];
  movieIds = ['tt1285016', 'tt0050212'];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadFeaturedMovies();
  }

  loadFeaturedMovies() {
    this.movieService.getFeaturedMovies(this.movieIds).subscribe(
      
      (movies) =>  { 
        console.log('Featured movies:', movies);
        return (this.featuredMovies = movies) },
      
      (error) => console.error('Error loading featured movies:', error)
    );
  }
}
