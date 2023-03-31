import React, { useState, useEffect, useRef } from "react";

import ClienteService from "../../src/services/LoginService";

const UtentiComponent = () => {
  const [argomentiDate, setArgomentiDate] = useState<[]>();

  const [email, setEmail] = useState("");

  useEffect(() => {
    ClienteService.getUtenti().then((res) => {
      let data = res?.data.data;

      console.log(data);
      setArgomentiDate(data);
    });
  }, []);

  console.log(argomentiDate);

  return (
    <div className="flex justify-center">
      <div >
        <div className="text-center text-xl">Indici Ricerca</div>
        <table className="px-2 border py-2">
          <thead className="border-b">
            <tr>
              <th className="border-r px-2 py-1">IdListinoBase</th>
              <th className="border-r px-2 py-1">IdPrev</th>
              <th className="border-r px-2 py-1">InEvidenza</th>
              <th className="border-r px-2 py-1">NomeListino</th>
              
              <th className="border-r px-2 py-1">Prezzo1</th>
              <th className="border-r px-2 py-1">Prezzo1Riv</th>
              <th className="border-r px-2 py-1">Prezzo2</th>
              <th className="border-r px-2 py-1">Prezzo2Riv</th>
              <th className="border-r px-2 py-1">Prezzo3</th>
            </tr>
          </thead>
          <tbody>
            {argomentiDate?.map((e: any) => {
              console.log(e.idIndiceRicerca);
              return (
                <tr className="border-b" key={e.idIndiceRicercaIdIndiceRicerca}>
                  <td className="border-r px-2 py-1">{e.idListinoBase}</td>
                  <td className="border-r px-2 py-1">{e.idPrev}</td>
                  <td className="border-r px-2 py-1">{e.inEvidenza}</td>
                  <td className="border-r px-2 py-1">{e.nomeListino}</td>
                  <td className="border-r px-2 py-1">{e.prezzo1}</td>
                  <td className="border-r px-2 py-1">{e.prezzo1Riv}</td>
                  <td className="border-r px-2 py-1">{e.prezzo2}</td>
                  <td className="border-r px-2 py-1">{e.prezzo2Riv}</td>
                  <td className="border-r px-2 py-1">{e.prezzo3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UtentiComponent;
