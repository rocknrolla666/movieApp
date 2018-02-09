import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as GenresActions from './genres.actions';
import {MoviesService} from '../movies.service';

@Injectable()
export class GenresEffects {
  constructor(private actions$: Actions,
              private moviesService: MoviesService) {}

  @Effect()
  fetchGenres = this.actions$
    .ofType(GenresActions.FETCH_GENRES)
    .switchMap(action => {
      return this.moviesService.getGenres();
    })
    .map(res => {
      const genres: [{ id: number, name: string }] = res.genres;
      return new GenresActions.SetGenres(genres);
    });
}
