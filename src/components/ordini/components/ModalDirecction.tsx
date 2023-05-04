import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SweeAlert from "../../../services/SweeAlert";
import OrdiniServices from "../services/OrdiniServices";
import ModalNewDirecction from "./ModalNewDirecction";
import UserContext from "../../../context/UserContext";

const ModalDirecction = ({ cell, closeModal }: any) => {

  const idUdt =  localStorage.getItem('idUtd')
  
  const userData = useContext(UserContext);
 

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-blue",
      cancelButton: "btn btn-red",
    },
    buttonsStyling: true,
  });

  const [dataIndirizo, setDataIndirizo] = useState();

  const [showLoading, setShowLoading] = useState(false);

  const [showModalNew, setShowModalNew] = useState(false);

  const [indirizzoSelected, setIndirizzoSelected] = useState(0);

  const [textNota, setTextNota] = useState("");

  const updateList = () => {
    OrdiniServices.getOrdiniIndirizo(userData.id).then((res) => {
      let data = res?.data.data;
      setDataIndirizo(data);
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const saveIndirizo = () => {
    let data;

    if (indirizzoSelected) {
      data = {
        idConsegna: cell.row.original.idConsegna,
        idIndirizzo: indirizzoSelected,
        email: "former-test@abisoft.it",
        note: textNota ? textNota : "",
      };
    } else {
      data = {
        idConsegna: cell.row.original.idConsegna,
        email: "former-test@abisoft.it",
        note: textNota ? textNota : "",
      };
    }

    setShowLoading(true);

    OrdiniServices.putIndirizo(data).then((res) => {
      if (res.status == 200) {
        setShowLoading(false);
        SweeAlert.confirmAlert(
          "Inviato",
          "Indirizzo salvato con successo",
          "success"
        );
      }
    });
  };

  const handleIndirizzo = (e: any) => {
    setIndirizzoSelected(e.target.value);
  };

  const handleNewModal = () => {
    setShowModalNew(false);
  };

  useEffect(() => {
    OrdiniServices.getOrdiniIndirizo(userData.id).then((res) => {
      let data = res?.data.data;
      setDataIndirizo(data);
    });
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t relative">
              <h3 className="text-xl text-center font-semibold text-[#f58220]">
                INDIRIZZI DI SPEDIZIONE
              </h3>
              <button
                className=" border-0 text-black absolute top-4 right-4 text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="bg-transparent text-black  text-4xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
              <button></button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mt-2 px-4">
                {dataIndirizo && (
                  <select
                    id="listIndirizzo"
                    className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded focus:border-[#f58220]  block w-full px-4 py-2"
                    onChange={(e) => handleIndirizzo(e)}
                  >
                    <option value={0}>Selezionare un nuovo indirizzo</option>
                    {dataIndirizo
                      ? (dataIndirizo as unknown as any).map((e: any) => {
                          return (
                            <option
                              className="px-2 py-2"
                              key={e.idIndirizzo}
                              value={e.idIndirizzo}
                            >
                              {e.destinatario} {e.indirisso} {e.localitaStr}
                            </option>
                          );
                        })
                      : null}
                  </select>
                )}
                {}
                <div className="mt-4">
                  <p>Nota</p>
                  <textarea
                    
                    className="px-4 placeholder-gray-500 pl-4 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220] resize-none"
                    onChange={(e) => setTextNota(e.target.value)}
                    
                    rows={4}
                  ></textarea>
                </div>

                {showModalNew && (
                  <ModalNewDirecction
                    handleNewModal={handleNewModal}
                    updateList={updateList}
                  />
                )}
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-5 border-t border-solid border-slate-200 rounded">
              <button
                onClick={() => setShowModalNew(true)}
                className="w-44 font-bold py-2 ml-4 uppercase  items-center bg-[#f58220] px-4 text-white rounded"
              >
                Nuovo indirizzo
              </button>
              <div className="flex">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => closeModal()}
                >
                  Anulla
                </button>
                {/* <div className="flex w-44  items-center bg-[#f58220] pr-2 pl-6 text-white rounded"> */}
                  <button
                    className="font-bold p-5 uppercase text-sm bg-[#f58220] text-white py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={saveIndirizo}
                  >
                    Invia email
                  </button>
                  {/* {showLoading && (
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
                  )} */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalDirecction;
