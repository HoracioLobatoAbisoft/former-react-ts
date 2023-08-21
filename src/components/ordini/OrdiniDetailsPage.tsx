import React, { useState, useEffect, useContext } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Header from "../common/Header/Header";
import OrdiniDetailstComponent from "./components/OrdiniDetailstComponent";
import SearchOrdini from "./components/SearchOrdini";
import OrdiniServices from "./services/OrdiniServices";
import LoadingData from "../common/LoadingData/LoadingData";
import Footer from "../common/Footer/Footer";
import UserContext from "../../context/UserContext";

const OrdineDetails = () => {
  const params = useParams();
  
  const userData = useContext(UserContext);
  //console.log(userData)
  const [ordine, setOrdine] = useState();

  const [showDate, setShowDate] = useState(false);
  
  useEffect(() => {
    OrdiniServices.getOrdiniById(params.userId, userData.id).then((res) => {
      let data = res?.data.data;

      //console.log(data);
      setOrdine(data);
      setShowDate(true);
    });
  }, []);
  return (
    <div>
      <Header />
      <SearchOrdini />

      {!showDate && (
        <LoadingData />
      )}

      <div className="container mx-auto">
        {showDate && <OrdiniDetailstComponent ordine={ordine} />}
      </div>
      <Footer />
    </div>
  );
};

export default OrdineDetails;
