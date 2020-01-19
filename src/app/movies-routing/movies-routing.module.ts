import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent }  from '../movie/movie.component';

const moviesRoutes: Routes = [
 { path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
