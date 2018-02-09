import * as MoviesActions from './movies.actions';

export interface State {
  movies: any[];
  totalResults: number;
  pager: {
    total: number,
    currentPage: number,
    pageLinkCount: number,
    pageSize: number
  };
}

const initialState: State = {
  movies: [],
  totalResults: 0,
  pager: {
    total: 0,
    currentPage: 1,
    pageLinkCount: 5,
    pageSize: 20
  }
};

export function movieReducer(state: State = initialState, action: MoviesActions.MoviesActions) {
  switch (action.type) {
    case (MoviesActions.SET_MOVIES):
      return {
        ...state,
        movies: [...action.payload.movies],
        totalResults: action.payload.totalResults
      };
    case (MoviesActions.UPDATE_MOVIE):
      return {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.id !== action.payload.id) {
            return movie;
          }

          return { ...movie, ...action.payload };
        })
      };
    case (MoviesActions.SET_PAGER):
      return {
        ...state,
        pager: {...action.payload}
      };
    default:
      return state;
  }
}
