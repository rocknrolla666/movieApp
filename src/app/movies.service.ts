import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';

import {Movie} from './movie.model';

@Injectable()
export class MoviesService {
  apiKey = '70c8f27fbc2350c75ddcce5910f94f57';

  constructor(private httpClient: HttpClient,
              private store: Store<any>) {
  }

  private getPopularMovies(page: number) {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}`
    );
  }

  private searchMovies(page: number, query: string) {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&page=${page}&query=${query}`
    );
  }

  private getMovieDetails(id: number) {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }

  private getRecommendedMovies(id: number) {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US`
    );
  }

  public getGenres() {
    return this.httpClient.get<any>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`
    );
  }

  public isMovieInFavoriteList(movie: Movie, favoriteMoviesState) {
    return favoriteMoviesState.favoriteMovies.find(favoriteMovie => {
      return favoriteMovie.id === movie.id;
    });
  }

  private getGenresNames(movie: Movie, genresState) {
    const genres = genresState.genres;

    if (genres) {
      return genresState.genres
        .filter(genre => movie.genres.find(id => genre.id === id))
        .map(genre => genre.name)
    } else {
      return [];
    }
  }

  private getMyMovies(res, genresState, favoriteMoviesState) {
    const totalResults = +res.total_results;
    const movies = res.results.map(movie => {
      const newMovie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        genres: movie.genre_ids,
        favorite: false
      };

      return newMovie;
    });

    const resultMovies = movies.map(movie => {
      movie.genres_names = this.getGenresNames(movie, genresState);
      return movie;
    });

    return {
      movies: resultMovies,
      total: totalResults
    };
  }

  public getMovies(options: { page: number, query: string } = {page: 1, query: ''}) {
    if (options.query) {
      return this.searchMovies(options.page, options.query)
        .withLatestFrom(
          this.store.select('genres'),
          this.store.select('favoriteMovies')
        )
        .map(([res, genresState, favoriteMovieState]) => {
          return this.getMyMovies(res, genresState, favoriteMovieState);
        });
    } else {
      return this.getPopularMovies(options.page)
        .withLatestFrom(
          this.store.select('genres'),
          this.store.select('favoriteMovies')
        )
        .map(([res, genresState, favoriteMovieState]) => {
            return this.getMyMovies(res, genresState, favoriteMovieState);
        });
    }
  }

  public getMyMovieDetails(id: number) {
    return this.getMovieDetails(id)
      .withLatestFrom(
        this.store.select('genres'),
        this.store.select('favoriteMovies')
      )
      .map(([res, genresState, favoriteMovieState]) => {
          console.log(res);
          return {
            id: res.id,
            title: res.title,
            poster_path: res.poster_path,
            genres: res.genres.map(genre => genre.id),
            favorite: this.isMovieInFavoriteList(res, favoriteMovieState),
            overview: res.overview,
            genres_names: res.genres.map(genre => genre.name),
          };
      });
  }

  public getMyRecommendedMovies(id: number) {
    return this.getRecommendedMovies(id)
      .withLatestFrom(
        this.store.select('genres'),
        this.store.select('favoriteMovies')
      )
      .map(([res, genresState, favoriteMovieState]) => {
          return this.getMyMovies(res, genresState, favoriteMovieState);
      });
  }
}
