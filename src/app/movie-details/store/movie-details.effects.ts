import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as MovieDetailsActions from './movie-details.actions';
import {MoviesService} from '../../movies.service';

@Injectable()
export class MovieDetailsEffects {
  constructor(private actions$: Actions,
              private moviesService: MoviesService) {}

  @Effect()
  fetchMovieDetails = this.actions$
    .ofType(MovieDetailsActions.FETCH_MOVIE_DETAILS)
    .switchMap((action: MovieDetailsActions.FetchMovieDetails) => {
      return this.moviesService.getMyMovieDetails(action.payload);
    })
    .map(movie => {
      return new MovieDetailsActions.SetMovie(movie);
    });

  @Effect()
  fetchRecommendedMovies = this.actions$
    .ofType(MovieDetailsActions.FETCH_MOVIE_DETAILS)
    .switchMap((action: MovieDetailsActions.FetchMovieDetails) => {
      return this.moviesService.getMyRecommendedMovies(action.payload);
    })
    .map(movies => {
      return new MovieDetailsActions.SetRecommendedMovies(movies.movies);
    });
}
