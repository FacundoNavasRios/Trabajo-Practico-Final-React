import React from 'react';
import './IngredientList.css';  // Archivo de estilos

const IngredientList = ({ ingredients, setIngredients, availableIngredients }) => {
  // Función para agregar un ingrediente a la receta
  const addIngredientToRecipe = (ingredient) => {
    const ingredientExists = ingredients.some(item => item.name === ingredient.name);
    if (!ingredientExists) {
      // Si el ingrediente no está en la receta, lo agregamos con una cantidad de 1
      setIngredients([
        ...ingredients,
        { name: ingredient.name, quantity: 1 }  // Asignamos una cantidad inicial
      ]);
    }
  };

  return (
    <div className="ingredient-list-container">
      <h3>Ingredientes Disponibles</h3>
      <ul className="ingredient-list">
        {availableIngredients.map((ingredient, index) => (
          <li key={index} className="ingredient-item">
            <span>{ingredient.name}</span>
            <button onClick={() => addIngredientToRecipe(ingredient)}>
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
