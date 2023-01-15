import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public storageName = 'movies-list';
  public searchHistory = 'search-history';

  constructor() { }

  getMovie(name: any): any {
    return JSON.parse(localStorage.getItem(name) as any);
  }

  setMovie(text: string, data: any) {
    localStorage.setItem(text, JSON.stringify(data));
  }

}
