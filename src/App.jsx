import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Soluciones a tu alcance"/>
   
    </div>
  )
}

export default App
