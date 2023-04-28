import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionsPage = () => {
  let OrdiniCurso = [
    {
      id: 1,
      title: "Non trovo il mio ordine. Mi potete aiutare?",
      subtitle:
        "Puoi visualizzare il tuo ordine entrando nella tua area riservata e consultando la sezione relativa allo stato dei tuoi ordini.",
    },
    {
      id: 2,
      title: "Quando arriva il prodotto che ho ordinato?",
      subtitle:
        "Potrai visualizzare lo stato del tuo ordine entrando nell’area riservata e consultando la pagina relativa ai tuoi ordini.",
    },
    {
      id: 3,
      title:
        "Potrai visualizzare lo stato del tuo ordine entrando nell’area riservata e consultando la pagina relativa ai tuoi ordini.",
      subtitle:
        "Ti manderemo un e-mail avvisandoti che il tuo ordine è in spedizione.",
    },
    {
      id: 4,
      title: "Posso cambiare l’intestazione della fattura?",
      subtitle:
        "I dati di fattura coincidono con quelli inseriti in fase di registrazione. Se devi modificare i dati di fatturazione contattaci e li aggiorneremo",
    },
    {
      id: 5,
      title:
        "Ho un ordine in corso con pagamento Bonifico Bancario. Dove trovo le coordinate bancarie?",
      subtitle:
        "Contattaci telefonicamente e ti invieremo le coordinate bancarie",
    },
    {
      id: 6,
      title:
        "Ho un ordine in corso con ritiro in negozio. Come faccio a sapere quando ritirare i prodotti ordinati?",
      subtitle:
        "Ti manderemo un e-mail avvisandoti che il tuo ordine è pronto per il ritiro.",
    },
    {
      id: 7,
      title: "Come posso annullare un ordine?",
      subtitle:
        "Potrai comunicare l’annullamento scrivendoci una mail a info@tipografiaformer.it",
    },
  ];

  let Informazioni = [
    {
      id: 1,
      title: "Non trovo il prodotto che mi interessa, potete aiutarmi?",
      subtitle:
        "Se l’articolo che cerchi non è in catalogo scrivici una mail a info@tipografiaformer.it",
    },
    {
      id: 2,
      title: "Ho bisogno di sapere le misure di un prodotto e del suo imballo, a chi mi devo rivolgere?",
      subtitle:
        "Per conoscere le misure di un prodotto e del suo imballo scrivici una mail a info@tipografiaformer.it",
    },
   
  ];

  let Spedizione = [
    {
      id: 1,
      title: "E’ possibile ritirare in negozio la merce acquistata on line?",
      subtitle:
        "SI, è possibile ritirare in negozio un prodotto acquistato on line.",
    },
    {
      id: 2,
      title: "Se faccio un ordine con ritiro in negozio chi mi avviserà quando ritirare i prodotti ordinati?",
      subtitle:
        "Ti manderemo un e-mail avvisandoti che il tuo ordine è pronto per il ritiro.",
    },
   
  ];

  let Rivenditori = [
    {
      id: 1,
      title: "Come posso accedere al listino riservato ai rivenditori?",
      subtitle:
        "Contatta l'amministrazione e ti daremo tutte le informazioni necessarie per accedere come Rivenditore",
    },
    {
      id: 2,
      title: "I prezzi riservati ai rivenditori sono IVA esclusa?",
      subtitle:
        "Si",
    },
   
  ];

  let Suggerimenti = [
    {
      id: 1,
      title: "Ieri ho inviato una richiesta di assistenza ma non ho ricevuto risposta. Potete rispondermi?",
      subtitle:
        "Le richieste di assistenza non vengono lette in tempo reale, come indicato sul sito vengono lavorate nelle 24 ore successive all’invio (entro un giorno lavorativo",
    },
    {
      id: 2,
      title: "Vorrei inviare un suggerimento",
      subtitle:
        "Per inviarci un suggerimento scrivici una mail a info@tipografiaformer.it",
    },
   
  ];

  let Internet = [
    {
      id: 1,
      title: "Che browser consigliate di usare per navigare sul vostro sito?",
      subtitle:
        "Ti consigliamo di utilizzare Google Chrome, un browser gratuito, sicuro e multi piattaforma. Puoi scaricarlo gratuitamente andando all'indirizzo www.google.com/chrome Qualsiasi sia il browser che usi ti consigliamo comunque di utilizzare la versione più recente che trovi",
    },
   
  ];

  return (
    <div>
      <div className="bg-[#E8E8E8] py-2 px-4 mx-10">
        <h2 className="text-[#f58220] text-2xl font-bold">
          {" "}
          DOMANDE E RISPOSTE FREQUENTI
        </h2>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Ordini in Corso</h2>
        <p className="mt-2 ml-4">
          In questa sezione trovi tutte le informazioni riguardanti un ordine in
          corso: tempistica, stato dell'ordine, spedizione, fattura
        </p>
      </div>

      <div className="mx-10 mt-4">
        {OrdiniCurso.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8', border:'1px solid #E8E8E8', borderRadius: '0.375rem;'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Informazioni tecniche</h2>
        <p className="mt-2 ml-4">
          In questa sezione puoi trovare o richiedere informazioni tecniche relative ai prodotti
        </p>
      </div>
      <div className="mx-10 mt-4">
        {Informazioni.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Spedizione e punti di ritiro</h2>
        <p className="mt-2 ml-4">
          In questa sezione trovi le informazioni riguardanti le modalità d’acquisto presso il punto di ritiro di Roma e le indicazioni per il ritiro presso il deposito del corriere
        </p>
      </div>
      <div className="mx-10 mt-4">
        {Spedizione.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Rivenditori</h2>
        <p className="mt-2 ml-4">
          In questa sezione trovi tutte le informazioni per diventare nostro rivenditore
        </p>
      </div>
      <div className="mx-10 mt-4">
        {Rivenditori.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Suggerimenti e Reclami</h2>
        <p className="mt-2 ml-4">
          In questa sezione puoi trovare indicazioni per effettuare un reclamo o inviarci un suggerimento
        </p>
      </div>
      <div className="mx-10 mt-4">
        {Suggerimenti.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2 uppercase font-semibold rounded-md">Sito Internet</h2>
        <p className="mt-2 ml-4">
          In questa sezione puoi trovare o richiedere informazioni riguardanti il nostro sito internet
        </p>
      </div>
      <div className="mx-10 mt-4">
        {Internet.map((e) => {
          return (
            <div key={e.id} className="mt-2">
              <Accordion>
                <AccordionSummary
                  sx={{backgroundColor: '#E8E8E8'}}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className="mr-2 text-xl -mt-2 rounded-3xl border bg-[#f58220] text-white h-10 px-2 py-1">0{e.id}</span>
                  <Typography>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{e.subtitle}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>


    </div>
  );
};

export default QuestionsPage;
