import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';

import * as MovieDetailsActions from './store/movie-details.actions';
import {Movie} from '../movie.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: number;
  movieDetailsSubscription: Subscription;
  movie: Movie;
  recommendedMovies: Movie[];
  poster: string;

  constructor(private route: ActivatedRoute,
              private store: Store<any>) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.movieId = +params['id'];
          this.store.dispatch(new MovieDetailsActions.FetchMovieDetails(this.movieId));
          this.movieDetailsSubscription = this.store.select('movieDetails')
            .subscribe(movieDetailsState => {
              this.movie = movieDetailsState.movieDetails;
              this.recommendedMovies = movieDetailsState.recommendedMovies;
              this.poster = this.movie.poster_path ? this.movie.poster_path : '';
            });
        }
      );
  }

  ngOnDestroy() {
    this.movieDetailsSubscription.unsubscribe();
  }

}
