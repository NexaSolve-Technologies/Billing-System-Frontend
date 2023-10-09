import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from '../src/components/auth/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App;
