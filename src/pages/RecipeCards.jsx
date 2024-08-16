import React from 'react';
import './Card.css';

const RecipeCards = ({ recipe }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img 
          src={recipe.image || 'https://via.placeholder.com/150'} 
          alt={recipe.name} 
          className="recipe-card-img" 
        />
      </div>
      <div className="card-head">{recipe.name}</div>
      <div className="card-des">{recipe.difficulty || 'No description available.'}</div>
      <div className="card-post">Prep Time: {recipe.prepTimeMinutes} minutes</div>
    </div>
  );
};

export default RecipeCards;
