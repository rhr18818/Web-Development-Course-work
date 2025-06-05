import { Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Service from '../components/Service'
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'
import ServiceUpdate from '../components/ServiceUpdate'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          <Route path='product/details/:name' element={<ProductDetails/>}></Route>
          <Route path='service' element={<Service/>}>
            <Route path='details' element={<ServiceDetails/>} ></Route>
            <Route path='update' element={<ServiceUpdate/>} ></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default Mainroutes