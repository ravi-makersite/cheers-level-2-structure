import { CocktailDetailsService } from './../../pages/cocktails/cocktail-details/cocktail-details.service';
import { Cocktail } from './../../pages/cocktails/cocktails.model';
import { Component, computed, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BadgeDirective } from '../../directives/badge.directive';
import { FavouriteChangeDirective } from '../../directives/favourite.directive';
import { RouterModule } from '@angular/router';
import { CocktailService } from '../../pages/cocktails/cocktails.service';

@Component({
  selector: 'app-cocktail-data',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BadgeDirective,
    FavouriteChangeDirective,
    CommonModule,
    RouterModule
  ],
  templateUrl: './cocktail-data.component.html',
  styleUrl: './cocktail-data.component.scss'
})
export class CocktailDataComponent {
  cockTail = input.required<Cocktail>();

  isActive = computed(()=>{
    let favourites = this.cocktailService.favourites();
    if(this.cocktailService.favourites()?.length){
      let itemFound = favourites.find(item => item.id == this.cockTail().id);
      return !!itemFound;
    }
    return false;
  })

  constructor(private cocktailService: CocktailService){}

}
