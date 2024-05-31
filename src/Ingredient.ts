import cutletImage from './assets/burgerIngredients/cutlet.png';
import cheeseImage from './assets/burgerIngredients/cheese.png';
import leavesImage from './assets/burgerIngredients/lettuce-leaves.png';
import baconImage from './assets/burgerIngredients/bacon.png';

export interface Ingredient {
  name: string;
  price?: number;
  image: string;
}

export const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: cutletImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Lettuce leaves', price: 10, image: leavesImage},
  {name: 'Bacon', price: 60, image: baconImage},
];
