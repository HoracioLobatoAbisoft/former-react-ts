import { useState } from 'react'
import { Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm'
import UtentiComponent from './components/UtentiComponent';


function App() {
  
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  //   const token = searchParams.get('token') ?? '';
  //   //dataStore.setToken();
  //   localStorage.setItem("token",token);


  return (
    <div className="w-full h-screen mt-4">
      <Routes>
        <Route path="/" element={<UtentiComponent />}>

          


        
        </Route>
        <Route path="/about" element={<UtentiComponent />} />
      </Routes>

    {/* <UtentiComponent />   */}
    </div>
  )
}

export default App
