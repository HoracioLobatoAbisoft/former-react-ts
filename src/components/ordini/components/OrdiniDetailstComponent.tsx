import React from "react";
import { Box } from "@mui/material";
import imgShop from "../../../assets/img/shopping.svg";
import imgWrite from "../../../assets/img/write.svg";
import imgPdf from "../../../assets/img/pdf.svg";
import SubTables from "./SubTables";

const OrdiniDetailstComponent = ({ ordine }: any) => {
  return (
    <div className="py-10 container mx-auto">
      <div className="2xl:mx-20">
        <div className=" flex space-x-4 items-center justify-center">
          <img className="h-8 w-8" src={imgShop} alt="" />
          <h2>
            {" "}
            <span className="text-[#f58220] font-semibold">
              DETTAGLIO DEL TUO ORDINE N°
            </span>{" "}
            {ordine.idConsegnaView}{" "}
            <span className="text-[#f58220] font-semibold">DEL</span>{" "}
            {ordine.giornoStr}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-base">Riepilogo ordine</h2>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">N° ordine</p>{" "}
              <p className="font-semibold">{ordine.idConsegnaView}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Data ordine</p>{" "}
              <p className="font-semibold">{ordine.dataInserimentoStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">N° Lavori</p>{" "}
              <p className="font-semibold">{ordine.count}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Pagamento</p>{" "}
              <p className="font-semibold">{ordine.pagamentoStr}</p>
            </div>
            <div className="mt-4">
              <p className="text-base font-semibold">LAVORI NELL' ORDINE</p>
              <p>
                Qui trovi l'elenco dei lavori che sono contenuti in questo
                ordine.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor: `${ordine.coloreStatoHtml}`,
                  borderRadius: "0.25rem",
                  width: "auto",
                  padding: "8px 15px",
                })}
              >
                <span>{ordine.statoStr} </span>
              </Box>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Totale Lavori:</p>{" "}
              <p className="font-semibold">
                € {ordine.importoTotOrdiniNettoOriginaleStr}
              </p>
            </div>
            {ordine.importoTotaleSconti != 0 &&
              ordine.idCouponUtilizzato != 0 && (
                <div className="flex space-x-4 items-center mt-2 text-sm">
                  <p className="w-28">Sconti per Coupon:</p>{" "}
                  <p className="font-semibold">
                    € {ordine.importoTotaleScontiStr}
                  </p>
                </div>
              )}

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Totale Spedizioni:</p>{" "}
              <p className="font-semibold">€ {ordine.importoConsegnaStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">IVA (22%):</p>
              <p className="font-semibold">€ {ordine.importoTotIvaStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm bg-[#d6e03d]">
              <p className="w-28">TOTALE:</p>
              <p className="font-semibold">€ {ordine.importoTotStr}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <SubTables el={ordine.listLavori} />
        </div>
        

        <div className="mt-10">
          <h2 className="bg-[#f58220] text-white rounded-md px-4 py-2 font-semibold">
            RIEPILOGO CONSEGNA{" "}
          </h2>
          <p className="mt-4 font-semibold ml-4">Riepilogo consegna</p>
          <div className="flex space-x-4 mt-2 font-semibold ml-4">
            <p>Data consegna</p>
            <p className="uppercase">
              {ordine.dateConsegna} {ordine.dataOrdineLabel}
            </p>
          </div>

          {ordine.tracciabile && (
            <div className="flex space-x-4 mt-2 font-semibold">
              <p>TRACCIA IL MIO PACCO</p>
            </div>
          )}

          <div className="flex space-x-4 mt-2 font-semibold ml-4">
            <p>Corriere</p>
            <div>
              <p>{ordine.corriereStr}</p>
              <p>
                {" "}
                (Colli {ordine.numeroColliStr}, Peso {ordine.pesoKG} kg ±)
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-2 font-semibold ml-4">
            <p>Indirizzo</p>
            <p>{ordine.indirizzoStr}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="bg-[#f58220] text-white rounded-md px-4 py-2 font-semibold">
            PAGAMENTO{" "}
          </h2>
          <p className="mt-4 font-semibold ml-4">
            Puoi effettuare il pagamento di questo ordine tramite:
          </p>
          <div className="border px-10 py-10 rounded-md border-black font-semibold mt-2">
            <div className="flex space-x-4 items-center">
              <img className="h-10 w-10" src={imgWrite} alt="" />
              <p>PAGA CON BONIFICO BANCARIO</p>
            </div>
            <div className="mt-4">
              <p>
                Potrà eseguire il pagamento tramite Bonifico Bancario
                utilizzando i seguenti dati:
              </p>
              <div className="ml-10 mt-2">
                <p>Causale: Pagamento Ordine Online {ordine.idConsegna}</p>
                <p>{ordine.banca}</p>
                <p>Conto corrente intestato a Tipografia Former S.r.l.</p>
                <p>IBAN: {ordine.iban}</p>
              </div>
            </div>
            <p className="mt-4">
              Una volta effettuato il versamento, sarà necessario inviare i dati
              identificativi del pagamento (CRO) e la ricevuta del bonifico
              all'indirizzo email{" "}
              <span className="text-lg hover:underline cursor-pointer">
                pagamenti@tipografiaformer.it
              </span>{" "}
            </p>
            <p className="mt-2">
              Provvederemo alla registrazione del versamento nell'arco di circa
              3 gg. lavorativi.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="bg-[#f58220] text-white rounded-md px-4 py-2 font-semibold">
            DOCUMENTO FISCALE{" "}
          </h2>
          <p className="font-semibold">
            Da qui puoi scaricare il documento fiscale relativo al tuo ordine in
            formato PDF
          </p>
        </div>
        <div className="flex space-x-2 justify-center mt-4">
          <img className="h-10 w-10" src={imgPdf} alt="" />
          <p>Documento fiscale non ancora disponibile</p>
        </div>
      </div>
    </div>
  );
};

export default OrdiniDetailstComponent;
