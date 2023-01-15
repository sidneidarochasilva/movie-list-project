import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from 'src/app/models/Imovie';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.less']
})
export class SearchHistoryComponent implements OnInit {


  @Input() listMovies: Imovie[];


  constructor(private storageService: LocalStorageService) {

    //search favorite movie list
    this.listMovies = this.storageService.getMovie(this.storageService.searchHistory) || [];

  }

  ngOnInit(): void {

  }


  //clear localStorage
  clearStorage() {
    localStorage.removeItem(this.storageService.searchHistory)
    this.listMovies = this.storageService.getMovie(this.storageService.searchHistory) || [];
  }


}
