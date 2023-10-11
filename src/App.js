import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from '../src/components/auth/Registration';
import SignIn from './components/auth/SignIn';
import Navbar from './components/navbar/navbar';
import ProductPage from './components/products/productpage';
import Checkout from './components/checkout/checkout';
import { sampleProducts } from './components/checkout/checkout';
import Dashboard from './components/Dashboard/dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Registration />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/Dashboard' element={<Navbar/>}/>
        <Route path='/productpage' element={<ProductPage/>}></Route>
        <Route path='/checkout' element={<Checkout selectedProducts={sampleProducts}/>}/>
        <Route path='/'element={<Dashboard/>}/>

      </Routes>
    </Router>
  )
}

export default App;
