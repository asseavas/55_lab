import React from 'react';
import './Burger.css';

interface BurgerProps {
  ingredients: { name: string; count: number }[];
}

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
  const renderIngredients = () => {
    const renderedIngredients = [];

    for (const ingredient of ingredients) {
      for (let i = 0; i < ingredient.count; i++) {
        renderedIngredients.push(
          <div key={`${ingredient.name}-${i}`} className={`${ingredient.name}`} />
        );
      }
    }

    return renderedIngredients;
  };

  return (
    <div className="burgerContainer">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {renderIngredients()}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;