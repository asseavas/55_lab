import { INGREDIENTS } from './Ingredient';
import IngredientSection from './components/IngredientSection/IngredientSection';
import React, {useState} from "react";
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
      <div className="ingredientsContainer">
        {INGREDIENTS.map((ingredient, index) => {
          const ingredientCount = ingredients.find(i => i.name === ingredient.name);
          return (
            <IngredientSection
              key={index}
              ingredient={ingredient}
              count={ingredientCount ? ingredientCount.count : 0}
              onAdd={() => addCount(ingredient.name)}
              onDelete={() => deleteCount(ingredient.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
