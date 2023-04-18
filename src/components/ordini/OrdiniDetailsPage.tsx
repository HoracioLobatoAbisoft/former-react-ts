import React, { useState, useEffect } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Header from "../common/Header/Header";
import OrdiniDetailstComponent from "./components/OrdiniDetailstComponent";
import SearchOrdini from "./components/SearchOrdini";
import OrdiniServices from "./services/OrdiniServices";
import LoadingData from "../common/LoadingData/LoadingData";

const OrdineDetails = () => {
  const params = useParams();
  console.log(params.userId);

  const [ordine, setOrdine] = useState();

  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    OrdiniServices.getOrdiniById(params.userId).then((res) => {
      let data = res?.data.data[0];

      console.log(data);
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
    </div>
  );
};

export default OrdineDetails;
