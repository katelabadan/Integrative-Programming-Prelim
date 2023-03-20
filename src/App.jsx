import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'

function App() {
  const [Post, setPosts] = useState([])

  return (
    <Routes>
      <Route path='/' element ={ <Home/>}></Route>
      <Route path='/products/:id' element = {<ItemDetails/>}></Route>
    </Routes>
  )
}

export default App
