import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Cocktail } from './cocktails.model';
import { Observable } from 'rxjs';
import { LocalStorageConst } from '../../app.model';

@Injectable({providedIn: 'root'})
export class CocktailService {

  favourites = signal<Cocktail[]>([]);

  constructor(private httpClient: HttpClient) {
    this.favourites.set(this.getStoredFavouritesCocktails());
  }

  getCocktails(): Observable<Cocktail[]>{
    return this.httpClient.get<Cocktail[]>('/cocktails');
  }

  changeFavourite(cockTail:Cocktail, addFavourtie : boolean){
    if(addFavourtie){
      let cocktailAlreadyAdded = this.favourites().find(addedCocktail => addedCocktail.id == cockTail.id);
      if(!cocktailAlreadyAdded){
        this.favourites.set([...this.favourites(), cockTail]);
        localStorage.setItem(LocalStorageConst.favourite, JSON.stringify(this.favourites()));
        this.saveFavouriteLocally();
      }
    }
    else {
      this.removeFavourite(cockTail);
      return;
    }

  }

  removeFavourite(cockTail:Cocktail){
    if(!cockTail) return;
    let index = this.favourites().findIndex(addedCocktail => addedCocktail.id == cockTail.id);
    if(index !== -1){
      let updatedFavouriteList = this.favourites().splice(index, 1);
      this.favourites.set(updatedFavouriteList);
      this.saveFavouriteLocally();
    }
  }

  saveFavouriteLocally() {
    localStorage.setItem(LocalStorageConst.favourite, JSON.stringify(this.favourites()));
  }

  getStoredFavouritesCocktails(){
    let favourites = localStorage.getItem(LocalStorageConst.favourite);
    if(favourites){
      let favouritesCocktails: Cocktail[] = JSON.parse(favourites);
      return favouritesCocktails;
    }
    return [];
  }



}
