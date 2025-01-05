import React from 'react'

const RecipeCard = ({ ingredient, onToggle }) => {
  return (
    <li>
      <span style={{ textDecoration: ingredient.complete ? 'line-through' : 'none' }}>
        {ingredient.name}
      </span>
    </li>
  );
};

export default RecipeCard;