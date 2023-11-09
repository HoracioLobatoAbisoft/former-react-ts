import React, { useEffect, useState } from "react";
import { GLOBAL_CONFIG } from "../../../_config/global";
import logo from "../../../assets/iconsLast/logo.png";
import line from "../../../assets/iconsLast/LineSeparation.png";
import { DataResponseGetUtente } from "../../../interface/Utente";
import { DataGetDescrizioniDinamica } from "../interface/DescrizioneDinamica";
import {
  InitialValuesProdotto,
  OptionsSelect,
} from "../../formProdotto/interfaces/prodotto";
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";
import { numberFormat, numberPercentuale } from "../../../Helpers/formatNumber";
import { DataDimensioniStr } from "../interface/DimensioneStr";
import jsPDF from "jspdf";

type PropsPreventivoPDF = {
  utenteData: DataResponseGetUtente | undefined;
  descrizioneDinamica: DataGetDescrizioniDinamica | undefined;
  initialState: InitialValuesProdotto;
  hanldeFormatoList: () => OptionsSelect[];
  handleOptionsTipoCarta: () => OptionsSelect[];
  handleOptionsColoreStampa: () => OptionsSelect[];
  handleOptionOPZ: () => {
    _stampaOpz: string[];
    _stampaOpzId: number[];
  };
  qtaSelezinata: number;
  showTablePreez: boolean;
  handleCarrelloData: (Id: number | null | undefined, options: OptionsSelect[]) => OptionsSelect | {
    value: string | number;
    label: string;
    dimencioni: string | undefined;
    img: string | undefined;
    pdfTemplate: string | undefined;
  };
  menuDateConsegna: string | undefined;
  calcolaTuto: DataGetCalcolaTuto | undefined;
  idBaseEtiquete: string | undefined;
  dimensionniStr: DataDimensioniStr | undefined;
  showOpzzioni: number | undefined;
  idAltezaEtiquete: string | undefined;
};

const PreventivoPDF = ({
  descrizioneDinamica,
  handleOptionOPZ,
  handleOptionsColoreStampa,
  handleOptionsTipoCarta,
  hanldeFormatoList,
  initialState,
  utenteData,
  handleCarrelloData, qtaSelezinata, showTablePreez, menuDateConsegna, calcolaTuto, idBaseEtiquete, dimensionniStr, showOpzzioni, idAltezaEtiquete
}: PropsPreventivoPDF) => {

  const OptionsSelectVoid: OptionsSelect[] = [{
    value: 0,
    label: "--",
  }]

  
  const OPZ = handleOptionOPZ()
  const setResponseHandleFormato = (hanldeFormatoList());
  const setResponseHandleTipoCartaconst = (handleOptionsTipoCarta());
  const setResponseHandleColoreStampaconst = (handleOptionsColoreStampa());

  const iva = numberPercentuale(Number(calcolaTuto?.prezzoCalcolatoNetto), 22);
  const pdf = new jsPDF();
  useEffect(() => {

  }, [])

  ;

  return (
    <div
      id="preventivoPDFID"
      style={{
        background: "",
        width: "210px",
        height: "100%",
        padding: "2em 8em",
        fontSize: "3.5px",
        color: "",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src={logo}
              alt=""
              id="logo"
              style={{ background: "", width: "58px", height: "10px" }}
            />
            <h2 style={{ fontWeight: "500" }}>TIPOGRAFIA FORMER</h2>
            <p>Stabilimento e Uffici: Via Cassia 2010, 00123 Roma</p>
            <p>
              Servizio Clienti: 06.30884518 - Email: <a href="https://tipografiaformer.it/2/131/72/1/1/Stampa-Biglietti-da-Visita-85-x-55-350gr-UV">{"info@tipografiaformer.it"}</a>
            </p>
            <p>Partita Iva: 14974961006</p>
          </div>
          <div
            style={{
              marginRight: "3em",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "center",
            }}
          >
            <h4 style={{ fontWeight: "600", letterSpacing: "0.5px" }}>
              Preventivo WEB
            </h4>
            <p>20 Settembre 2023 15:34</p>
          </div>
        </div>
        {utenteData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2em",
              lineHeight: "-1em,",
            }}
          >
            <h4
              style={{
                marginBottom: ".1em",
                fontSize: "1.1em",
                paddingLeft: "1px",
                fontWeight: "800",
                width: "100%",
                position: "relative",
              }}
            >
              Cliente{" "}
            </h4>
            {/* <hr style={{border:'1px solid #000', width:'100%'}}/> */}
            <img
              src={line}
              alt=""
              style={{ width: "100%", marginBottom: "-1em" }}
            />
            <p
              style={{
                paddingLeft: "1px",
                fontWeight: "800",
                lineHeight: "-1em",
              }}
            >
              {utenteData.nominativo}
            </p>
            <p style={{ paddingLeft: "1px" }}>Cod. Cliente Online: b{utenteData.idUt}</p>
            <p style={{ paddingLeft: "1px" }}>Riferimento: {utenteData.nome} {utenteData.cognome}</p>
            <p style={{ paddingLeft: "1px" }}>Cod. Fisc: {utenteData.codFisc}</p>
            <p style={{ paddingLeft: "1px" }}>P.IVA: {utenteData.piva}</p>
            <p style={{ paddingLeft: "1px" }}>Email: <a href={`mailto:${utenteData.email}`} style={{background:''}}>{utenteData.email}</a></p>
            <p style={{ paddingLeft: "1px" }}>Tel: {utenteData.tel}</p>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            marginTop: "1.5em",
          }}
        >
          <h4
            style={{
              fontSize: "1.1em",
              paddingLeft: "1px",
              fontWeight: "800",
              width: "100%",
              position: "relative",
            }}
          >
            Ordine
          </h4>
          <img
            src={line}
            alt=""
            style={{ width: "100%", marginBottom: "-1em" }}
          />
          <p style={{ paddingLeft: "1px" }}>Quantità: {showTablePreez ? qtaSelezinata : ''}</p>
          {showOpzzioni == 2 || showOpzzioni == 1 ?
            <>
              <p style={{ paddingLeft: "1px" }}>Prodotto: {parseInt(String(idBaseEtiquete)) != 0 ? `(${idBaseEtiquete}B x ${idAltezaEtiquete}A mm)`:dimensionniStr?.prodotto}</p>
              <p style={{ paddingLeft: "1px" }}>
                Formato: {dimensionniStr?.prodotto}
              </p>
            </>
            :
            <p style={{ paddingLeft: "1px" }}>
              Formato: {handleCarrelloData(initialState.formatoS, setResponseHandleFormato).label}
            </p>
          }
          <p style={{ paddingLeft: "1px" }}>
            Tipo di carta: {handleCarrelloData(initialState.tipoCarta, setResponseHandleTipoCartaconst).label}
          </p>
          <p style={{ paddingLeft: "1px" }}>
            Colori di Stampa: {handleCarrelloData(initialState.tipoCarta, setResponseHandleColoreStampaconst).label}
          </p>
          <p style={{ paddingLeft: "1px" }}>Opzioni:</p>
          <ul style={{ paddingLeft: "1px" }}>
            {OPZ._stampaOpz.map((item, i) => (
              <li key={i}>- {item}</li>
            ))
            }
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            paddingBottom: "1em",
            marginTop: "1.65em",
          }}
        >
          <h4
            style={{ paddingLeft: "1px", fontWeight: "800", fontSize: "1.1em" }}
          >
            Informazioni aggiuntive
          </h4>
          <p style={{ paddingLeft: "1px" }}>
            Data in cui vuoi ricevere il prodotto: {menuDateConsegna  /*Martedì 26/09/2023*/}
          </p>
          <p style={{ paddingLeft: "1px" }}>
            Modalità di pagamento: 60 giorni data fattura
          </p>
          <p style={{ paddingLeft: "1px" }}>Colli: {showTablePreez ? calcolaTuto?.colli : '-'}</p>
          <p style={{ paddingLeft: "1px" }}>Peso: {showTablePreez ? calcolaTuto?.pesoStr : '- '} kg ±</p>
        </div>
        <img
          src={line}
          alt=""
          style={{ width: "100%", marginBottom: "-1em" }}
        />
        <div
          style={{
            fontWeight: "600",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
            marginTop: ".5em",
            fontSize: "1.05em",
          }}
        >
          <p>
            <b>Imponibile € {showTablePreez ? numberFormat(calcolaTuto?.prezzoCalcolatoNetto) : '-'}</b>
          </p>
          <p>
            <b>IVA € {showTablePreez ? numberFormat(iva) : '-'}</b>
          </p>
          <p>
            <b>Totale con IVA € {showTablePreez ? numberFormat(Number(calcolaTuto?.prezzoCalcolatoNetto) + iva) : '-'}</b>
          </p>
        </div>
        <div
          style={{
            textAlign: "justify",
            fontSize: "2.2px",
            marginTop: "5em",
            lineHeight: "1em",
          }}
        >
          <h6 style={{ fontSize: "2.3px" }}>CONDIZIONI DI VENDITA</h6>
          <p style={{ marginBottom: "1.2em" }}>
            prezzi indicati sono soggetti ad improvvise variazioni, verificare
            on line il prezzo prima dell’ordine. In caso di spedizione i costi
            sono esclusi dal presente preventivo e verranno conteggiati
            automaticamente al momento dell'ordine a seconda dell'indirizzo di
            consegna.
          </p>

          <h6 style={{ fontSize: "2.3px" }}>FILE ALLEGATI AL LAVORO</h6>
          <p style={{ marginBottom: "1.2em" }}>
            Dopo aver effettuato l'ordine potrai allegare i file sorgenti con
            estrema semplicità tramite un apposito modulo nel sito internet.
          </p>
          <h6>RESPONSABILITA' DEL COMMITENTE</h6>
          <p style={{ marginBottom: "1.2em" }}>
            La committente si assume la paternità dei contenuti oggetto di
            stampa esonerando la Tipografia Former dall'obbligo di esame degli
            stessi ed assumendosi, pertanto, qualsiasi responsabilità nei
            confronti di terzi che dovessero lamentare lesioni all'immagine,
            onore, decoro, integrità morale o comunque qualsiasi danno
            patrimoniale e non patrimoniale causalmente collegate alla stampa
            oggetto di contratto. La Tipografia Former si riserva la chiamata in
            manleva della committente nell'eventualità in cui domande
            risarcitorie venissero formulate direttamente nei suoi confronti.
          </p>
          <h6 style={{ fontSize: "2.3px" }}>
            CLAUSOLA ESONERO RESPONSABILITA'
          </h6>
          <p style={{ marginBottom: "1.2em" }}>
            Tipografia Former non sarà responsabile nei confronti del
            committente e/o beneficiario della prestazione se diverso, per danni
            di qualsiasi specie, sia diretti che indiretti, derivanti da
            eventuali errori, di ogni natura, nella stampa del file inviato dal
            cliente o derivanti dalla ricezione di materiale sbagliato. In tali
            casi Tipografia Former sarà tenuta esclusivamente ad effettuare una
            sola ristampa del materiale qualora l'errore sia imputabile alla
            qualita della stampa. Parimenti Tipografia Former non sarà
            responsabile per danni, diretti e indiretti, dovuti alla mancata e/o
            ritardata consegna del materiale,né sarà responsabile di eventuali
            deterioramenti dell'imballaggio; in tali casi sarà tenuta
            esclusivamente ad effettuare una sola ristampa del materiale a
            condizione che il pacco venga accettato dal cliente "con riserva dei
            vizi" che dovranno essere elencati sulla ricevuta rilasciata dal
            corriere e comunicati a Tipografia Former a mezzo fax, a pena di
            decadenza, entro tre giorni dalla ricezione del plico. Eventuali
            errori nella stampa o nel confezionamento del materiale vanno
            segnalati alla email info@tipografiaformer.it con documentazione
            fotografica digitale allegata, avendo cura di indicare nell'oggetto
            il numero d'ordine di riferimento, entro tre giorni dalla ricezione
            del materiale.
          </p>
          <h6 style={{ fontSize: "2.3px" }}>FORO DI COMPETENZA</h6>
          <p>
            Per tutte le controversie relative all'interpretazione e/o
            all'esecuzione del presente contratto, le parti riconoscono
            l'esclusiva competenza del foro di Roma, indipendentemente dal luogo
            di conclusione del contratto, dal domicilio del committente, dal
            luogo di pagamento anche se per mezzo di tratta e/o di r.b.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreventivoPDF;
{
  /* <img src="${GLOBAL_CONFIG.IMG_IP}/img/logo.png" alt="" style="" /> */
}

export const PreventivoPDFhtmlString = `
    <div style="width: 100%; height: 100%; padding:1em 5em; font-size: 11px;">
  <div style=" width: 100%; height: 100%;">
    <div style="display: flex; justify-content: space-between;">
      <div >
        <h2 style="font-weight: 500;">TIPOGRAFIA FORMER</h2>
        <p style="">Stabilimento e Uffici: Via Cassia 2010, 00123 Roma</p>
        <p style="">Servizio Clienti: 06.30884518 - Email: info@tipografiaformer.it</p>
        <p style="">Partita Iva: 14974961006</p>
      </div>
      <div style="margin-right:5em; display: flex; flex-direction: column; gap: 2px; align-items: center;">
        <h4 style="font-weight: 600; letter-spacing: .5px;">Preventivo WEB</h4>
        <p style="">20 Settembre 2023 15:33</p>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1px;">
      <h4 style="border-bottom: 0.1px solid #000; font-size: 13px; border-color: #000; padding-left: 1px; font-weight: 600; letter-spacing: .8px; margin-bottom: 7px; margin-top: 3em;">Cliente</h4>
      <p style="padding-left: 1px; font-weight: 600; letter-spacing: .5px;">Dimmagine s.r.l.</p>
      <p style="padding-left: 1px;">Cod. Cliente Online: 1684</p>
      <p style="padding-left: 1px;">Riferimento: Donatella Bittoni</p>
      <p style="padding-left: 1px;">Cod. Fisc:</p>
      <p style="padding-left: 1px;">P.IVA: 11359621007</p>
      <p style="padding-left: 1px;">Email: info@dimmagine.com</p>
      <p style="padding-left: 1px;">Tel: 067216713</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1px;">
      <h4 style="border-bottom: 1px solid #000; font-size: 13px; border-color: #000; padding-left: 1px; font-weight: 600; letter-spacing: .8px; margin-bottom:7px; margin-top:2em;">Ordine</h4>
      <p style="padding-left: 1px;">Quantità: 100</p>
      <p style="padding-left: 1px;">Formato: Biglietti da Visita 85 x 55 mm</p>
      <p style="padding-left: 1px;">Tipo di carta: Patinata Opaca 350 gr.</p>
      <p style="padding-left: 1px;">Colori di Stampa: 4+4 a colori Fronte/Retro</p>
      <p style="padding-left: 1px;">Opzioni:</p>
      <ul style="padding-left: 1px;">
        <li style="">- Lucidatura UV Gloss (Fronte)</li>
      </ul>
    </div>
    <div style="display: flex; flex-direction: column; gap: 1px; border-bottom: 1px solid #000; border-color: #000; padding-bottom: 3px;">
      <h4 style="padding-left: 1px; font-weight: 600; letter-spacing: .5px; font-size: 13px; margin-bottom: 7px; margin-top: 2em;">Informazioni aggiuntive</h4>
      <p style="padding-left: 1px;">Data in cui vuoi ricevere il prodotto: Martedì 26/09/2023</p>
      <p style="padding-left: 1px;">Modalità di pagamento: 60 giorni data fattura</p>
      <p style="padding-left: 1px;">Colli: 1</p>
      <p style="padding-left: 1px;">Peso: 1 kg ±</p>
    </div>
    <div style="font-weight: 600; letter-spacing: .5px; display: flex; flex-direction: column; align-items: flex-end; width: 100%; margin-top: 1.2em; font-size: 13.5px;">
      <p style=""><b>Imponibile € 12,00</b></p>
      <p style=""><b>IVA € 2,64</b></p>
      <p style=""><b>Totale con IVA € 14,64</b></p>
    </div>
    <div style="text-align: justify; font-size: 7px; margin-top: 5em;">
      <h6 style="">CONDIZIONI DI VENDITA</h6>
      <p style="margin-bottom: 1.2em;">prezzi indicati sono soggetti ad improvvise variazioni, verificare on line il prezzo prima dell’ordine. In caso di spedizione i costi sono esclusi dal presente
        preventivo e verranno conteggiati automaticamente al momento dell'ordine a seconda dell'indirizzo di consegna.</p>

      <h6 style="">FILE ALLEGATI AL LAVORO</h6>
      <p style="margin-bottom: 1.2em;">Dopo aver effettuato l'ordine potrai allegare i file sorgenti con estrema semplicità tramite un apposito modulo nel sito internet.</p>
      <h6 style="">RESPONSABILITA' DEL COMMITENTE</h6>
      <p style="margin-bottom: 1.2em;">La committente si assume la paternità dei contenuti oggetto di stampa esonerando la Tipografia Former dall'obbligo di esame degli stessi ed assumendosi,
        pertanto, qualsiasi responsabilità nei confronti di terzi che dovessero lamentare lesioni all'immagine, onore, decoro, integrità morale o comunque qualsiasi
        danno patrimoniale e non patrimoniale causalmente collegate alla stampa oggetto di contratto. La Tipografia Former si riserva la chiamata in manleva della
        committente nell'eventualità in cui domande risarcitorie venissero formulate direttamente nei suoi confronti.</p>
      <h6 style="">CLAUSOLA ESONERO RESPONSABILITA'</h6>
      <p style="margin-bottom: 1.2em;">Tipografia Former non sarà responsabile nei confronti del committente e/o beneficiario della prestazione se diverso, per danni di qualsiasi specie, sia diretti
        che indiretti, derivanti da eventuali errori, di ogni natura, nella stampa del file inviato dal cliente o derivanti dalla ricezione di materiale sbagliato. In tali casi
        Tipografia Former sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale qualora l'errore sia imputabile alla qualita della stampa.
        Parimenti Tipografia Former non sarà responsabile per danni, diretti e indiretti, dovuti alla mancata e/o ritardata consegna del materiale,né sarà
        responsabile di eventuali deterioramenti dell'imballaggio; in tali casi sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale a condizione
        che il pacco venga accettato dal cliente "con riserva dei vizi" che dovranno essere elencati sulla ricevuta rilasciata dal corriere e comunicati a Tipografia
        Former a mezzo fax, a pena di decadenza, entro tre giorni dalla ricezione del plico. Eventuali errori nella stampa o nel confezionamento del materiale vanno
        segnalati alla email info@tipografiaformer.it con documentazione fotografica digitale allegata, avendo cura di indicare nell'oggetto il numero d'ordine di
        riferimento, entro tre giorni dalla ricezione del materiale.</p>
      <h6 style="">FORO DI COMPETENZA</h6>
      <p style="margin-bottom: 1.2em;">Per tutte le controversie relative all'interpretazione e/o all'esecuzione del presente contratto, le parti riconoscono l'esclusiva competenza del foro di Roma,
        indipendentemente dal luogo di conclusione del contratto, dal domicilio del committente, dal luogo di pagamento anche se per mezzo di tratta e/o di r.b.</p>
    </div>
  </div>
</div>
`;
{
  /* <div id='preventivoPDFID' style={{background:'#000', width: '100%', height: '100%', padding: '1em 5em', fontSize: '3.5px' }}>
<div style={{ width: '100%', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
            <h2 style={{ fontWeight: '500' }}>TIPOGRAFIA FORMER</h2>
            <p>Stabilimento e Uffici: Via Cassia 2010, 00123 Roma</p>
            <p>Servizio Clienti: 06.30884518 - Email: info@tipografiaformer.it</p>
            <p>Partita Iva: 14974961006</p>
        </div>
        <div style={{ marginRight: '5em', display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
            <h4 style={{ fontWeight: '600', letterSpacing: '0.5px' }}>Preventivo WEB</h4>
            <p>20 Settembre 2023 15:33</p>
        </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <h4 style={{ borderBottom: '0.1px solid #000', fontSize: '5px', borderColor: '#000', paddingLeft: '1px', fontWeight: '600', letterSpacing: '0.8px', marginBottom: '7px', marginTop: '3em' }}>Cliente</h4>
        <hr style={{border:'1px solid #000', width:'100%'}}/>
        <p style={{ paddingLeft: '1px', fontWeight: '600', letterSpacing: '0.5px' }}>Dimmagine s.r.l.</p>
        <p style={{ paddingLeft: '1px' }}>Cod. Cliente Online: 1684</p>
        <p style={{ paddingLeft: '1px' }}>Riferimento: Donatella Bittoni</p>
        <p style={{ paddingLeft: '1px' }}>Cod. Fisc:</p>
        <p style={{ paddingLeft: '1px' }}>P.IVA: 11359621007</p>
        <p style={{ paddingLeft: '1px' }}>Email: info@dimmagine.com</p>
        <p style={{ paddingLeft: '1px' }}>Tel: 067216713</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <h4 style={{ borderBottom: '1px solid #000', fontSize: '5px', borderColor: '#000', paddingLeft: '1px', fontWeight: '600', letterSpacing: '0.8px', marginBottom: '7px', marginTop: '2em' }}>Ordine</h4>
        <p style={{ paddingLeft: '1px' }}>Quantità: 100</p>
        <p style={{ paddingLeft: '1px' }}>Formato: Biglietti da Visita 85 x 55 mm</p>
        <p style={{ paddingLeft: '1px' }}>Tipo di carta: Patinata Opaca 350 gr.</p>
        <p style={{ paddingLeft: '1px' }}>Colori di Stampa: 4+4 a colori Fronte/Retro</p>
        <p style={{ paddingLeft: '1px' }}>Opzioni:</p>
        <ul style={{ paddingLeft: '1px' }}>
            <li>- Lucidatura UV Gloss (Fronte)</li>
        </ul>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', borderBottom: '1px solid #000', paddingBottom: '3px' }}>
        <h4 style={{ paddingLeft: '1px', fontWeight: '600', letterSpacing: '0.5px', fontSize: '5px', marginBottom: '7px', marginTop: '2em' }}>Informazioni aggiuntive</h4>
        <p style={{ paddingLeft: '1px' }}>Data in cui vuoi ricevere il prodotto: Martedì 26/09/2023</p>
        <p style={{ paddingLeft: '1px' }}>Modalità di pagamento: 60 giorni data fattura</p>
        <p style={{ paddingLeft: '1px' }}>Colli: 1</p>
        <p style={{ paddingLeft: '1px' }}>Peso: 1 kg ±</p>
    </div>
    <div style={{ fontWeight: '600', letterSpacing: '0.5px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', marginTop: '1.2em', fontSize: '13.5px' }}>
        <p><b>Imponibile € 12,00</b></p>
        <p><b>IVA € 2,64</b></p>
        <p><b>Totale con IVA € 14,64</b></p>
    </div>
    <div style={{ textAlign: 'justify', fontSize: '7px', marginTop: '5em' }}>
        <h6>CONDIZIONI DI VENDITA</h6>
        <p style={{ marginBottom: '1.2em' }}>prezzi indicati sono soggetti ad improvvise variazioni, verificare on line il prezzo prima dell’ordine. In caso di spedizione i costi sono esclusi dal presente preventivo e verranno conteggiati automaticamente al momento dell'ordine a seconda dell'indirizzo di consegna.</p>

        <h6>FILE ALLEGATI AL LAVORO</h6>
        <p style={{ marginBottom: '1.2em' }}>Dopo aver effettuato l'ordine potrai allegare i file sorgenti con estrema semplicità tramite un apposito modulo nel sito internet.</p>
        <h6>RESPONSABILITA' DEL COMMITENTE</h6>
        <p style={{ marginBottom: '1.2em' }}>La committente si assume la paternità dei contenuti oggetto di stampa esonerando la Tipografia Former dall'obbligo di esame degli stessi ed assumendosi, pertanto, qualsiasi responsabilità nei confronti di terzi che dovessero lamentare lesioni all'immagine, onore, decoro, integrità morale o comunque qualsiasi danno patrimoniale e non patrimoniale causalmente collegate alla stampa oggetto di contratto. La Tipografia Former si riserva la chiamata in manleva della committente nell'eventualità in cui domande risarcitorie venissero formulate direttamente nei suoi confronti.</p>
        <h6>CLAUSOLA ESONERO RESPONSABILITA'</h6>
        <p style={{ marginBottom: '1.2em' }}>Tipografia Former non sarà responsabile nei confronti del committente e/o beneficiario della prestazione se diverso, per danni di qualsiasi specie, sia diretti che indiretti, derivanti da eventuali errori, di ogni natura, nella stampa del file inviato dal cliente o derivanti dalla ricezione di materiale sbagliato. In tali casi Tipografia Former sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale qualora l'errore sia imputabile alla qualita della stampa. Parimenti Tipografia Former non sarà responsabile per danni, diretti e indiretti, dovuti alla mancata e/o ritardata consegna del materiale,né sarà responsabile di eventuali deterioramenti dell'imballaggio; in tali casi sarà tenuta esclusivamente ad effettuare una sola ristampa del materiale a condizione che il pacco venga accettato dal cliente "con riserva dei vizi" che dovranno essere elencati sulla ricevuta rilasciata dal corriere e comunicati a Tipografia Former a mezzo fax, a pena di decadenza, entro tre giorni dalla ricezione del plico. Eventuali errori nella stampa o nel confezionamento del materiale vanno segnalati alla email info@tipografiaformer.it con documentazione fotografica digitale allegata, avendo cura di indicare nell'oggetto il numero d'ordine di riferimento, entro tre giorni dalla ricezione del materiale.</p>
        <h6>FORO DI COMPETENZA</h6>
        <p>Per tutte le controversie relative all'interpretazione e/o all'esecuzione del presente contratto, le parti riconoscono l'esclusiva competenza del foro di Roma, indipendentemente dal luogo di conclusione del contratto, dal domicilio del committente, dal luogo di pagamento anche se per mezzo di tratta e/o di r.b.</p>
    </div>
</div>
</div> */
}
