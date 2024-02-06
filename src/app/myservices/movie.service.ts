import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [

    { id: 1, title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    { id: 2, title: 'Millers Crossing', year: '1990', director: 'Francis Ford Coppola'},
    { id: 3, title: 'Dial M for Murder', year: '1954', director: 'Francis Ford Coppola'},
    { id: 4, title: 'whiplash', year: '2014', director: 'Francis Ford Coppola'}
    ];
  
    getMovies() { 
      return this.moviesList;
    }
}
