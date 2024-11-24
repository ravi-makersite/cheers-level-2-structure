import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[alcaholic]',
  standalone: true
})
export class BadgeDirective {

  @Input('alcaholic') alcaholic: boolean = false; // Condition to add/remove class
  @Input() className: string = ''; // The class to be added/removed

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alcaholic']) {
      if (this.alcaholic) {
        this.renderer.addClass(this.el.nativeElement, 'alcoholic-badge');
        this.renderer.setProperty(this.el.nativeElement, 'textContent', 'Alcaholic');
      } else {
        this.renderer.addClass(this.el.nativeElement, 'non-alcoholic-badge');
        this.renderer.setProperty(this.el.nativeElement, 'textContent', 'Non Alcoholic');
      }
    }
  }

}
