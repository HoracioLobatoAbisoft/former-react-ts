import React, { useMemo, useState, useEffect } from "react";
import OrdiniServices from "../services/OrdiniServices";
import {OrdineTable} from "../interfaces/IOrdine"
import imgUserRunning from "../../../assets/img/user-runing.png";
import imgBox from "../../../assets/img/box.svg";
import imgTruck from "../../../assets/img/truck.svg";


//MRT Imports
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";

//Material-UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,
} from "@mui/material";
import { DensityLarge } from "@mui/icons-material";
import ReplilogoOrdine from "./ReplilogoOrdine";

import ButtonSendEmail from "./ButtonSendEmail";


const TableOrdini = () => {
  const [dataOrdini, setDataOrdini] = useState([
    {
      corriereStr: "",
      idConsegnaView: "",
      giornoStr: "",
      dataOrdineClasse: "",
      signatureCatchPhrase: "",
      statoStr: "",
      count: "",
      importoTotOrdiniNettoOriginaleStr: "",
      coloreStatoHtml: "",
      indirizzoStr: "",
      pesoKG: 0,
      colliStr: "",
      pagamentoStr: "",
      importoConsegnaStr: "",
      importoTotIvaStr: "",
      importoTotStr: "",
      inseritoStr: "",
      iconaCorriereAlt: "",
      idConsegna: 0,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    OrdiniServices.getOrdini().then((res) => {

      let data = res?.data;
      
      setDataOrdini(data);
      setIsLoading(false);
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<OrdineTable>[]>(
    () => [
      {
        accessorFn: (row) => `${row.coloreStatoHtml} ${row.statoStr}`,
        id: "coloreStatoHtml", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "STATO",
        size: 250,
        Cell: ({ cell, row }) => (
          <div className="flex">
            {
              <ButtonSendEmail cell={cell} />
            }
            {row.original.iconaCorriereAlt == "RITIRO CLIENTE" && (
              <img className="online" src={imgUserRunning} alt="" />
            )}
            {(row.original.iconaCorriereAlt == "Corriere GLS" || row.original.iconaCorriereAlt == "TIPOGRAFIA FORMER") && (
              <img className="online w-7 h-7 mr-1" src={imgTruck} alt="" />
            )}
            {row.original.iconaCorriereAlt ==
              "PORTO ASSEGNATO GLS (SPESE IMBALLO + 3%)" && (
                <img className="online w-7 h-9 mr-1" src={imgBox} alt="" />
              )}

            <Box
              component="span"
              sx={(theme) => ({
                backgroundColor: `${row.original.coloreStatoHtml}`,
                borderRadius: "0.25rem",
                color: `${cell.getValue()}`,
                width: "",
                padding: "8px 15px",
              })}
            >
              <span>{ }</span>
            </Box>
            <Box
              component="span"
              sx={(theme) => ({
                backgroundColor: `${cell.getValue()}`,
                borderRadius: "0.25rem",
                color: `${cell.getValue()}`,
                width: "",
                padding: "8px 15px",
              })}
            >
              <span>{row.original.statoStr}</span>
            </Box>
          </div>
        ),
      },
      {
        accessorFn: (row) => `${row.idConsegnaView} ${row.inseritoStr}`,
        id: "idConsegnaView", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
        header: "ORDINE",
        size: 250,
        Cell: ({ cell, row }) => (
          <div className="flex space-x-2">
            <p>
              {" "}
              <span className="mr-1">
                {" "}
                {row.original.idConsegnaView ? "N°" : ""}{" "}
              </span>{" "}
              {row.original.idConsegnaView}
            </p>
            <p>
              <span className="mr-1">
                {row.original.inseritoStr ? "del" : ""}
              </span>
              {row.original.inseritoStr}{" "}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "giornoStr", //hey a simple column for once
        header: "DATA CONSEGNA",
        size: 150,
        Cell: ({ cell, row }) => (
          <div className="flex">
            <Box
              component="span"
              sx={(theme) => ({
                backgroundColor: `${row.original.dataOrdineClasse}`,
                borderRadius: "0.25rem",
                color: `${cell.getValue()}`,

                padding: "8px 15px",
              })}
            >
              <span>{row.original.giornoStr}</span>
            </Box>
          </div>
        ),
      },
      {
        accessorKey: "corriereStr", //hey a simple column for once
        header: "	CORRIERE",
        size: 150,
      },
      {
        accessorKey: "count", //hey a simple column for once
        header: "N° LAVORI",
        size: 150,
      },

      {
        accessorKey: "importoTotOrdiniNettoOriginaleStr", //hey a simple column for once
        header: "IMPORTO NETTO",
        size: 150,
      },
      {
        accessorKey: "idConsegna", //hey a simple column for once
        header: "PDF",
        size: 150,
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={dataOrdini}
      state={{ isLoading }}
      enableColumnFilterModes
      enableColumnOrdering
      initialState={{ density: "compact" }}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => <ReplilogoOrdine row={row.original} />}
    />
  );
};

export default TableOrdini;
