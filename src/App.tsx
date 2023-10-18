import React from "react";
import { Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
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
import IndirizziCorriere from "./components/IndirizziCorriere/IndirizziCorriere";
import DatiFiscali from "./components/AreaRiservata/datiFiscali/DatiFiscali";
import DiscountPage from "./components/AreaRiservata/discount/DiscountPage";
import Hijo from "./components/Hijo";
import UserContextProvider from "./context/UserContextProvider";
import ContentOrdini from "./components/ordini/components/ContentOrdini";
import { FormProdotto } from "./components/formProdotto";
import { FormProdottoModificated } from "./components/formProdottoV1";
export const userContext = React.createContext({});
import "./App.css";
import ConfiguraProdottoRefactor from "./components/formProdottoV1/ConfiguraProdottoRefactor";
import CarrelloProdotto from "./components/carrello/CarrelloProdotto";
import AllegaIFile from "./components/carrello/components/AllegaIFile";import AreaPersonale from "./components/AreaPersonale/AreaPersonale";
import RichiediUnCampioneGratuitoPage from "./components/RichiediUnCampioneGratuito/pages/RichiediUnCampioneGratuitoPage";
import CampioneGratuitoRichiestoPage from "./components/CampioneGratuitoRichiesto/pages/CampioneGratuitoRichiestoPage";
import DettaglioOrdine from "./components/AreaPersonale/Componentes/ITouiOrdini/DettaglioOrdine";
 "./components/carrello/components/AllegaIFile";
import DettaglioLavoroPage from "./components/DettaglioLavoro/pages/DettaglioLavoroPage";
import PreventivoPDF from "./components/formProdottoV1/components/PreventivoPDF";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //debugger
  const idUtd = searchParams.get("id") ?? "";
  const token = searchParams.get("token") ?? "";

  localStorage.setItem("token", token);
  localStorage.setItem("idUtd", idUtd);

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<OrdiniPage />}></Route>
          <Route path="/ordiniTabella" element={<ContentOrdini />} />
          <Route path="/nav" element={<OrdiniPage />} />
          <Route path="/lavori" element={<LavoriPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Profilo" element={<ProfilePague />} />
          <Route path="/DatiFiscali" element={<DatiFiscali />} />
          <Route path="/Discount" element={<DiscountPage />} />
          <Route path="/Password" element={<PasswordPague />} />
          <Route path="/PassDimenticata" element={<PasswordDimenticata />} />
          <Route path="/form-prodotto" element={<FormProdotto />} />
          <Route path="/form-prodotto-v1/:idPrev/:idFormProd" element={<FormProdottoModificated />} />
          <Route path="/form-prodotto-v1/:idPrev/:idFormProd/:IdTipoCarta/:IdColoreStampa/:idFogli/:idUt" element={<FormProdottoModificated />} />
          <Route path="/form-prodotto-v1/:idPrev/:idFormProd/:IdTipoCarta/:IdColoreStampa/:idFogli/:idUt/:idFustella/:idCategoria/:idBaseEtiquete/:idAltezaEtiquete" element={<FormProdottoModificated />} />
          <Route path="/form-prodotto-v2/:idPrev/:idFormProd/:IdTipoCarta/:IdColoreStampa/:idFogli/:idUt/:idFustella/:idCategoria/:idBaseEtiquete/:idAltezaEtiquete" element={<ConfiguraProdottoRefactor />} />
          <Route path="/carrello" element={<CarrelloProdotto/>}/>
          
          <Route
            path="/OrdineDetails/:userId"
            element={<OrdineDetailsPage />}
          />
          <Route path="/glosario" element={<GlosarioTipografico />} />
          <Route path="/Contact" element={<ContactPage />} />

          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/indirizziCorriere" element={<IndirizziCorriere />} />
          <Route path="/AreaPersonale/*" element={<AreaPersonale />} />
          <Route path="/dettaglioOrdine/:idConsegna" element={<DettaglioOrdine />} />
          <Route path="/dettaglioOrdine/:idConsegna/:tokenPP" element={<DettaglioOrdine />} />
          <Route path="/richiedi-un-campione-gratuito" element={ <RichiediUnCampioneGratuitoPage/>} />
          <Route path="/campione-gratuito-registrata" element={ <CampioneGratuitoRichiestoPage/>} />
          {/* <Route path="/preventiView" element={ <PreventivoPDF/>} /> */}
          <Route path="/dettaglio-lavoro" element={ <DettaglioLavoroPage/>} />
          <Route path="/:idDettaglioLavoro/dettaglio-lavoro" element={ <DettaglioLavoroPage/>} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
