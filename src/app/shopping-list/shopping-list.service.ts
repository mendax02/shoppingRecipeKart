import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private  newIngredients: Ingredient[];

  private ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('PineApples', 5) ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients)
    // {
    //   this.addIngredient(ingredient);
    // }
    // tslint:disable-next-line: no-unused-expression

    // tslint:disable-next-line: prefer-const
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(this.ingredients.slice());
  }


}

