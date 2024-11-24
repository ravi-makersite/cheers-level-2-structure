import { CocktailDetailsService } from './cocktail-details.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, DestroyRef, inject, input } from '@angular/core';
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

  constructor(private cocktailDetailSerivce:CocktailDetailsService,public location:Location){
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
}
