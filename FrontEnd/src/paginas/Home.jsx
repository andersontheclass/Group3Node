import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'


function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a la Biblioteca</h1>
      <p>"Los libros son espejos: Solo se ve en ellos lo que uno ya lleva dentro".</p>
      <h4>Carlos Ruiz Zafón</h4>
      <button onClick={handleRegisterClick} className="register-button">
        Regístrate
      </button>
    </div>
  );
}

export default Home;
