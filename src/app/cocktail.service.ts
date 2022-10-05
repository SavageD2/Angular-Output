import { Injectable } from '@angular/core';

import { Cocktail } from './models/cocktail.models';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public getCocktails(): Cocktail[]{
    return [{
      name:'Punch Exotique',
      price:99.99,
      picture:'assets/punch-exotique.jpg'
    },
  {
      name: 'Mojito',
      price: 99.99,
      picture: 'assets/mojito.jpg'
  },
  {
      name: 'Aperol Spritz',
      price: 99.99,
      picture: 'assets/aperol-spritz.jpg'
  }
  ];
  }
}
