import { INGREDIENTS } from './Ingredient';
import IngredientButton from "./components/IngredientButton/IngredientButton";
import './App.css';

const App = () => (
  <>
    <div className="ingredientButtonsContainer">
      {INGREDIENTS.map((ingredient, index) => (
        <IngredientButton
          key={index}
          image={ingredient.image}
          name={ingredient.name}
          price={ingredient.price}
        />
      ))}
    </div>
  </>
);

export default App;
