import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as FavoriteMoviesActions from './favorite-movies/store/favorite-movies.actions';
import * as GenresActions from './store/genres.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new GenresActions.FetchGenres());
    if (localStorage.getItem('favoriteMovies')) {
      const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
      this.store.dispatch(new FavoriteMoviesActions.SetFavoriteMovies(favoriteMovies));
    }
  }
}
