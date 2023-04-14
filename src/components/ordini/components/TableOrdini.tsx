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
import ReplilogoOrdine from "./ReplilogoOrdine";

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
  pathTemplate: string;
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
      inseritoStr: "",
      pathTemplate: ""
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
          // {
          //   accessorKey: "pathTemplate", //hey a simple column for once
          //   header: "pdf",
          //   size: 150,
          // },
          
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
        <ReplilogoOrdine row={row.original} />
      )}
    />
  );
};

export default TableOrdini;
