import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from '../src/components/auth/Registration';
import SignIn from './components/auth/SignIn';
import Navbar from './components/navbar/navbar';
import CardPage from './components/cards/cardpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Registration />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/Dashboard' element={<Navbar/>}/>
        <Route path='/dashcard' element={<CardPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
