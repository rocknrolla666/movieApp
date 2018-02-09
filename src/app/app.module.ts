import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentChipsModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { CovalentPagingModule } from '@covalent/core/paging';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesService } from './movies.service';
import { reducers } from './store/app.reducers';
import { GenresEffects } from './store/genres.effects';
import { MovieDetailsEffects } from './movie-details/store/movie-details.effects';
import { FavoriteMoviesEffects } from './favorite-movies/store/favorite-movies.effects';
import { MoviesEffects } from './popular-movies/store/movies.effects';
import {ToggleFavoriteComponent} from "./toggle-favorite/toggle-favorite.component";

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieDetailsComponent,
    FavoriteMoviesComponent,
    ToggleFavoriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatChipsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentPagingModule,
    CovalentSearchModule,
    FlexLayoutModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MoviesEffects, GenresEffects, MovieDetailsEffects, FavoriteMoviesEffects])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
