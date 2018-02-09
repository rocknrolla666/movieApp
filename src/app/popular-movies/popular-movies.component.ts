import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as MoviesActions from './store/movies.actions';
import * as FavoriteMoviesActions from '../favorite-movies/store/favorite-movies.actions';
import { Movie } from '../movie.model';
import { IPageChangeEvent } from '@covalent/core/paging';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  currentPage = 1;
  pageLinkCount = 5;
  pageSize = 20;
  moviesState: Observable<{movies: Movie[], totalResults: number}>;
  query = '';

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new MoviesActions.FetchMovies({page: this.currentPage, query: this.query}));
    this.moviesState = this.store.select('movies');
  }

  changePage(pagingEvent: IPageChangeEvent) {
    console.log(pagingEvent);
    this.currentPage = pagingEvent.page;
    this.store.dispatch(new MoviesActions.FetchMovies({page: this.currentPage, query: this.query}));
  }

  search(query: string, pager) {
    if (query) {
      this.query = query;
      this.currentPage = 1;
      pager.navigateToPage(this.currentPage);
      this.store.dispatch(new MoviesActions.FetchMovies({page: this.currentPage, query: this.query}));
    }
    if (query === '') {
      this.clear(pager);
    }
  }

  clear(pager) {
    this.query = '';
    this.currentPage = 1;
    pager.navigateToPage(this.currentPage);
    this.store.dispatch(new MoviesActions.FetchMovies({page: this.currentPage, query: this.query}));
  }
}

