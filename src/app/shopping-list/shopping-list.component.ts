import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Rice', 20),
    new Ingredient('Meat', 20),
    new Ingredient('Veggies', 20),
  ];

  constructor() {}

  ngOnInit(): void {}
}
