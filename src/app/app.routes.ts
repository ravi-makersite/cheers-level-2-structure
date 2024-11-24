import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cocktails',
    loadComponent: () => import('./pages/cocktails/cocktails.component').then(m => m.CocktailsComponent)
  },
  {
    path: 'cocktails/:cocktailId',
    loadComponent: () => import('./pages/cocktails/cocktail-details/cocktail-details.component').then(m => m.CocktailDetailsComponent)
  },
  {
    path: "**", redirectTo: "cocktails"
  }
];
