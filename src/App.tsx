import { useState } from 'react'
import { Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm'
import UtentiComponent from './components/UtentiComponent';
import OrdiniPage from './components/ordini/OrdiniPage';


function App() {
  
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  //   const token = searchParams.get('token') ?? '';
  //   //dataStore.setToken();
  //   localStorage.setItem("token",token);


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UtentiComponent />}>
        
          


        
        </Route>
        <Route path="/nav" element={<OrdiniPage />} />
      </Routes>

    {/* <UtentiComponent />   */}
    </div>
  )
}

export default App
