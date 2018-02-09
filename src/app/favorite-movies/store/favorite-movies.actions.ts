import { Action } from '@ngrx/store';
import { Movie } from '../../movie.model';

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
export const SAVE_FAVORITE_MOVIES = 'SAVE_FAVORITE_MOVIES';

export class AddMovie implements Action {
  readonly type = ADD_MOVIE;
  constructor(public payload: Movie) {}
}

export class RemoveMovie implements Action {
  readonly type = REMOVE_MOVIE;
  constructor(public payload: Movie) {}
}

export class SaveFavoriteMovies implements Action {
  readonly type = SAVE_FAVORITE_MOVIES;
}

export class SetFavoriteMovies implements Action {
  readonly type = SET_FAVORITE_MOVIES;
  constructor(public payload: Movie[]) {}
}

export type FavoriteMoviesActions = AddMovie | RemoveMovie | SaveFavoriteMovies | SetFavoriteMovies;
