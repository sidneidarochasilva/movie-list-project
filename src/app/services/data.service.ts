import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIKEY = '8cb95fbc'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseurl = "https://www.omdbapi.com/";

  constructor(private http: HttpClient) { }

  getMovie(text: any): Observable<any> {
    return this.http.get(`${this.baseurl}?t=${text}&apikey=${APIKEY}`)
  }


}
