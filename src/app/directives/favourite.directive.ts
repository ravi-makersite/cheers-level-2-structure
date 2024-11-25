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
  }

  @HostListener('click') onClick(): void {
    if (this.cocktail) {
      this.isActive = !this.getActive(); // Toggle the state
      if (this.isActive) {
        this.renderer.addClass(this.el.nativeElement, "active");
      } else {
        this.renderer.removeClass(this.el.nativeElement, "active");
      }
      this.cocktailService.changeFavourite(this.cocktail, this.isActive)
    }
  }

  getActive(){
    let existingFavourites = this.cocktailService.favourites();
    if(existingFavourites?.length){
      let alreadyExist = existingFavourites.find(item => item.id == this.cocktail.id);
      return !!alreadyExist;
    }
    return false;
  }

}
