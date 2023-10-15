import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from '../src/components/auth/Registration';
import SignIn from './components/auth/SignIn';
import ProductPage from './components/products/productpage';
import Checkout from './components/checkout/checkout';
import { sampleProducts } from './components/checkout/checkout';
import Dashboard from './components/Dashboard/dashboard';
import NewProduct from './components/newproduct/newproduct';
import NewPackage from './components/newpackage/newpackage';
import DeletePage from './pages/DeletePackages/deletepage';
import ServiceCard from './components/servicespage/services';
import NewService from './components/newservice/newservice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Registration />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/productpage' element={<ProductPage/>}></Route>
        <Route path='/checkout' element={<Checkout selectedProducts={sampleProducts}/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/newproduct' element={<NewProduct/>}></Route>
        <Route path='/newpackage' element={<NewPackage/>}></Route>
        <Route path='/deletepage' element={<DeletePage />} ></Route>
        <Route path='/servicecard' element={<ServiceCard/>}></Route>
        {/* <Route path='/newservice' element={<NewService/>}></Route> */}
        <Route path='/deletedata' element={<DeletePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
