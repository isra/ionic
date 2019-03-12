import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MovieService, SearchType } from '../../services/movie.service';
import { all } from 'q';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  title: '';
  searchType: SearchType = SearchType.all;
  results: Observable<any>;

  constructor(
    private movieService: MovieService
  ) {
    
  }

  ngOnInit() {
  }

  searchItems(): void {
    this.results = this.movieService.search(this.title, this.searchType);
  }

}
