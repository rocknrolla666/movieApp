import * as MovieDetailsActions from './movie-details.actions';

export interface State {
  movieDetails: any;
  recommendedMovies: any[];
}

const initialState: State = {
  movieDetails: {},
  recommendedMovies: []
};

export function movieDetailsReducer(state = initialState, action: MovieDetailsActions.MovieDetailsActions) {
  switch (action.type) {
    case MovieDetailsActions.SET_MOVIE:
      return {
        ...state,
        movieDetails: action.payload
      };
    case MovieDetailsActions.SET_RECOMMENDED_MOVIES:
      return {
        ...state,
        recommendedMovies: [...action.payload]
      };
    default:
      return state;
  }
}
