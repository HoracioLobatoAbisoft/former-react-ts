import { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UtentiComponent from "./components/UtentiComponent";
import OrdiniPage from "./components/ordini/OrdiniPage";
import LavoriPage from "./components/lavori/LavoriPage";
import OrdineDetailsPage from "./components/ordini/OrdiniDetailsPage";
import RegisterPage from "./components/Login/RegisterPage";

function App() {
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  //   const token = searchParams.get('token') ?? '';
  //   //dataStore.setToken();
  //   localStorage.setItem("token",token);

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<UtentiComponent />}></Route>

        <Route path="/nav" element={<OrdiniPage />} />
        <Route path="/lavori" element={<LavoriPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/OrdineDetails/:userId" element={<OrdineDetailsPage />} />
        
      </Routes>

      {/* <UtentiComponent />   */}
    </div>
  );
}

export default App;
