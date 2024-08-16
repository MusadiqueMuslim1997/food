import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'; // Ensure the path is correct
import './RecipeList.css'; // Ensure CSS file exists

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        // if (!response.ok) {
        //   throw new Error(`Network response was not ok: ${response.statusText}`);
        // }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data.recipes)) {
          setRecipes(data.recipes);
        } else {
          setError('Recipes not found in response.');
        }
      }
    //    catch (err) {
    //     setError(`Fetch error: ${err.message}`);
    //   } 
      finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <p>Error: {error}</p>;
  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
