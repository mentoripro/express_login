// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { login, password });
      
      if (response.data.success) {
        setMessage(`Welcome! Opening ${response.data.component} component.`);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <label>
        Login:
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
