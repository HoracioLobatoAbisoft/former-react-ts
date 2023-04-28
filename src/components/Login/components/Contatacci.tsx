import React from "react";
import imgQuestion from "../../../assets/img/question.svg";
import imgMail from "../../../assets/img/correo.png";
import imgCall from "../../../assets/img/telefono-movil.png";
import imgMap from "../../../assets/img/ubicacion.png";
import NewsLatter from "../../common/newsLatter/NewsLatter";


function Contatacci() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-4 mt-10 text-[#444141]">
          <h2 className="flex justify-center text-5xl font-bold">
            Contattaci!
          </h2>
          <p className="flex justify-center text-xl mt-4">
            Potete contattarci dalle 8.00 alle 18.30 orario non stop tutti i
            giorni visita la nostra
          </p>
          <p className="flex justify-center text-xl">
            sezione di Domande e Risposte Frequenti dove troverai risposte alle
            domande più
          </p>
          <p className="flex justify-center text-xl">
            comuni riguardanti i nostri prodotti, gli ordini, le spedizioni e
            molti altri argomenti di interesse comune.
          </p>
          <p className="flex justify-center text-xl"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="px-8 pt-2 bg-[#F5801D] text-white rounded-md shadow-2xl ">
            <div className=" flex items-center justify-center text-center rounded-md ">
              <img className="h-24 w-24 " src={imgMap} alt="" />
            </div>
            <h2 className="text-3xl font-bold flex-grow">Indirizzo</h2>
            <div className="text-white">
              <div>
                <div className="mb-4 mt-4">
                  <p className="text-xl">
                    Via Cassia 2010 Roma, La Storta
                  </p>
                </div>
                <div className="mb-2">
                  <p className="text-lg">
                    <strong>Indicazioni stradali</strong>
                  </p>
                  <div className="">
                    <ul className="list-disc list-inside text-sm">
                      <li className="">
                        Da Roma centro: seguire la via Cassia fino a La Storta
                        Olgiata <span className="pl-5">(dir. Viterbo)</span>
                      </li>
                      <li className="">
                        Da G.R.A.: uscita 5 Cassia Bis Viterbo: Uscita Cesano
                        rientro  <span className="pl-5">verso Roma (Olgiata)</span> 
                      </li>
                      <li className="">
                        Da Viterbo: uscita Cesano direzione Roma (Olgiata)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pt-2 bg-[#E8E8E8] rounded-md shadow-2xl ">
            <div className=" flex items-center justify-center text-center rounded-md">
              <img className="h-24 w-24 " src={imgCall} alt="" />
            </div>
            <h2 className="text-3xl text-[#444141] font-bold flex-grow">
              Telefono
            </h2>
            <div className="text-[#444141] mt-4">
              <div className="text-center">
                <div className="mb-1 flex space-x-2">
                  <p className="text-xl">Commerciale</p>
                  <p className="text-xl ">06.30884518</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-xl">Amministrazione</p>
                  <p className="text-xl ">06.30884057</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pt-2 bg-[#444141] rounded-md shadow-2xl">
            <div className="flex items-center justify-center text-center rounded-md">
              <img className="h-24 w-24 " src={imgMail} alt="" />
            </div>
            <h2 className="text-3xl font-bold flex-grow text-white">
              E-mail
            </h2>
            <div className="text-white mt-4">
              <div className=" mt-11">
                <p className="text-xl">
                  info@tipografiaformer.it
                </p>
              </div>
            </div>
          </div>
        </div>
        <NewsLatter />
       
      </div>
    </div>
  );
}

export default Contatacci;
