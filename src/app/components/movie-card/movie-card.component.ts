import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movie.service';
import { Router } from '@angular/router';
import { SummaryPipe } from '../../utils/summary-pipe.pipe';

@Component({
  selector: 'app-movie-card',
  imports: [FormsModule, CommonModule, SummaryPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  standalone: true,
})
export class MovieCardComponent {

 @Input() movie!: Movie

 constructor(private router: Router) { }

  showFullPlot: boolean = false;

  public togglePlot(event: Event): void {
    event.preventDefault();
    this.showFullPlot = !this.showFullPlot;
  }

  public limitText(summary: string) {
    return summary?.length > 100 ? summary.substr(0, 190) + ' ...' : summary;
  }

  public openMovieDetails(movieId: string) {
    this.router.navigate(['/movie', movieId]);
    }
}
