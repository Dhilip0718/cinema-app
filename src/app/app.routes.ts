import { Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FeaturedComponent } from './components/featured/featured.component';

export const routes: Routes = [
    { path: 'search', component: SearchBarComponent },
    { path: 'featured', component: FeaturedComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' }, // Default route
  ];