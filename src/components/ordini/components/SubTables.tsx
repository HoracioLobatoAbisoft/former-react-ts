import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Collapse,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import imgShopping from "../../../assets/img/shopping.svg";
import imgEuro from "../../../assets/img/etiqueta.png";

const SubTables = ({ el }: any) => {
  console.log(el);
  return (
    <div className="mt-2">
      {el.map((data: any, index: number) => {
        return (
          <Grid key={index} container sx={{ marginTop: "4px" }} spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ width: "100%" }}
                >
                  <table className=" w-full">
                    <thead className="w-full">
                      <tr className="px-2 py-2 w-32">
                        <th className=" px-2 py-2 w-32">
                          <div className="flex space-x-4">
                            <ExpandMore />
                            <img className="h-5 w-5" src={imgShopping} alt="" />
                            <Box
                              component="span"
                              sx={(theme) => ({
                                backgroundColor: `${data.coloreStatoHTMLO}`,
                                borderRadius: "0.25rem",
                                width: "auto",
                                padding: "8px 15px",
                              })}
                            >
                              <span></span>
                            </Box>
                          </div>
                        </th>

                        <th className="w-72">{data.title}</th>
                        <th className="">{data.nOrdineStr}</th>
                        <th className="">{data.importoNettoStr}</th>
                      </tr>
                    </thead>
                  </table>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex justify-around items-center">
                    <div>
                      <h2 className="font-semibold text-base">
                        Riepilogo Ordine
                      </h2>
                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Nome lavoro</p>{" "}
                        <p className="font-semibold">{data.nomeLavoro}</p>
                      </div>
                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Quantità:</p>{" "}
                        <p className="font-semibold">{data.qtaStr}</p>
                      </div>
                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Prodotto</p>{" "}
                        <p className="font-semibold">{data.nomeProdotto}</p>
                      </div>
                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Stampa</p>{" "}
                        <p className="font-semibold">{data.coloriStampaStr}</p>
                      </div>
                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Imballo</p>{" "}
                        <p className="font-semibold">
                          {" "}
                          (Colli {data.colliStr}, Peso {data.pesoStr} kg ±)
                        </p>
                      </div>
                      {/* <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">Pagamento</p>{" "}
                        <p className="font-semibold">aa</p>
                      </div> */}
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center px-4 rounded-sm py-1 my-4 bg-[#d6e03d]">
                          <img className="h-8 w-8" src={imgEuro} alt="" />
                          <p className="text-lg font-semibold">{data.importoNettoStr}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex space-x-4 items-center mt-2 text-sm">
                          <p className="w-28">Note</p>{" "}
                          <p className="">{data.noteOrd}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <Box
                          component="span"
                          sx={(theme) => ({
                            backgroundColor: `${data.coloreStatoHTMLO}`,
                            borderRadius: "0.25rem",
                            width: "auto",
                            padding: "8px 15px",
                          })}
                        >
                          <span>{data.statoStrO}</span>
                        </Box>
                      </div>

                      <div className="flex space-x-4 items-center mt-2 text-sm">
                        <p className="w-28">N° Lavoro</p>{" "}
                        <p className="font-semibold">{data.nOrdineStr}</p>
                      </div>
                      
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default SubTables;
