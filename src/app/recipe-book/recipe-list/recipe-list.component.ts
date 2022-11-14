import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Adfadfasdfsdfsdfsadf',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/11/04/0/FNM_120121-Pork-Katsu-Curry_s4x3.jpg.rend.hgtvcom.616.462.suffix/1636035328350.jpeg'
    ),
    new Recipe(
      'Recipe 2',
      'asdfasfsadfasdf',
      'https://wokeatrepeat.com/wp-content/uploads/2022/01/Chicken-Katsu-Curry-featured.jpg'
    ),
    new Recipe(
      'Recipe 3',
      'klajdsfl;dsflkjasdf',
      'https://www.chopstickchronicles.com/wp-content/uploads/2018/05/Chicken-Katsu-Curry-38-e1592700516243.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
