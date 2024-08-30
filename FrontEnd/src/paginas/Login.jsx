import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      setMessage('Registrado exitosamente!');
      navigate('/profile');
    } else {
      setMessage('Por favor, ingrese nombre de usuario y contraseña.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Registro</h2>
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Registrar</button>
        <p className={message === 'Registrado exitosamente!' ? 'success-message' : 'error-message'}>
          {message}
        </p>
      </div>
    </div>
  );
}

export default Login;
