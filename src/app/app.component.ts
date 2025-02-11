import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FeaturedComponent } from './components/featured/featured.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    HttpClientModule,
    SearchBarComponent,
    FeaturedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cinema-app';
}
