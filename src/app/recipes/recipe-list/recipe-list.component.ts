import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =  new EventEmitter<Recipe>();
  recipes:Recipe[] = [
   new Recipe('A test recipe','Test description','https://topteenrecipes.com/wp-content/uploads/2021/05/Webp.net-compress-image-13.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1'),
   new Recipe('Another test recipe','Test description','https://topteenrecipes.com/wp-content/uploads/2021/05/Webp.net-compress-image-13.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1')
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
