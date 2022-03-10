import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={RegisterForm()} />
        <Route path="/login" element={LoginForm()} />
      </Routes>
    </>
  )
}
export default App