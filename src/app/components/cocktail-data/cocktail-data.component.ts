import { Cocktail } from './../../pages/cocktails/cocktails.model';
import { Component, input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BadgeDirective } from '../../directives/badge.directive';
import { FavouriteChangeDirective } from '../../directives/favourite.directive';
import { RouterModule } from '@angular/router';

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


  constructor(){}

}
