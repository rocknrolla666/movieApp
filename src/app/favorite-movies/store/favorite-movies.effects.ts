import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/withLatestFrom';
import {Store} from '@ngrx/store';

import * as FavoriteMoviesActions from '../../favorite-movies/store/favorite-movies.actions';

@Injectable()
export class FavoriteMoviesEffects {
  constructor(private actions$: Actions,
              private store: Store<any>) {}

  @Effect({dispatch: false})
  saveFavoriteMovies = this.actions$
    .ofType(FavoriteMoviesActions.ADD_MOVIE, FavoriteMoviesActions.REMOVE_MOVIE)
    .withLatestFrom(this.store.select('favoriteMovies'))
    .switchMap(([action, state]) => {
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
      return empty();
    });
}

