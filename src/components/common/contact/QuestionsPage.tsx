import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionsPage = () => {
  let ordiniCurso = [
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
      title: "Potrai visualizzare lo stato del tuo ordine entrando nell’area riservata e consultando la pagina relativa ai tuoi ordini.",
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
      title: "Ho un ordine in corso con pagamento Bonifico Bancario. Dove trovo le coordinate bancarie?",
      subtitle:
        "Contattaci telefonicamente e ti invieremo le coordinate bancarie",
    },
    {
      id: 6,
      title: "Ho un ordine in corso con ritiro in negozio. Come faccio a sapere quando ritirare i prodotti ordinati?",
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

  return (
    <div>
      <div className="bg-[#E8E8E8] py-2 px-4">
        <h2 className="text-[#f58220] text-2xl">
          {" "}
          DOMANDE E RISPOSTE FREQUENTI
        </h2>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-white bg-[#f58220] px-4 py-2">Ordini in Corso</h2>
        <p>
          In questa sezione trovi tutte le informazioni riguardanti un ordine in
          corso: tempistica, stato dell'ordine, spedizione, fattura
        </p>
      </div>

      <div className="mx-10 mt-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default QuestionsPage;
