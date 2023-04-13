import React, { useMemo, useState, useEffect } from "react";
import ClienteService from "../../../services/LoginService";

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

export type Employee = {
  corriereStr: string;
  idConsegnaView: string;
  giornoStr: string;
  statoStr: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  salary: number;
  startDate: string;
  signatureCatchPhrase: string;
  avatar: string;
  count: string;
  importoTotOrdiniNettoOriginaleStr: string;
  coloreStatoHtml: string;
  indirizzoStr: string;
  pesoKG: number;
  colliStr: string;
  pagamentoStr: string;
  importoConsegnaStr: string;
  importoTotIvaStr: string;
  importoTotStr: string;
  inseritoStr: string;
};

const TableOrdini = () => {
  const [dataOrdini, setDataOrdini] = useState([
    {
      firstName: "John",
      corriereStr: "",
      idConsegnaView: "",
      giornoStr: "",
      lastName: "Whitch",
      email: "jhon@rmail.com",
      jobTitle: "programer",
      salary: 10000,
      startDate: "10/20/2022",
      signatureCatchPhrase: "",
      avatar: "aaa",
      statoStr: "",
      count: "",
      importoTotOrdiniNettoOriginaleStr: "",
      coloreStatoHtml: "",
      indirizzoStr: "",
      pesoKG: 0,
      colliStr: "",
      pagamentoStr: "",
      importoConsegnaStr: "",
      importoTotIvaStr:"",
      importoTotStr: "",
      inseritoStr: ""
    },
  ]);

  useEffect(() => {
    ClienteService.getOrdini().then((res) => {
      let data = res?.data;
      setDataOrdini(data);
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        id: "statoStr", //id used to define `group` column
        header: "",
        columns: [
          {
            accessorFn: (row) => `${row.coloreStatoHtml} ${row.statoStr}`,
            id: "coloreStatoHtml", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: "Stato",
            size: 150,
            Cell: ({ cell, row }) => (
              <>
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
                  <span>{}</span>
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
              </>
            ),
          },
          {
            accessorFn: (row) => `${row.idConsegnaView} ${row.inseritoStr}`,
            id: "idConsegnaView", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: "Ordine",
            size: 250,
            Cell: ({ cell, row }) => (
              <div className="flex space-x-2">
                  <p> <span className="mr-1"> {row.original.idConsegnaView? "N°" : ""} </span> {row.original.idConsegnaView}</p>
                  <p><span className="mr-1">{row.original.inseritoStr ? "del": ""}</span>{row.original.inseritoStr} </p>
              </div>
            ),
          },
          // {
          //   accessorKey: "statoStr", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
          //   enableClickToCopy: true,
          //   header: "Stato",
          //   size: 150,
          // },
          
        ],
      },
      {
        id: "giornoStr",
        header: "",
        columns: [
          {
            accessorKey: "giornoStr", //hey a simple column for once
            header: "DATA CONSEGNA",
            size: 150,
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
        ],
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={dataOrdini}
      enableColumnFilterModes
      enableColumnOrdering
      initialState={{density:"compact"}}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => (
        <div className="flex justify-around items-center">
          <div>
            <h2 className="font-semibold text-base">Riepilogo Ordine</h2>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Data Consegna</p>{" "}
              <p className="font-semibold">{row.original.giornoStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">N° Lavori</p>{" "}
              <p className="font-semibold">{row.original.count}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Corriere</p>{" "}
              <p className="font-semibold">{row.original.corriereStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Indirizzo</p>{" "}
              <p className="font-semibold">{row.original.indirizzoStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28"></p>{" "}
              <p className="font-semibold">
                {" "}
                (Colli {row.original.colliStr}, Peso {row.original.pesoKG} kg ±)
              </p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Pagamento</p>{" "}
              <p className="font-semibold">{row.original.pagamentoStr}</p>
            </div>
            <div className="mt-4">
              <p className="text-base font-semibold">LAVORI NELL' ORDINE</p>
              <p>Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Box
                component="span"
                sx={(theme) => ({
                  backgroundColor: `${row.original.coloreStatoHtml}`,
                  borderRadius: "0.25rem",

                  width: "auto",
                  padding: "8px 15px",
                })}
              >
                <span>{row.original.statoStr}</span>
              </Box>
            </div>

            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Totale Lavori:</p>{" "}
              <p className="font-semibold">€ {row.original.importoTotOrdiniNettoOriginaleStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">Totale Spedizioni:</p>{" "}
              <p className="font-semibold">€ {row.original.importoConsegnaStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm">
              <p className="w-28">IVA (22%):</p>{" "}
              <p className="font-semibold">€ {row.original.importoTotIvaStr}</p>
            </div>
            <div className="flex space-x-4 items-center mt-2 text-sm bg-[#d6e03d]">
              <p className="w-28">TOTALE:</p>{" "}
              <p className="font-semibold">€ {row.original.importoTotStr}</p>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default TableOrdini;
