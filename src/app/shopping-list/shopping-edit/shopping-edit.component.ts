import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef! : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef! : ElementRef;
  @Output() ingredientAdded = new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  OnAddItem(){
    //Declare something as a constant if you dont intend to change it
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingredientName,ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
