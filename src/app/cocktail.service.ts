import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CocktailJson } from './models/cocktail.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  public getCocktails(): Observable<CocktailJson>{
    return this.http.get<CocktailJson>("assets/cocktail.json");  
  }
}
