import { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login/components/LoginForm";
import UtentiComponent from "./components/UtentiComponent";
import OrdiniPage from "./components/ordini/OrdiniPage";
import LavoriPage from "./components/lavori/LavoriPage";
import OrdineDetailsPage from "./components/ordini/OrdiniDetailsPage";
import RegisterPage from "./components/Login/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import PasswordDimenticata from "./components/Login/components/PasswordDimenticata";
import ProfilePague from "./components/AreaRiservata/profile/ProfilePague";
import PasswordPague from "./components/AreaRiservata/changuePassword/PasswordPague";
import GlosarioTipografico from "./components/GlosarioTipografico/GlosarioTipografico";
import ContactPage from "./components/common/contact/ContactPage";

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
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profilo" element={<ProfilePague />} />
        <Route path="/Password" element={<PasswordPague />} />
        <Route path="/PassDimenticata" element={<PasswordDimenticata />} />
        <Route path="/OrdineDetails/:userId" element={<OrdineDetailsPage />} />
        <Route path="/glosario" element={<GlosarioTipografico />} />
        <Route path="/Contact" element={<ContactPage />} />
        
        <Route path="/Contact" element={<ContactPage />} />
        
        <Route path="/glosario" element={<GlosarioTipografico />} />
      </Routes>

      {/* <UtentiComponent />   */}
    </div>
  );
}

export default App;
