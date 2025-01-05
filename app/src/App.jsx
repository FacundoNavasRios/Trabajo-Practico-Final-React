import React, {useState} from 'react'
import Home from './componentes/Home/Home'
import CreateRecipe from './componentes/CreateRecipe/CreateRecipe'

const App = () => {
  const[view, setView] = useState("home")

  return (
    <div className='app-container'>

      {view === "home" && <Home setView={setView} />}

      {view === "create-recipe" && <CreateRecipe setView={setView} />}

    </div>




    
  )
}

export default App
