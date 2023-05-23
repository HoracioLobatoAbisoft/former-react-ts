import React, { useMemo, useEffect, useState, useContext } from "react";
import ClienteService from "../../../services/LoginService";
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';
import { Box, Typography } from "@mui/material";
import SubTableLavori from "./SubTableLavori";
import UserContext from "../../../context/UserContext";

interface ILavori {
  boxImgRif:string,
    nomeLavoro: string,
    idOrdineWeb: number,
    statoStrO: string,
    coloreStatoHTMLO:string,
    nOrdineStr: string,
    anteprimaWeb: string,
    qtaStr: number,
    nomeProdotto: string,
    dimensioniStr: string,
    orientamentoSelezionatoStr: string,
    supportoStr: string,
    coloriStampaStr: string,
    nFogliVisStr: number,
    boxLavorazioni: string[],
    colliStr: number,
    pesoStr: number,
    idCoupon: number,
    importoTotaleScontiStrO: number,
    omaggio: number,
    importoNettoStr: number,
    noteOrd: string,
    promo: number,
    pathTemplate: string,
    collapseInterno: string,
    boxTitolo: string,
    title: string,
    preventizioneIdReparto: number,
    ifOrientamento: number,
    ifSupporto: number,
    ifFogli: number,
    fogliLabel: string,
    ifOpzioni: number,
    ifCoupon: number,
    colorCoupon: string,
    ifNote: number,
}[]

const TablaLavori = () => {

  const [isLoading, setIsLoading] = useState(true)

  const [dataLavori, setDataLavori] = useState<ILavori[]>([]);

  const userData = useContext(UserContext);
  

  useEffect(() => {
    ClienteService.getLavori(userData.id).then((res) => {
      let data = res?.data;
      console.log(data);
      setDataLavori(data);
      setIsLoading(false)
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<ILavori>[]>(
    () =>
      [
        {
          id: "statoStr",
          header: "",
          columns: [
            {
              //accessorFn: (row) => `${row.coloreStatoHTMLO}`,
              id: "coloreStatoHTMLO", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
              header: "Stato",
              size: 150,
              Cell: ({ cell, row }) => (
                <>
                  <Box
                    component="span"
                    sx={(theme) => ({
                      backgroundColor: `${row.original.coloreStatoHTMLO}`,
                      borderRadius: "0.25rem",
                      color: `${cell.getValue()}`,
                      width: "",
                      padding: "8px 15px",
                    })}
                  >
                    <span>{}</span>
                  </Box>
                </>
              ),
            },
            {
              accessorFn: (row) => `${row.qtaStr} ${row.nomeProdotto}`,
              id: "qtaStr", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
              header: "PRODOTTO ACQUISTATO",
              size: 350,
              Cell: ({ cell, row }) => (
                <div className="flex space-x-2">
                  <p>
                    {" "}
                    <span className="mr-1">
                      {" "}
                      {row.original.qtaStr ? "N°" : ""}{" "}
                    </span>{" "}
                    {row.original.qtaStr}
                  </p>
                  <p>
                    <span className="mr-1">
                      {row.original.nomeProdotto ? "del" : ""}
                    </span>
                    {row.original.nomeProdotto}{" "}
                  </p>
                </div>
              ),
            },
          ],
        },
        {
          accessorKey: "nOrdineStr",
          header: "LAVORO",
        },
        {
          accessorKey: "importoNettoStr",
          header: "IMPORTO NETTO",
          Cell: ({ cell, row }) => (
            <div className="flex space-x-2">
              <p>
                {" "}
                <span className="mr-1">
                  {" "}
                  {row.original.importoNettoStr ? "€ " : ""}{" "}
                </span>
              </p>
              <p>
                <span className="mr-1">
                  {row.original.importoNettoStr ? "del" : ""}
                </span>
                {row.original.importoNettoStr}{" "}
              </p>
              <p>
                <span className="mr-1">
                  {row.original.importoNettoStr ? "+ iva" : ""}
                </span>
              </p>
            </div>
          ),
        },
        {
          accessorKey: "idOrdineWeb", //hey a simple column for once
          header: "PDF",
          size: 150,
        },
      ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={dataLavori}
      state={{ isLoading }}
      enableColumnFilterModes
      enableColumnOrdering
      initialState={{ density: "compact" }}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => <SubTableLavori row={row.original} />}
    />
  );
};

export default TablaLavori;
