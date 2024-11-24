import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { CocktailService } from '../pages/cocktails/cocktails.service';
import { Cocktail } from '../pages/cocktails/cocktails.model';

@Directive({
  selector: '[favouriteChange]',
  standalone: true
})
export class FavouriteChangeDirective implements OnChanges {

  @Input('favouriteChange') cocktail: Cocktail;

  private isActive: boolean = false; // Track the toggle state

  constructor(private el: ElementRef, private renderer: Renderer2, private cocktailService: CocktailService) {
  }

  ngOnChanges(changes: SimpleChanges){
    this.checkFavouriteInitially();
  }

  @HostListener('click') onClick(): void {
    if (this.cocktail) {
      this.isActive = !this.isActive; // Toggle the state
      if (this.isActive) {
        this.renderer.addClass(this.el.nativeElement, "active");
      } else {
        this.renderer.removeClass(this.el.nativeElement, "active");
      }
      this.cocktailService.changeFavourite(this.cocktail, this.isActive)
    }
  }

  checkFavouriteInitially(){
    if(this.isFavourite()){
      this.onClick();
    }
  }

  isFavourite(){
    let favourites = this.cocktailService.favourites();
    if(favourites?.length){
      let isFound = favourites.find(p => p.id === this.cocktail.id);
      return !!isFound;
    }
    return false;
  }

}
