import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'

const Reciperoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='recipe' element={<Recipe/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='create-recipe' element={<Create/>}></Route>
    </Routes>
  )
}

export default Reciperoutes