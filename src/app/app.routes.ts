import { Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: 'search', component: SearchBarComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];
