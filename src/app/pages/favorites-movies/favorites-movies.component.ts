import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-favorites-movies',
  templateUrl: './favorites-movies.component.html',
  styleUrls: ['./favorites-movies.component.less']
})
export class FavoritesMoviesComponent implements OnInit {

  movies: any;
  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {

    //search favorite movie list
    this.movies = this.storageService.getMovie(this.storageService.storageName) || [];
  }



}
