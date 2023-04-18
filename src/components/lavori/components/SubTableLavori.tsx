
import {
  Box,
  Grid,
} from "@mui/material";

import imgEuro from "../../../assets/img/etiqueta.png";

const SubTableLavori = ({ row }: any) => {
  
  return (
    <Grid key={row.idOrdineWeb} container sx={{ marginTop: "4px" }} spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <div className="flex justify-around items-center">
          <div>
            <h2 className="font-semibold text-base">Riepilogo Ordine</h2>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Nome lavoro</p>{" "}
              <p className="font-semibold">{row.nomeLavoro}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Quantità:</p>{" "}
              <p className="font-semibold">{row.qtaStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Prodotto</p>{" "}
              <p className="font-semibold">{row.nomeProdotto}</p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Dimensioni</p>{" "}
              <p className="font-semibold">{row.dimensioniStr}</p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Orientamento</p>{" "}
              <p className="font-semibold">{row.orientamentoSelezionatoStr}</p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Supporto</p>{" "}
              <p className="font-semibold">{row.supportoStr}</p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Stampa</p>{" "}
              <p className="font-semibold">{row.coloriStampaStr}</p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Fogli</p>{" "}
              <p className="font-semibold">{row.nFogliVisStr}</p>
            </div>

            <div className="flex space-x-4 mt-2 text-sm">
              <p className="w-28">Opzioni</p>{" "}
              <ul>
                {row.boxLavorazioni.map((BL: any, I: number) => (
                  <li className="font-semibold" key={I}>
                    - {BL}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Imballo</p>{" "}
              <p className="font-semibold">
                {" "}
                (Colli {row.colliStr}, Peso {row.pesoStr} kg ±)
              </p>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Coupon</p>{" "}
              <p className="font-semibold">{row.importoTotaleScontiStrO}</p>
            </div>

            <div className="flex justify-center items-center space-x-1">
              <div className="flex items-center justify-center px-4 rounded-sm py-1 my-4 bg-[#d6e03d]">
                <img className="h-8 w-8" src={imgEuro} alt="" />
                <p className="text-lg font-semibold">{row.importoNettoStr}</p>
              </div>

              <div>
                <p className="bg-[#009ec9] px-2 py-1 text-white text-xs rounded-md mb-4">
                  Promo {row.promo} %
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex space-x-4 items-center mt-2 text-sm">
                <p className="w-28">Note</p> <p className="">{row.noteOrd}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor: `${row.coloreStatoHTMLO}`,
                  borderRadius: "0.25rem",
                  width: "auto",
                  padding: "8px 15px",
                })}
              >
                <span>{row.statoStrO}</span>
              </Box>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">N° Lavoro</p>{" "}
              <p className="font-semibold">{row.nOrdineStr}</p>
            </div>
          </div>
        </div>
      </Grid>

      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default SubTableLavori;
