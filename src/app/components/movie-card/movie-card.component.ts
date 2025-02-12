import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  standalone: true,
})
export class MovieCardComponent {
 @Input() movie!: Movie
}
