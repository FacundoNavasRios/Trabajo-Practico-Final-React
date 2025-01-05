import React from 'react';
import './RecipeBuilder.css';

const RecipeBuilder = ({ ingredients, setIngredients }) => {
  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };


  return (
    <div className="recipe-builder-container">
      <h3>Ajusta tus ingredientes</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            <span>{ingredient.name}</span>
            <button onClick={() => removeIngredient(index)} className="delete">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeBuilder;


