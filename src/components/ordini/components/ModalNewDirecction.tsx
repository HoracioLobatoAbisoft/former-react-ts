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
                    placeholder="Inserisci il Destinatario"
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
                    placeholder="Inserisci il tuo indirizzo"
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
                        placeholder="Inserisci il tuo CAP"
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
                      placeholder="Inserisci il tuo CAP"
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
                    placeholder="Inserisci un numero di Telefono"
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
              <div className="flex w-56  items-center bg-[#f58220] pr-2 pl-6 text-white rounded">
                <button
                  className="font-bold uppercase text-sm  py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={saveNewIndirizzo}
                >
                  salvare nuovo indirizzo
                </button>
                {showLoading && (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNewDirecction;
