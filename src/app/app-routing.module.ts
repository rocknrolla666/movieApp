import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PopularMoviesComponent} from './popular-movies/popular-movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {FavoriteMoviesComponent} from './favorite-movies/favorite-movies.component';

const routes: Routes = [
  { path: '', component: PopularMoviesComponent },
  { path: 'favorite', component: FavoriteMoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
