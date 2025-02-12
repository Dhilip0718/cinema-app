import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    SearchBarComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'cinema-app';
}
