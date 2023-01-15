import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesMoviesComponent } from './pages/favorites-movies/favorites-movies.component';
import { DataService } from './services/data.service';
import { MovieTitleComponent } from './components/movie-title/movie-title.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavBarComponent,
    HomeComponent,
    FavoritesMoviesComponent,
    MovieTitleComponent,
    SearchHistoryComponent
  ],
  imports: [

    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
