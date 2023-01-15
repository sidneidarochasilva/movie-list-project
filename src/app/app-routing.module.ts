import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesMoviesComponent } from './pages/favorites-movies/favorites-movies.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:text', component: HomeComponent },
  { path: 'favorites', component: FavoritesMoviesComponent },
  { path: 'searchHistory', component: SearchHistoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
