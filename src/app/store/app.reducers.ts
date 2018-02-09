import {ActionReducerMap} from '@ngrx/store';

import * as fromMovies from '../popular-movies/store/movies.reducers';
import * as fromFavoriteMovies from '../favorite-movies/store/favorite-movies.reducers';
import * as fromMovieDetails from '../movie-details/store/movie-details.reducers';
import * as fromGenres from './genres.reducers';

export interface AppState {
  movies: fromMovies.State;
  favoriteMovies: fromFavoriteMovies.State;
  movieDetails: fromMovieDetails.State;
  genres: fromGenres.State;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovies.movieReducer,
  favoriteMovies: fromFavoriteMovies.favoriteMoviesReducer,
  movieDetails: fromMovieDetails.movieDetailsReducer,
  genres: fromGenres.genresReducers
};
