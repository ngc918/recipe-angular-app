import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Bacon CheeseBurger',
      'Juciest bacon cheeseburger you will ever taste!',
      'https://www.seriouseats.com/thmb/UYBD63znuGq7_sNduzIPE4LAswk=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__07__20130723-bacon-weave-food-lab-burger-step-by-step-27-4f43a832acb242789dbc4133810a281f.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Buns', 2),
      ]
    ),
    new Recipe(
      'Hawaiin Pizza',
      'Pineapple is good on pizza, trust.',
      'https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg',
      [
        new Ingredient('Tomate sauce', 1),
        new Ingredient('Ham', 1),
        new Ingredient('Pineapple', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
