import React from "react";
import imgQuestion from "../../../assets/img/question.svg";
import imgMail from "../../../assets/img/mail.svg";
import imgCall from "../../../assets/img/call.svg";
import imgMap from "../../../assets/img/map.svg";

function Contatacci() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-4">
          <h2 className="flex justify-center text-5xl font-bold">
            Contattaci!
          </h2>
          <p className="flex justify-center mt-4">
            Potete contattarci dalle 8.00 alle 18.30 orario non stop tutti i
            giorni
          </p>
          <p className="flex justify-center">
            visita la nostra sezione di Domande e Risposte Frequenti dove
            troverai
          </p>
          <p className="flex justify-center">
            risposte alle domande più comuni riguardanti i nostri prodotti, gli
            ordini, le
          </p>
          <p className="flex justify-center">spedizioni e molti altri argomenti di interesse comune.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="p-8 bg-[#e87a23] text-white rounded-lg shadow-2xl ">
            <div className=" flex items-center justify-center text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgMap} alt="" />
            </div>
            <h2 className="text-3xl font-bold flex-grow mb-4">Indirizzo</h2>
            <p className="text-white">
              <div>
                <div className="mb-4">
                  <p className="">
                    Via Cassia 2010 Roma,
                    <br /> La Storta
                  </p>
                </div>
                <div className="mb-2">
                  <p className="text-lg">
                    <strong>Indicazioni stradali</strong>
                  </p>
                  <p className="">
                    <ul className="list-disc list-inside">
                      <li className="">
                        Da Roma centro: seguire la via Cassia fino a La Storta
                        Olgiata (dir. Viterbo)
                      </li>
                      <li className="">
                        Da G.R.A.: uscita 5 Cassia Bis Viterbo: Uscita Cesano
                        rientro verso Roma (Olgiata)
                      </li>
                      <li className="">
                        Da Viterbo: uscita Cesano direzione Roma (Olgiata)
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-lg shadow-2xl ">
            <div className=" flex items-center justify-center text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgCall} alt="" />
            </div>
            <h2 className="text-3xl font-bold flex-grow mb-4">Telefono</h2>
            <p className="text-gray-700">
              <div className="text-center mt-2 mt-28">
                <div className="mb-4 flex space-x-2">
                  <p className="text-xl">Commerciale</p>
                  <p className="text-2xl ">
                    <strong>06.30884518</strong>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-xl">Amministrazione</p>
                  <p className="text-2xl ">
                    <strong>06.30884057</strong>
                  </p>
                </div>
              </div>
            </p>
          </div>

          <div className="p-8 bg-gray-600 rounded-lg shadow-2xl">
            <div className="flex items-center justify-center text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgMail} alt="" />
            </div>
            <h2 className="text-3xl font-bold flex-grow mb-4 text-white">
              E-mail
            </h2>
            <p className="text-white mt-28 ">
              <div className="text-center mt-2">
                <p className="text-2xl">
                  <strong>info@tipografiaformer.it</strong>
                </p>
              </div>
            </p>
          </div>
        </div>

        <div className="p-8 bg-white rounded-lg shadow-2xl">
          <div className="bg-white flex items-center justify-center text-center p-4 rounded-md mb-4">
            <img className="h-10 w-10 me-5" src={imgQuestion} alt="" />
          </div>
          <h2 className="text-3xl font-bold flex-grow mb-4">
            DOMANDE E RISPOSTE FREQUENTI
          </h2>
          <p className="text-gray-700">
            <p className="text-xl mb-5">
              Consulta la nostra sezione di Domande e Risposte Frequenti dove
              troverai risposte alle domande più comuni riguardanti i nostri
              prodotti, gli ordini, le spedizioni e molti altri argomenti di
              interesse comune.
            </p>
            <div className="text-center mt-2">
              <p className="text-xl">
                Clicca su{" "}
                <a href="#" className="text-2xl text-[#e87a23]">
                  <strong>Domande e Risposte Frequenti</strong>
                </a>
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contatacci;
