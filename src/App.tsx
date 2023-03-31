import { useState } from 'react'
import { Route, useLocation } from "react-router-dom";
import './App.css'
import LoginForm from './components/LoginForm'
import UtentiComponent from './components/UtentiComponent';

function App() {
  
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token') ?? '';
    //dataStore.setToken();
    localStorage.setItem("token",token);


  return (
    <div className="bg-gray-50 w-full h-screen pt-32">
     <LoginForm />
    {/* <UtentiComponent />   */}
    </div>
  )
}

export default App
