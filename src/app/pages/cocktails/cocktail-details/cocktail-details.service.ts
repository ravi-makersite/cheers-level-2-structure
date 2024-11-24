import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from '../cocktails.model';

@Injectable({providedIn: 'root'})
export class CocktailDetailsService {
  constructor(private httpClient: HttpClient) { }


  getCocktailById(id:string){
    return this.httpClient.get<Cocktail>('/cocktails/'+id);
  }

}
