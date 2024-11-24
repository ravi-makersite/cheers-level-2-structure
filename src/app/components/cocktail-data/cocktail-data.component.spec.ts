import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDataComponent } from './cocktail-data.component';

describe('CocktailDataComponent', () => {
  let component: CocktailDataComponent;
  let fixture: ComponentFixture<CocktailDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
