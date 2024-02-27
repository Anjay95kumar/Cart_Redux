import React from 'react'
import Landing from './Component/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About'


import '../src/App.css'
import { Product } from './Component/Product'
// import { Contactus } from './Component/Contactus'
import CartPage from './Component/CartPage'
import Catogary from './Component/Catogary'
import Service from './Component/Service'
export default function App() {
  return (
    <div className='Main_app_container'>
      <BrowserRouter>
      <Landing />
      <Routes>
      <Route path='/' element={<Product />}/>
      <Route path='home' element={<Product />}/>
      <Route path='about' element={<About />}/>
      {/* <Route path='Contactus' element={<Contactus />}/> */}
      <Route path='cartpage' element={<CartPage/>}/>
      <Route path='catogary' element={<Catogary/>}/>
      <Route path='service' element={<Service/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

