import React from 'react'
import './Home.css';
import CreateRecipe from '../CreateRecipe/CreateRecipe';

const Home = ({setView}) => {
  return (
    <>
    <div className='home-container'>
        <h1>¿Qué te gustaría cocinar?</h1>
        <p>Crea y gestiona tus recetas con esta herramienta</p>
        <button className='button' onClick={() => setView("create-recipe")}>Crear recetas</button>
        <button className='button'>Ver recetas</button>
    </div>
    </>
  )
}

export default Home
