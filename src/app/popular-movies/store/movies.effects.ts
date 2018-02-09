import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import * as MoviesActions from './movies.actions';
import {Movie} from '../../movie.model';
import {MoviesService} from '../../movies.service';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions,
              private moviesService: MoviesService) {}
  @Effect()
  moviesFetch = this.actions$
    .ofType(MoviesActions.FETCH_MOVIES)
    .switchMap((action: MoviesActions.FetchMovies) => {
      return this.moviesService.getMovies(action.payload);
    })
    .map((movies: {movies: Movie[], total: number}) => {
      return new MoviesActions.SetMovies({movies: movies.movies, totalResults: movies.total});
    });
}
