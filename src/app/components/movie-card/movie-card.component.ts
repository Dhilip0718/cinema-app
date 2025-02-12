import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  @Input() cardHeader!: string;
  @Input() imageUrl!: string;
  @Input() cardDescription!: string;

  public limitText(summary: string) {
    return summary?.length > 100 ? summary.substr(0, 190) + ' ...' : summary
  }
}
