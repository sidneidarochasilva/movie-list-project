import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Imovie } from 'src/app/models/Imovie';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';


@Component({
  selector: 'app-movie-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']

})

export class MovieListComponent implements OnInit {

  @Input() listMovies: Imovie[];

  //variable to store a history list in localstorage
  listMovieHistory: Imovie[] = [];

  //list of favorite movies
  favoriteList: Imovie[] = [];

  loading: boolean = false;
  notFound: boolean = false;

  @Input() text = '';

  @Output() awaitingSearch = new EventEmitter<any>();



  constructor(private route: ActivatedRoute, private dataService: DataService, private changeDetectorRef: ChangeDetectorRef, private storageService: LocalStorageService) {

    this.listMovies = []

    //get movie list localstorage
    this.listMovieHistory = this.storageService.getMovie(this.storageService.searchHistory) || [];

    //get favorite list localstorage
    this.favoriteList = this.storageService.getMovie(this.storageService.storageName) || [];
  }

  ngOnInit(): void {

    //get movie name to router and fire getmovie()
    this.route.params.subscribe(params => {
      this.text = params['text']
      this.getMovie();
    });
  }


  getMovie() {

    if (this.text !== null && this.text !== undefined) {


      this.awaitingSearch.emit(false);

      this.loading = true;
      this.notFound = false;
      this.dataService.getMovie(this.text).subscribe({
        next: (movie) => {

          //adds a new 'favorited' property to manage the favorites list
          movie['favorited'] = false;
          movie['moment'] = new Date().toLocaleString()

          if (movie.Response === 'False') {
            this.loading = false;
            this.notFound = true
            this.listMovies = []

          } else {

            //filter if the search already exists in localstorage
            const found = this.favoriteList.filter(element => element.imdbID === movie.imdbID);

            //case exits arrow true
            if (found.length > 0) {

              movie['favorited'] = true;
            }

            this.listMovies = [movie]

            //save search history to localstorage
            this.listMovieHistory.unshift(movie);
            this.storageService.setMovie(this.storageService.searchHistory, this.listMovieHistory)

            this.loading = false;
          }

          this.changeDetectorRef.detectChanges();

        },
        error: (error) => {
          this.loading = false;
          console.log("error", error)
        }
      })
    }

  }


}
