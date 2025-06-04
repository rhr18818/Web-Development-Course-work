import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Service from './components/Service'
import Nav from './components/Nav'
const Day81_router = () => {
    //const [todos, settodos] = useContext(todoContext)
    //console.log(todos);
  return (
    <div className='w-screen h-screen p-6 bg-gray-800 text-white text-xl'>
        {/* <h1>Hello</h1> */}
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
        </Routes>
    </div>
  )
}

export default Day81_router


