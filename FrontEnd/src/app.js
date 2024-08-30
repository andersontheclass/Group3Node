// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home'; 
import Login from './paginas/Login'; 
import Browser from './paginas/Browser'; 
import Dashboard from './paginas/Dashboard'; 
import Forms from './paginas/Forms'; 
import Profile from './paginas/profile'; 
import Reports from './paginas/Reports'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta de inicio */}
        <Route path="/login" element={<Login />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;