import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';





@Component({
  selector: 'app-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.less']
})
export class MovieTitleComponent implements OnInit {


  @Input() movie: Imovie | undefined;

  @Input() favorite: boolean | undefined = false;

  @Output() newList: any = new EventEmitter<any>();


  listMovie: Imovie[] = [];

  max: number = 10;

  constructor(private storageService: LocalStorageService) {

    //get movie list localstorage
    this.listMovie = this.storageService.getMovie(this.storageService.storageName) || [];

  }

  ngOnInit(): void {

  }

  favorites(state: boolean, movie: Imovie | any): void {

    movie.favorited = state;

    if (movie.favorited) {

      //add new movie list
      this.listMovie.push(movie);
      this.saveMovieList();
      this.favorite = state;
    } else {

      //remove movie localstorage
      this.listMovie = this.listMovie.filter(x => x.imdbID !== movie.imdbID);

      let url = window.location.pathname;

      //update parent component list
      if (url === '/favorites') {
        this.newList.emit(this.listMovie)
      }

      this.saveMovieList();
      this.favorite = state;
    }

  }

  //save movie list localstorage
  saveMovieList() {
    this.storageService.setMovie(this.storageService.storageName, this.listMovie)
  }



}
