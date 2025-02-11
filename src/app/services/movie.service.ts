import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Awards: string;
  Poster: string;
  Type: string;
  imdbID: string;
}

interface SearchResult {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '6c3a2d45'; // Your API key
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string, plot: string = 'full'): Observable<Movie[]> {
    const url = `${this.apiUrl}?s=${title}&apikey=${this.apiKey}&plot=${plot}`;
    return this.http.get<SearchResult>(url).pipe(
      map((response) => response.Search || []) // Handle potential undefined Search
    );
  }

  getMovieById(id: string, plot: string = 'full'): Observable<Movie> {
    const url = `${this.apiUrl}?i=${id}&apikey=${this.apiKey}&plot=${plot}`;
    return this.http.get<Movie>(url);
  }

  getFeaturedMovies(ids: string[], plot: string = 'full'): Observable<Movie[]> {
    const movieObservables = ids.map((id) => this.getMovieById(id, plot));
    return forkJoin(movieObservables);
  }
}
