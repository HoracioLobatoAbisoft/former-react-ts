import React from "react";
import imgUserRunning from "../../../assets/img/user-runing.png";
import imgBox from "../../../assets/img/box.svg";
import imgTruck from "../../../assets/img/truck.svg";

const LegendOrdini = () => {
  return (
    <div className="flex space-x-16">
      <div className="">
        <h2 className="text-center text-xl text-[#f58220] font-semibold">Ordini</h2>
        <h2 className="text-lg">
          Vuoi sapere cosa significano gli{" "}
          <span className="font-semibold">Stati degli Ordini?</span> Ecco una
          spiegazione dettagliata di ogni stato.
        </h2>

        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#f58220] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">INSERITO</p>
            <p>
              Gli ordini in questo stato sono stati acquistati dal Carrello.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#e81616] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN ATTESA DI PAGAMENTO</p>
            <p>
              Gli ordini in questo stato sono in attesa che tu effettui il
              pagamento. Puoi effettuare il pagamento dal dettaglio dell'ordine
              con pochi click.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#d6e03d] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN LAVORAZIONE</p>
            <p>
              Gli ordini in questo stato sono entrati nel processo produttivo.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#b6ddc7] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN CONSEGNA</p>
            <p>Gli ordini in questo stato sono in Consegna.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#3cb3c2] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">CONSEGNATO</p>
            <p>
              Gli ordini in questo stato sono stati Ritirati o Consegnati come
              da tue indicazioni.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#00ff00] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">PAGATO</p>
            <p>Gli ordini in questo stato sono stati pagati.</p>
          </div>
        </div>
        <div className="border border-b mt-8 border-black"></div>
        <h2 className="mt-8 text-lg">
          Vuoi sapere cosa significano i simboli accanto a ogni ordine? Ecco una
          spiegazione dettagliata di ogni simbolo.
        </h2>

        <div className="flex items-center space-x-2 mt-4">
          <img className="h-8 w-8" src={imgUserRunning} alt="" />
          <h2>
            Per gli ordini con questo simbolo accanto hai scelto{" "}
            <span className="font-semibold">RITIRO CLIENTE</span>
          </h2>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <img className="h-6 w-8" src={imgBox} alt="" />
          <h2>
            Per gli ordini con questo simbolo accanto hai scelto di ricevere
            l'ordine tramite un{" "}
            <span className="font-semibold">NOSTRO CORRIERE</span>
          </h2>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <img className="h-6 w-8" src={imgTruck} alt="" />
          <h2>
            Per gli ordini con questo simbolo accanto hai scelto di inviare un{" "}
            <span className="font-semibold">TUO CORRIERE</span>a ritirare
            l'ordine
          </h2>
        </div>
        <div className="border border-b mt-8 border-black"></div>
        <h2 className="mt-8 text-lg">
          Vuoi sapere cosa significano i colori della data di consegna? Ecco una
          spiegazione dettagliata di ogni colore
        </h2>

        <div className=" items-center mt-4">
          <p className="bg-[#ffa500] px-2 py-1 rounded-md font-semibold w-72 ">
            13/04/2023 Consegna PREVISTA
          </p>
          <p>
            La data della consegna è quella{" "}
            <span className="font-semibold">PREVISTA</span> al momento
            dell'inserimento dell'ordine.
          </p>
        </div>
        <div className=" items-center mt-2">
          <p className="bg-[#008000] px-2 py-1 rounded-md font-semibold w-72">
            13/04/2023 Consegna CONFERMATA
          </p>
          <p>
            La data della consegna è{" "}
            <span className="font-semibold">CONFERMATA</span>dal reparto
            produzione, e verrà rispettata salvo complicazioni eccezionali.
          </p>
        </div>
        <div className=" items-center mt-2">
          <p className="bg-[#800080] px-2 py-1 rounded-md font-semibold w-72">
            13/04/2023 Consegna GARANTITA
          </p>
          <p>
            La data della consegna è{" "}
            <span className="font-semibold">GARANTITA</span>dal reparto
            produzione, e verrà rispettata salvo complicazioni eccezionali.
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-center text-xl text-[#f58220] font-semibold">Lavori</h2>
        <h2 className="text-lg">
          Vuoi sapere cosa significano gli {" "}
          <span className="font-semibold">Stati dei Lavori?</span> Ecco una
          Ecco una spiegazione dettagliata di ogni stato.
        </h2>

        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#e81616] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN ATTESA DI PAGAMENTO</p>
            <p>
              I lavori in questo stato sono pronti per essere messi in produzione e attendono solamente che tu effettui il pagamento.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#ff0000] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN ATTESA INVIO FILE</p>
            <p>
              I lavori in questo stato sono in attesa che vengano Allegati i file. Puoi effettuare questa operazione cliccando sul link Vai al Dettaglio oppure cliccando sul link Invia i File
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#f58220] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN ATTESA DI VERIFICA FILE</p>
            <p>
              I lavori in questo stato sono in attesa che l'integrità e la congruenza del formato dei file che ci hai inviato venga verificata dal sistema
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#d6e03d] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">REGISTRATO</p>
            <p>I lavori in questo stato sono in produzione, non possono essere modificati e stanno per essere schedulati per la stampa.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#646464] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN SOSPESO</p>
            <p>
              I lavori in questo stato sono sospesi per vostra o nostra comunicazione
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#fff500] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN CODA DI STAMPA</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN STAMPA</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN ATTESA DI FINITURA</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">INIZIATA FINITURA SU COMMESSA</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">TERMINATA FINITURA SU COMMESSA</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">INIZIATA FINITURA SU PRODOTTO</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#dedede] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">TERMINATA FINITURA SU PRODOTTO</p>
            <p>I lavori in questo stato sono nel processo produttivo.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#d7edfb] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN IMBALLAGGIO</p>
            <p>I lavori in questo stato vengono sottoposti al controllo qualità per essere imballati e spediti.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#d7edfb] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN IMBALLAGGIO CORRIERE</p>
            <p>I lavori in questo stato vengono sottoposti al controllo qualità per essere imballati e spediti con il corriere scelto.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#75c5f0] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">PRONTO PER IL RITIRO</p>
            <p>I lavori in questo stato sono pronti per essere ritirati presso la nostra sede (se concordato).</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#f075ec] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">USCITO DAL MAGAZZINO</p>
            <p>I lavori in questo stato sono in transito verso l'indirizzo di spedizione.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#b6ddc7] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">IN CONSEGNA</p>
            <p>I lavori in questo stato sono in transito verso l'indirizzo di spedizione.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#3cb3c2] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">CONSEGNATO</p>
            <p>I lavori in questo stato sono stati consegnati al destinatario.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#00ff00] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">ACCONTO</p>
            <p>Per questi lavori è stato corrisposto solo un acconto.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#00ff00] px-4 py-4 rounded-md"></p>
          <div>
            <p className="font-semibold">PAGATO</p>
            <p>I lavori in questo stato risultano interamente saldati.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#ffffff] px-4 py-4 rounded-md border border-black"></p>
          <div>
            <p className="font-semibold">RIFIUTATO</p>
            <p>I  lavori in questo stato sono stati rifiutati per vostra o nostra comunicazione.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="bg-[#ffffff] px-4 py-4 rounded-md border border-black"></p>
          <div>
            <p className="font-semibold">ELIMINATO</p>
            <p>I lavori in questo stato sono stati eliminati per vostra o nostra comunicazione.</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default LegendOrdini;
