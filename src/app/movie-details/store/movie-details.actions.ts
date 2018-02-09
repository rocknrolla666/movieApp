import { Action } from '@ngrx/store';
import { Movie } from '../../movie.model';

export const SET_MOVIE = 'SET_MOVIE';
export const FETCH_RECOMMENDED_MOVIES = 'FETCH_RECOMMENDED_MOVIES';
export const SET_RECOMMENDED_MOVIES = 'SET_RECOMMENDED_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';

export class SetMovie implements Action {
  readonly type = SET_MOVIE;
  constructor(public payload: Movie) {}
}

export class FetchRecommendedMovies implements Action {
  readonly type = FETCH_RECOMMENDED_MOVIES;
  constructor(public payload: Movie) {}
}

export class SetRecommendedMovies implements Action {
  readonly type = SET_RECOMMENDED_MOVIES;
  constructor(public payload: Movie[]) {}
}

export class FetchMovieDetails implements Action {
  readonly type = FETCH_MOVIE_DETAILS;
  constructor(public payload: number) {}
}

export type MovieDetailsActions = SetMovie | FetchRecommendedMovies | SetRecommendedMovies | FetchMovieDetails;
