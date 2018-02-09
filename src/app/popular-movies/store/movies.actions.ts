import { Action } from '@ngrx/store';
import { Movie } from '../../movie.model';

export const SET_MOVIES = 'SET_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_PAGER = 'SET_PAGER';

export class SetMovies implements Action {
  readonly type = SET_MOVIES;
  constructor(public payload: {
    movies: Movie[],
    totalResults: number
  }) {}
}

export class UpdateMovie implements Action {
  readonly type = UPDATE_MOVIE;
  constructor(public payload: Movie) {}
}

export class FetchMovies implements Action {
  readonly type = FETCH_MOVIES;
  constructor(public payload: {
    page: number,
    query: string
  }) {}
}

export class SetPager implements Action {
  readonly type = SET_PAGER;
  constructor(public payload: {
    total: number,
    currentPage: number,
    pageLinkCount: number,
    pageSize: number
  }) {}
}

export type MoviesActions = SetMovies | FetchMovies | UpdateMovie | SetPager;
