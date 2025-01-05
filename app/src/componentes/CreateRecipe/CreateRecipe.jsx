import React, { useState } from 'react';
import './CreateRecipe.css';
import RecipeCard from '../RecipeHistory/RecipeCard';
import RecipeBuilder from '../CreateRecipe/RecipeBuilder';
import IngredientList from '../CreateRecipe/IngredientList';

const CreateRecipe = ({ setView }) => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState('');


  const availableIngredients = [
    {name: 'Huevo'},
    {name: 'Harina'},
    {name: 'Arroz'},
    {name: 'Ajo'},
    {name: 'Atún'},
    {name: 'Carne'},
    {name: 'Pollo'},
    {name: 'Sal'},
    {name: 'Azucar'},
    {name: 'Mayonesa'},
  ];

  const addIngredient = () => {
    if (ingredientName.trim()) {
      setIngredients([...ingredients, { name: ingredientName, quantity: 1 }]);
      setIngredientName('');
    }
  };

  const toggleIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].complete = !updatedIngredients[index].complete;
    setIngredients(updatedIngredients);
  };

  return (
    <div className="create-recipe-container">
      <h2>Gestiona tus recetas</h2>
      <IngredientList
        availableIngredients={availableIngredients} 
        ingredients={ingredients}
        setIngredients={setIngredients}
      />

      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Escribe un ingrediente..."
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <button className="button" onClick={addIngredient}>Agregar</button>
      </div>

      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <RecipeCard
            key={index}
            ingredient={ingredient}
            onToggle={() => toggleIngredient(index)}/>
        ))}
      </ul>

      <RecipeBuilder ingredients={ingredients} setIngredients={setIngredients} />

      <button className="button" onClick={() => setView('home')}>Volver al inicio</button>
    </div>
  );
};

export default CreateRecipe;

