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
import NewProduct from './components/newproduct/newproduct';
import NewPackage from './components/newpackage/newpackage';


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
        <Route path='/newproduct' element={<NewProduct/>}></Route>
        <Route path='/newproducts' element={<NewPackage/>}></Route>


      </Routes>
    </Router>
  )
}

export default App;
