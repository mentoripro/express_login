import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { login, password })
      
      if (response.data.success) {
        setMessage(`Eto vawi dannye:  ${response.data.component}`)
      } else {
        setMessage(response.data.message)
      }
    } catch (error) {
      console.error('Error system:', error)
      setMessage('Please try again.')
    }
  };

  return (
    <div>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  )
}

export default App
