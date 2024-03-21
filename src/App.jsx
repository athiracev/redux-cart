import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart';
import Home from './pages/Home';
import SingleView from './pages/SingleView';
import Wishlist from './pages/Wishlist';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Home/>}/>
      <Route path='/singleview/:id' element={<SingleView/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
    <Footer/>
    

      
    </>
  )
}

export default App
