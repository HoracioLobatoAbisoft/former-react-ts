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
    },
  ]);

  useEffect(() => {
    ClienteService.getOrdini().then((res) => {
      let data = res?.data;

      console.log(data);
      setDataOrdini(data);
      console.log(dataOrdini);
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
          // {
          //   accessorKey: "statoStr", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
          //   enableClickToCopy: true,
          //   header: "Stato",
          //   size: 150,
          // },
          {
            accessorKey: "idConsegnaView", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: "Ordine",
            size: 150,
          },
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
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2>Datos del collapse</h2>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4">{row.original.firstName}</Typography>
            <Typography variant="h1">
              {row.original.signatureCatchPhrase}
            </Typography>
          </Box>
        </Box>
      )}
    />
  );
};

export default TableOrdini;
