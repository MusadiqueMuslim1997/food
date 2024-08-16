import React from 'react';
import './RecipeList.css'; // Ensure CSS file exists

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img 
        src={recipe.imageUrl || 'https://via.placeholder.com/150'} 
        alt={recipe.name} 
        className="recipe-card-img" 
      />
      <div className="recipe-card-body">
        <h2 className="recipe-card-title">{recipe.name}</h2>
        <p className="recipe-card-description">{recipe.description || 'No description available.'}</p>
        <div className="recipe-card-footer">
          <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
