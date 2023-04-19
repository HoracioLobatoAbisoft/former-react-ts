import React from 'react'
import imgQuestion from "../../../assets/img/question.svg";
import imgMail from "../../../assets/img/mail.svg";
import imgCall from "../../../assets/img/call.svg";
import imgMap from "../../../assets/img/map.svg";

function Contatacci() {
  return (
    <div>
      <div>
        {/**Este bloque es la primera seccion donde esta el titulo y su descripción de contatacci */}
        <div className="bg-gray-300 flex items-center justify-between p-4 rounded-md mb-2">
          <img className="h-10 w-10 me-5" src={imgQuestion} alt="" />
          <h2 className="text-3xl font-bold flex-grow">DOMANDE E RISPOSTE FREQUENTI</h2>
          <img src="src\assets\img\contattaci.jpg" alt="Contattaci" className="h-20 w-40 ml-auto mr-0" />
        </div>
        <div>
          <p className='text-lg'>Consulta la nostra sezione di Domande e Risposte Frequenti dove troverai risposte alle domande più comuni riguardanti i nostri prodotti, gli ordini, le spedizioni e molti altri argomenti di interesse comune.</p>
          <p className='text-lg'>Clicca su <a href='#' className='text-xl text-[#e87a23]'><strong>Domande e Risposte Frequenti</strong></a></p>
        </div>
      </div>
      <br />
      {/**Este bloque es la segunda seccion*/}
      <div>
        <div className="bg-gray-300 flex items-center justify-between p-4 rounded-md mb-2">
          <img className="h-10 w-10 me-5" src={imgMail} alt="" />
          <h2 className="text-3xl font-bold flex-grow">SCRIVICI</h2>
          <span className='h-20'></span>
        </div>
        <div>
          <p className='text-lg'>Hai un dubbio su un prodotto o una richiesta particolare da farci? Scrivici al nostro indirizzo email:</p>
          <div className='text-center mt-2'>
            <p className='text-xl text-[#e87a23]'><strong>info@tipografiaformer.it</strong></p>
          </div>
        </div>
      </div>
      <br />
      {/**Este bloque es la tercera seccion*/}
      <div>
        <div className="bg-gray-300 flex items-center justify-between p-4 rounded-md mb-2">
          <img className="h-10 w-10 me-5" src={imgCall} alt="" />
          <h2 className="text-3xl font-bold flex-grow">CHIAMACI</h2>
          <span className='h-20'></span>
        </div>
        <div>
          <p className='text-lg'>Se hai bisogno di contattarci telefonicamente puoi chiamarci ai seguenti numeri:</p>
          <div className='mt-2 mb-2'>
            <div>
              <p className='text-lg'>Commerciale</p>
              <p className='text-xl text-[#e87a23]'><strong>06.30884518</strong></p>
            </div>
            <div>
              <p className='text-lg'>Amministrazione</p>
              <p className='text-xl text-[#e87a23]'><strong>06.30884057</strong></p>
            </div>
          </div>
          <p className='text-lg'>Puoi chiamare tutti i giorni dalle <strong>8.00 alle 18.30 NOSTOP</strong></p>
        </div>
      </div>
      <br/>
      {/**Este bloque es la cuarta seccion*/}
      <div>
        <div className="bg-gray-300 flex items-center justify-between p-4 rounded-md mb-2">
          <img className="h-10 w-10 me-5" src={imgMap} alt="" />
          <h2 className="text-3xl font-bold flex-grow">VIENI A TROVARCI</h2>
          <span className='h-20'></span>
        </div>
        <div>
          <div className='mb-2'>
            <p className='text-lg'><strong>Stabilimento e Uffici</strong></p>
            <p className='text-lg'>Via Cassia 2010<br />zRoma (La Storta, Olgiata)</p>
          </div>
          <div className='mb-2'>
            <p className='text-lg'><strong>Indicazioni stradali</strong></p>
            <p className='text-lg'>da Roma centro: seguire la via Cassia fino a La Storta Olgiata (dir. Viterbo)<br />
              da G.R.A.: uscita 5 Cassia Bis Viterbo: Uscita Cesano rientro verso Roma (Olgiata)<br />
              da Viterbo: uscita Cesano direzione Roma (Olgiata)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contatacci