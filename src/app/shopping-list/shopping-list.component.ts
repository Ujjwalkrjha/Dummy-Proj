import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrdients:ingredient[] = [
  new ingredient ('Apples',5),
  new ingredient ('Orange',50),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(newIngredient:ingredient){
    this.ingrdients.push(newIngredient);
  }

}
