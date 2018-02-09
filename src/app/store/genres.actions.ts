import { Action } from '@ngrx/store';

export const FETCH_GENRES = 'FETCH_GENRES';
export const SET_GENRES = 'SET_GENRES';

export class FetchGenres implements Action {
  readonly type = FETCH_GENRES;
}

export class SetGenres implements Action {
  readonly type = SET_GENRES;
  constructor(public payload: {
    id: number,
    name: string
  }[]) {}
}

export type GenresActions = FetchGenres | SetGenres;
