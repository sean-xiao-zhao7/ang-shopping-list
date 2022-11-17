import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
})
export class RecipeBookComponent {
  currentRecipe: Recipe = new Recipe(
    'Recipe 1',
    'Adfadfasdfsdfsdfsadf',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/11/04/0/FNM_120121-Pork-Katsu-Curry_s4x3.jpg.rend.hgtvcom.616.462.suffix/1636035328350.jpeg'
  );

  onEmitChangeRecipe(recipe: Recipe) {
    this.currentRecipe = recipe;
  }
}
