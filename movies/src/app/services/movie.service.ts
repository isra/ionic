import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const APIKEY = '9e250e5a';

export enum SearchType {
  all = '',
  movie = 'movie', 
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = `http://www.omdbapi.com/`;
  }

  search(title: string, type: SearchType): Observable<any> {
    const url = `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${APIKEY}`;
    return this.http
    .get(url)
    .pipe(       
      map(response =>{      
        return response['Search'];
      })
    );
  }

  getMovieDetail(movieID: string): Observable<any> {
    const url = `${this.url}?i=${movieID}&plot=full&apikey=${APIKEY}`;
    return this.http.get(url);
  }
}
