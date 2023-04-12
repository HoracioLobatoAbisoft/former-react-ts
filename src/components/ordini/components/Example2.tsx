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
  statoStr:string;
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
};

// const data: Employee[] = [
//   {
//     firstName: "John",
//     corriereStr: "",
//     idConsegnaView: "",
//     lastName: "Whitch",
//     email: "jhon@rmail.com",
//     jobTitle: "programer",
//     salary: 10000,
//     startDate: "10/20/2022",
//     signatureCatchPhrase: "",
//     avatar: "aaa",
//   },
//   {
//     firstName: "Prdro",
//     lastName: "Ramirez",
//     corriereStr: "",
//     idConsegnaView: "",
//     email: "pedro@rmail.com",
//     jobTitle: "programer",
//     salary: 8000,
//     startDate: "10/20/2022",
//     signatureCatchPhrase: "",
//     avatar: "aaa",
//   },
//   {
//     firstName: "Pablo",
//     corriereStr: "",
//     idConsegnaView: "",
//     lastName: "Lopez",
//     email: "pablo@rmail.com",
//     jobTitle: "programer",
//     salary: 7000,
//     startDate: "10/20/2022",
//     signatureCatchPhrase: "",
//     avatar: "aaa",
//   },
// ];






const Example2 = () => {
  const [dataOrdini, setDataOrdini] = useState([
    {
      firstName: "John",
      corriereStr: "",
      idConsegnaView: "",
      giornoStr:"",
      lastName: "Whitch",
      email: "jhon@rmail.com",
      jobTitle: "programer",
      salary: 10000,
      startDate: "10/20/2022",
      signatureCatchPhrase: "",
      avatar: "aaa",
      statoStr: "",
      count:"",
      importoTotOrdiniNettoOriginaleStr:""
    },
  ])

  useEffect(() => {
    ClienteService.getOrdini().then((res) => {
      let data = res?.data;
  
      console.log(data);
      setDataOrdini(data)
      console.log(dataOrdini)
      
    });
  }, []);




  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        id: "statoStr", //id used to define `group` column
        header: "",
        columns: [
          {
            accessorKey: "statoStr", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: "Stato",
            size: 150,
            
          },
          {
            accessorKey: "idConsegnaView", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
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
     
     
      
      initialState={{ showColumnFilters: true }}
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

export default Example2;
