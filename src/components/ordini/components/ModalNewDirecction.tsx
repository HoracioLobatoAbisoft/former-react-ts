import React, { useState, useEffect } from "react";
import OrdiniServices from "../services/OrdiniServices";
import Swal from "sweetalert2";
import SweeAlert from "../../../services/SweeAlert";

const ModalNewDirecction = ({ handleNewModal, updateList }: any) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-blue",
      cancelButton: "btn btn-red",
    },
    buttonsStyling: true,
  });

  const [showLoading, setShowLoading] = useState(false);

  const [riferimento, setRiferimento] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [Indirizzo, setIndirizzo] = useState("");
  const [nazione, setfirstNazione] = useState("");

  const [localitaData, setLocalitaData] = useState();

  const [validate, setValidate] = useState(false);

  const [telefono, setTelefono] = useState("");

  const [idProvincia, setIdProvincia] = useState();

  const [cap, setCap] = useState();

  const [idCap, setIdCap] = useState();

  const [comune, setComune] = useState();

  const [nacioniText, setNacioniText] = useState();

  const [nacioniSelected, setNacioniSelected] = useState(0);

  const [capText, setCapText] = useState("s");

  const [localitaCap, setLocalitaCap] = useState("");

  const [localitaText, setLocalitaText] = useState();

  const handleNacioniSelected = (e: any) => {
    setNacioniSelected(e.target.value);
  };

  const handleLocalita = (e: any) => {
    const selectedOptions = e.target.selectedOptions;

    console.log(e.target.value);

    console.log(selectedOptions);
    for (let i = 0; i < selectedOptions.length; i++) {
      const option = selectedOptions[i];
      const idCap = option.value;
      const comune = option.getAttribute("data-comune");
      const cap = option.getAttribute("data-cap");
      const idProvincia = option.getAttribute("id-provincia");
      setIdCap(idCap);
      setComune(comune);
      setIdProvincia(idProvincia);
      setCap(cap);
    }

    //setLocalitaData(e.target.value)
  };

  const saveNewIndirizzo = () => {
    let data;
    if (nacioniSelected == 0) {
      
      if (!riferimento || !destinatario || !Indirizzo || idCap == 0 || idCap == undefined) {
        setValidate(true);
        SweeAlert.confirmAlert(
          "Error",
          "Tutti i campi sono obbligatori",
          "warning"
        );
        return;
      }
      data = {
        idut: 14,
        indirizzo: Indirizzo,
        referimento: riferimento,
        destinatario: destinatario,
        telefono: telefono,
        idNazione: nacioniSelected,
        idCap: idCap,
        idProvincia: idProvincia,
        comune: comune,
        cap: cap,
      };
    } else {
      if (!riferimento || !destinatario || !Indirizzo || !localitaCap) {
        setValidate(true);
        SweeAlert.confirmAlert(
          "Error",
          "Tutti i campi sono obbligatori",
          "warning"
        );
        return;
      }

      data = {
        idut: 14,
        indirizzo: Indirizzo,
        referimento: riferimento,
        destinatario: destinatario,
        telefono: telefono,
        idNazione: nacioniSelected,
        localitaCap: localitaCap,
      };
    }

   
    OrdiniServices.postNewIndirizzo(data).then((res) => {
      console.log(res);
      setValidate(false)
      handleNewModal()
      updateList()

    });

    console.log(data);
  };

  useEffect(() => {
    OrdiniServices.getNacioni().then((res) => {
      let data = res?.data.data;
      setNacioniText(data);
    });
  }, []);

  useEffect(() => {
    OrdiniServices.getCaricaLocalita(capText).then((res) => {
      let data = res?.data.data;
      console.log(data);
      setLocalitaText(data);
    });
  }, [capText]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-60 outline-none focus:outline-none">
        <div className="relative w-[800px] my-6 mx-auto ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t relative">
              <h3 className="text-xl uppercase text-center font-semibold text-[#f58220]">
                Nuovo indirizzo
              </h3>
              <button
                className=" border-0 text-black absolute top-4 right-4 text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleNewModal()}
              >
                <span className="bg-transparent text-black  text-4xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              <button></button>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <div className="mt-4">
                <label htmlFor="">Riferimento *</label>
                <div className="relative">
                  <input
                    onChange={(e) => setRiferimento(e.target.value)}
                    name="referimento"
                    type="text"
                    className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                    placeholder="Dai un nome a questo indirizzo (es. Casa, Ufficio, ecc...)"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="">Destinatario *</label>
                <div className="relative">
                  <input
                    onChange={(e) => setDestinatario(e.target.value)}
                    type="text"
                    className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                    placeholder="Inserisci il destinatario"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="">Indirizzo *</label>
                <div className="relative">
                  <input
                    onChange={(e) => setIndirizzo(e.target.value)}
                    type="text"
                    className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                    placeholder="Inserisci indirizzo"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="">Nazione *</label>
                <div className="relative">
                  <select
                    id="countries"
                    className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded focus:border-[#f58220]  block w-full p-2.5"
                    onChange={(e) => handleNacioniSelected(e)}
                  >
                    {nacioniText?(nacioniText as unknown as any).map((el:any) => {
                      return (
                        <option key={el.idNazione} value={el.idNazione}>
                          {" "}
                          {el.nazione}{" "}
                        </option>
                      );
                    }):null}
                  </select>
                </div>
              </div>

              {nacioniSelected == 0 && (
                <>
                  <div className="mt-4">
                    <label htmlFor="">Cap *</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                        placeholder="Inserisci il Codice di Avviamento Postale"
                        onChange={(e) => setCapText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="">Località *</label>
                    <div className="relative">
                      <select
                        name="localitaCap"
                        id="countries"
                        className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded focus:border-[#f58220]  block w-full p-2.5"
                        onChange={(e) => handleLocalita(e)}
                      >
                        {localitaText?(localitaText as unknown as any).map((el:any) => {
                          return (
                            <option
                              key={el.idCap}
                              value={el.idCap}
                              id-provincia={el.idProvinciaSel}
                              data-cap={el.cap}
                              data-comune={el.comune}
                              data-riassunto={el.riassunto}
                            >
                              {" "}
                              {el.riassunto}{" "}
                            </option>
                          );
                        }): null}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {nacioniSelected != 0 && (
                <div className="mt-4">
                  <label htmlFor="">Localita e CAP *</label>
                  <div className="relative">
                    <input
                      onChange={(e) => setLocalitaCap(e.target.value)}
                      type="text"
                      className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                      placeholder="Inserisci il Codice di Avviamento Postale"
                    />
                  </div>
                </div>
              )}

              <div className="mt-4">
                <label htmlFor="">Telefono </label>
                <div className="relative">
                  <input
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text"
                    className="text-sm placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                    placeholder="Inserisci un numero di telefono"
                  />
                </div>
              </div>
              <div>{validate && <p className="mt-2 text-lg text-[#f58220] ">Tutti i campi sono obbligatori</p>}</div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleNewModal()}
              >
                Anulla
              </button>
              <div className="flex justify-center items-center w-56 bg-[#f58220] text-white rounded">
                <button
                  className="font-bold uppercase text-sm px-4  py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={saveNewIndirizzo}
                >
                  salva nuovo indirizzo
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNewDirecction;
