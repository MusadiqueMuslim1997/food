// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import RecipeList from './pages/RecipeList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <RecipeList />
      <Footer/>
    </>
  );
}

export default App;
