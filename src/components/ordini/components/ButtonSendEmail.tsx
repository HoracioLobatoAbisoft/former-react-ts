import React, { useEffect, useState } from "react";

import OrdiniServices from "../services/OrdiniServices";
import imgSendEmail from "../../../assets/img/send-email.svg";
import Swal from "sweetalert2";
import SweeAlert from "../../../services/SweeAlert";
import ModalDirecction from "./ModalDirecction";



const ButtonSendEmail = ({ cell }: any) => {
  
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  

  return (
    <>
      <button className="mr-1" type="button" onClick={() => setShowModal(true)}>
        <img
          className="online h-10 w-10 cursor-pointer"
          src={imgSendEmail}
          alt=""
        />
      </button>
      {showModal ? (
        <>
         <ModalDirecction cell={cell} closeModal={closeModal} />
        </>
      ) : null}
    </>
  );
};

export default ButtonSendEmail;
