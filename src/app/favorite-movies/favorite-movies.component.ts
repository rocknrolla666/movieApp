import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Movie} from '../movie.model';
import * as MoviesActions from '../popular-movies/store/movies.actions';
import * as FavoriteMoviesActions from '../favorite-movies/store/favorite-movies.actions';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMoviesState: Observable<Movie[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.favoriteMoviesState = this.store.select('favoriteMovies');
  }

  onRemoveMovie(movie: Movie) {
    this.store.dispatch(new FavoriteMoviesActions.RemoveMovie(movie));
  }

}
