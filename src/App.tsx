import { INGREDIENTS } from './Ingredient';
import React, {useState} from "react";
import IngredientsContainer from './components/IngredientsContainer/IngredientsContainer';
import Burger from './components/Burger/Burger';
import './App.css';

interface IngredientCount {
  name: string;
  count: number;
}

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<IngredientCount[]>(INGREDIENTS.map(ingredient => ({
    name: ingredient.name,
    count: 0,
  })));

  const addCount = (name: string) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ingredient =>
        ingredient.name === name ? { ...ingredient, count: ingredient.count + 1 } : ingredient
      )
    );
  };

  const deleteCount = (name: string) => {
    setIngredients(prevIngredients =>
      prevIngredients.map(ingredient =>
        ingredient.name === name && ingredient.count > 0 ? { ...ingredient, count: ingredient.count - 1 } : ingredient
      )
    );
  };

  return (
    <div className="constructorContainer">
      <IngredientsContainer
        ingredients={ingredients}
        onAdd={addCount}
        onDelete={deleteCount}
      />
      <Burger ingredients={ingredients} />
    </div>
  );
};

export default App;
