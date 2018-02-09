import * as GenresActions from './genres.actions';

export interface State {
  genres: any[];
}

const initialState = {
  genres: []
};

export function genresReducers(state = initialState, action: GenresActions.GenresActions) {
  switch (action.type) {
    case GenresActions.SET_GENRES:
      return {
        ...state,
        genres: [...action.payload]
      };
    default:
      return state;
  }
}
