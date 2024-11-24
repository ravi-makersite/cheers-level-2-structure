import { Observable } from 'rxjs';
import { Component, computed, signal,  } from '@angular/core';
import { CocktailService } from './cocktails.service';
import { HttpClientModule } from '@angular/common/http';
import { Cocktail } from './cocktails.model';
import { CommonModule } from '@angular/common';
import { CocktailDataComponent } from '../../components/cocktail-data/cocktail-data.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CocktailDataComponent, FormsModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss'
})
export class CocktailsComponent {

  cocktails = signal<Cocktail[]>([]);

  search = signal<string>('');

  filteredCocktails = computed(() =>{
    if(!this.search()) return this.cocktails();
    return this.cocktails().filter(p => p.name.toLowerCase().includes(this.search().toLowerCase()))
  })



  constructor(private cocktailService: CocktailService){
  }

  ngOnInit(){
    this.cocktailService.getCocktails().subscribe(value =>{
      this.cocktails.set(value);
    })
  }


}
