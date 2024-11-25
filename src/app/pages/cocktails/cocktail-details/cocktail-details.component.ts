import { CocktailService } from './../cocktails.service';
import { CocktailDetailsService } from './cocktail-details.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktails.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BadgeDirective } from '../../../directives/badge.directive';
import { FavouriteChangeDirective } from '../../../directives/favourite.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    BadgeDirective,
    FavouriteChangeDirective,
    CommonModule
  ],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  cocktailId = input<string>();
  private destroyRef = inject(DestroyRef);

  cocktailDetails:Cocktail;

  constructor(private cocktailDetailSerivce:CocktailDetailsService,
      public location:Location,
      private cocktailService: CocktailService){
    // this.getCocktailData();
  }

  ngOnInit(){
    this.getCocktailData();
  }
  getCocktailData(){
    this.cocktailDetailSerivce.getCocktailById(this.cocktailId()!)
      .pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val=>{
      this.cocktailDetails = val;
    });
  }

  isActive = computed(()=>{
    let favourites = this.cocktailService.favourites();
    if(this.cocktailService.favourites()?.length){
      let itemFound = favourites.find(item => item.id == this.cocktailDetails.id);
      return !!itemFound;
    }
    return false;
  })
}
