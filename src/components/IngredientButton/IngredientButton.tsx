import { Ingredient } from '../../Ingredient';
import React from "react";
import './IngredientsButton.css';

const IngredientButton: React.FC<Ingredient> = ({image, name}) => {
  return (
    <div className="ingredientButton">
      <div className="imageContainer">
        <img src={image} alt={`${name}Image`} />
      </div>
      <p className="ingredientName">{name}</p>
    </div>
  );
};

export default IngredientButton;