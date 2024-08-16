// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import RecipeList from './pages/RecipeList';

function App() {
  return (
    <>
      <NavBar />
      {/* <RecipeCards/> */}
      <RecipeList />
    </>
  );
}

export default App;
