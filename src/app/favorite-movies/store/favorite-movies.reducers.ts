import * as FavoriteMoviesActions from './favorite-movies.actions';
import {Movie} from '../../movie.model';

export interface State {
  favoriteMovies: any[];
}

const initialState: State = {
  favoriteMovies: []
};

export function favoriteMoviesReducer(state: State = initialState, action: FavoriteMoviesActions.FavoriteMoviesActions) {
  switch (action.type) {
    case FavoriteMoviesActions.ADD_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload]
      };
    case FavoriteMoviesActions.REMOVE_MOVIE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(favoriteMovie => favoriteMovie.id !== action.payload.id)
      };
    case FavoriteMoviesActions.SET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: [...action.payload]
      };
    default:
      return state;
  }
}
