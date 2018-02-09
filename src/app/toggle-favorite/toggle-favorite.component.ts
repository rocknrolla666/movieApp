import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import * as FavoriteMoviesActions from '../favorite-movies/store/favorite-movies.actions';
import { Store } from '@ngrx/store';
import { Movie } from '../movie.model';
import { MoviesService } from "../movies.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-toggle-favorite',
  templateUrl: './toggle-favorite.component.html',
  styleUrls: ['./toggle-favorite.component.css']
})
export class ToggleFavoriteComponent implements OnInit, OnDestroy {
  @Input() movie: Movie;
  favoriteMoviesState: any;

  subscription: Subscription;

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
    event.stopPropagation();
  }

  constructor(private store: Store<any>, private moviesService: MoviesService) { }

  ngOnInit() {
    this.subscription = this.store.select('favoriteMovies')
      .subscribe(favoriteMoviesState => {
        this.favoriteMoviesState = favoriteMoviesState;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle() {
    if (!this.isFavorite()) {
      this.store.dispatch(new FavoriteMoviesActions.AddMovie(this.movie));
    } else {
      this.store.dispatch(new FavoriteMoviesActions.RemoveMovie(this.movie));
    }
  }

  isFavorite() {
    return this.moviesService.isMovieInFavoriteList(this.movie, this.favoriteMoviesState);
  }

}
