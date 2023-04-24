import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SweeAlert from "../../../services/SweeAlert";
import OrdiniServices from "../services/OrdiniServices";

const sendEmail = (cell: any) => {
  let data = cell.row.original;
  //preguntar si esta seguro
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-blue",
      cancelButton: "btn btn-red",
    },
    buttonsStyling: true,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Sei sicuro di voler inviare e-mail?",
      //text: "Se va enviar a un correo a X@correo.com",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, mandalo",
      cancelButtonText: "No, cancelalo",
      reverseButtons: false,
    })
    .then((result: any) => {
      if (result.isConfirmed) {
        // enviar correo
        // logica
        console.log(data);

        let dataPost = {
          idUt: 14,
          email: "former-test@abisoft.it",
          statoStr: data.statoStr,
          idConsegnaView: data.idConsegnaView,
          inseritoStr: data.inseritoStr,
          importoTotNettoStr: data.importoTotNettoStr,
          importoTotIvaStr: data.importoTotIvaStr,
          importoTotStr: data.importoTotStr,
          count: data.count,
          importoTotOrdiniNettoOriginaleStr:
            data.importoTotOrdiniNettoOriginaleStr,
          pagamentoStr: data.pagamentoStr,
          idConsegna: data.idConsegna,
          indirizzoStr: data.indirizzoStr,
          numeroColliStr: data.numeroColliStr,
          pesoKG: data.pesoKG,
          coloreStatoHtml: data.coloreStatoHtml,
          importoConsegnaStr: data.importoConsegnaStr,
          dataInserimentoStr: data.dataInserimentoStr,
          importoTotaleSconti: data.importoTotaleSconti,
          idCouponUtilizzato: data.idCouponUtilizzato,
          importoTotaleScontiStr: data.importoTotaleScontiStr,
          dateConsegna: data.dateConsegna,
          dataOrdiniLabel: data.dataOrdineLabel,
          corriereStr: data.corriereStr,
        };

        console.log(dataPost);
        OrdiniServices.postOrdineEmail(dataPost);
      } else if (
        // cancelar envio
        result.dismiss === Swal.DismissReason.cancel
      ) {
        SweeAlert.confirmAlert(
          "Annullato",
          "la consegna della posta è stata annullata",
          "error"
        );
      }
    });
};

const ModalDirecction = ({ cell, closeModal }: any) => {
  const [showModal, setShowModal] = useState(false);

  const [dataIndirizo, setDataIndirizo] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const saveIndirizo = () => {

  }




  useEffect(() => {
    OrdiniServices.getOrdiniIndirizo(14).then((res) => {
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
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">INDIRIZZI DI SPEDIZIONE</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mt-2">
  
                {dataIndirizo && (
                  <select
                    id="countries"
                    className="bg-gray-50 focus:outline-none border border-gray-300 text-sm rounded-2xl focus:border-[#f58220]  block w-full p-2.5"
                    {...register("indirizo")}
                  >
                    {dataIndirizo?.map((e: any) => {
                      return <option key={e.idIndirizzo} value={e.idIndirizzo}>{e.destinatario}</option>;
                    })}
                  </select>
                )}
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal()}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={saveIndirizo}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalDirecction;
