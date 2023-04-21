import React from 'react'
import imgQuestion from "../../../assets/img/question.svg";
import imgMail from "../../../assets/img/mail.svg";
import imgCall from "../../../assets/img/call.svg";
import imgMap from "../../../assets/img/map.svg";

function Contatacci() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="container mx-auto px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div className="p-8 bg-white rounded-lg shadow-2xl">
            <div className="bg-[#850c70] text-white flex items-center justify-between text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgQuestion} alt="" />
              <h2 className="text-3xl font-bold flex-grow mb-4">DOMANDE E RISPOSTE FREQUENTI</h2>
            </div>
            <p className="text-gray-700">
              <p className='text-xl mb-5'>Consulta la nostra sezione di Domande e Risposte Frequenti dove troverai risposte alle domande più comuni riguardanti i nostri prodotti, gli ordini, le spedizioni e molti altri argomenti di interesse comune.</p>
              <div className='text-center mt-2'>
                <p className='text-xl'>Clicca su <a href='#' className='text-2xl text-[#e87a23]'><strong>Domande e Risposte Frequenti</strong></a></p>
              </div>
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-2xl">
            <div className="bg-[#850c70] text-white flex items-center justify-between text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgMail} alt="" />
              <h2 className="text-3xl font-bold flex-grow mb-4">SCRIVICI</h2>
            </div>
            <p className="text-gray-700">
              <p className='text-xl mb-5'>Hai un dubbio su un prodotto o una richiesta particolare da farci? Scrivici al nostro indirizzo email:</p>
              <div className='text-center mt-2'>
                <p className='text-2xl text-[#e87a23]'><strong>info@tipografiaformer.it</strong></p>
              </div>
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-2xl md:col-start-1 lg:row-start-2">
            <div className="bg-[#850c70] text-white flex items-center justify-between text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgCall} alt="" />
              <h2 className="text-3xl font-bold flex-grow mb-4">CHIAMACI</h2>
            </div>
            <p className="text-gray-700">
              <p className='text-xl'>Se hai bisogno di contattarci telefonicamente puoi chiamarci ai seguenti numeri:</p>
              <div className='text-center mt-2'>
                <div className='mb-4'>
                  <p className='text-xl'>Commerciale</p>
                  <p className='text-2xl text-[#e87a23]'><strong>06.30884518</strong></p>
                </div>
                <div>
                  <p className='text-xl'>Amministrazione</p>
                  <p className='text-2xl text-[#e87a23]'><strong>06.30884057</strong></p>
                </div>
              </div>
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-2xl md:col-start-2 lg:row-start-2">
            <div className="bg-[#850c70] text-white flex items-center justify-between text-center p-4 rounded-md mb-4">
              <img className="h-10 w-10 me-5" src={imgMap} alt="" />
              <h2 className="text-3xl font-bold flex-grow mb-4">VIENI A TROVARCI</h2>
            </div>
            <p className="text-gray-700">
              <div>
                <div className='mb-4'>
                  <p className='text-xl'><strong>Stabilimento e Uffici</strong></p>
                  <p className='text-xl'>Via Cassia 2010<br />zRoma (La Storta, Olgiata)</p>
                </div>
                <div className='mb-2'>
                  <p className='text-xl'><strong>Indicazioni stradali</strong></p>
                  <p className='text-xl'>
                    <ul className="list-disc list-inside">
                      <li>da Roma centro: seguire la via Cassia fino a La Storta Olgiata (dir. Viterbo)</li>
                      <li>da G.R.A.: uscita 5 Cassia Bis Viterbo: Uscita Cesano rientro verso Roma (Olgiata)</li>
                      <li>da Viterbo: uscita Cesano direzione Roma (Olgiata)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contatacci