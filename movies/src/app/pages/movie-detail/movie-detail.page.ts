import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    const imdbID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetail(imdbID);
  }

  ngOnInit() {
  }

  /**
   * Key Movie
   * @param imdbID string
   */
  private getMovieDetail(imdbID: string): void {
    this.movieService.getMovieDetail(imdbID).subscribe(response => {
      this.movie = response;
    });
    
  }

  openWebsite(): void {
    window.open(this.movie.Website, '_blank');
  }

}
