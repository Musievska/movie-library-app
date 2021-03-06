import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import PasswordResetFormEmail from './components/PasswordResetFormEmail';
import PasswordResetFormPassword from './components/PasswordResetFormPassword';


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/password/reset/:token'
        element={<PasswordResetFormPassword/>}/>
        <Route
          path='/account/forgot'
          element={<PasswordResetFormEmail/>}
        />
        <Route path='/register' element={<RegisterForm/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/welcome' element={<Welcome/>} />
      </Routes>
      </>
  )
}
export default App;