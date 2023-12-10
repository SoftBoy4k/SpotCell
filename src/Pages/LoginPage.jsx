import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register';
import './LoginPage.css'
import { Button } from '@mui/material';

const LoginPage = () => {

  const [isRegister, setIsRegister] = useState(true);

  const clickHandler = () => {
    setIsRegister(!isRegister)
  }

  return (
    <div className='loginPage'>
      <Button 
        variant='contained' 
        sx={{ 
          position: 'absolute', 
          right: 10, 
          top: 10 
        }} 
        onClick={clickHandler}
      >
        { isRegister ? 'Войти' : 'Регистрация'}
      </Button>
      { isRegister ? <Register /> : <Login/> } 
    </div>
    
  )
}

export default LoginPage