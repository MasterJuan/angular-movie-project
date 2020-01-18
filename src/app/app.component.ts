import { Component } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';
  movie$;
  constructor(private movieService: MovieService){}

  // fetchMovie() {
  //   this.movie$ = this.movieService.fetchMovie();
  // }
}
