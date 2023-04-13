import React from "react";
import imgUserRunning from "../../../assets/img/user-runing.png";
import imgBox from "../../../assets/img/box.svg";
import imgTruck from "../../../assets/img/truck.svg";

const LegendOrdini = () => {
  return (
    <div>
      <h2 className="text-lg">
        Vuoi sapere cosa significano gli{" "}
        <span className="font-semibold">Stati degli Ordini?</span> Ecco una
        spiegazione dettagliata di ogni stato.
      </h2>

      <div className="mt-4 flex items-center space-x-4">
        <p className="bg-[#f58220] px-4 py-4 rounded-md"></p>
        <div>
          <p className="font-semibold">INSERITO</p>
          <p>Gli ordini in questo stato sono stati acquistati dal Carrello.</p>
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
            Gli ordini in questo stato sono stati Ritirati o Consegnati come da
            tue indicazioni.
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
          <span className="font-semibold">TUO CORRIERE</span>a ritirare l'ordine
        </h2>
      </div>
      <div className="border border-b mt-8 border-black"></div>
      <h2 className="mt-8 text-lg">
        Vuoi sapere cosa significano i colori della data di consegna? Ecco una spiegazione dettagliata di ogni colore
      </h2>

      <div className="flex space-x-2 items-center mt-4">
        <p className="bg-[#ffa500] px-2 py-1 rounded-md font-semibold">13/04/2023 Consegna PREVISTA</p>
        <p>La data della consegna è quella <span className="font-semibold">PREVISTA</span>  al momento dell'inserimento dell'ordine.</p>
      </div>
      <div className="flex space-x-2 items-center mt-2">
        <p className="bg-[#008000] px-2 py-1 rounded-md font-semibold">13/04/2023 Consegna CONFERMATA</p>
        <p>La data della consegna è <span className="font-semibold">CONFERMATA</span>dal reparto produzione, e verrà rispettata salvo complicazioni eccezionali.</p>
      </div>
      <div className="flex space-x-2 items-center mt-2">
        <p className="bg-[#800080] px-2 py-1 rounded-md font-semibold">13/04/2023 Consegna GARANTITA</p>
        <p>La data della consegna è <span className="font-semibold">GARANTITA</span>dal reparto produzione, e verrà rispettata salvo complicazioni eccezionali.</p>
      </div>
    </div>
  );
};

export default LegendOrdini;
