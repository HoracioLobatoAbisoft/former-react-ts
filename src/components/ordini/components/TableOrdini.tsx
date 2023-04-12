import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { defaultData } from "../../../utils/defaultData";
import classNames from "classnames";
import ClienteService from "../../../services/LoginService";

interface IGetStateTable {
  totalRows: number;
  firstIndex: number;
  lastIndex: number;
}

const TableOrdini = () => {
  const [argomentiDate, setArgomentiDate] = useState(defaultData);
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  console.log(globalFilter);

  const columns = [
    // {
    //   header: 'ID Indice Ricerca',
    //   accessorKey: "idIndiceRicerca",
    // },
    {
      accessorKey: "nomeListino",
    },
    // {
    //   accessorKey: "percCoupon",
    // },
    {
      accessorKey: "inEvidenza",
    },
    {
      accessorKey: "prodottoFinito",
    },
    {
      accessorKey: "qta1",
    },
    // {
    //   accessorKey: "prezzo1",
    // },
    // {
    //   accessorKey: "prezzo1Riv",
    // },
    {
      accessorKey: "qta2",
    },
    // {
    //   accessorKey: "prezzo2",
    // },
    // {
    //   accessorKey: "prezzo2Riv",
    // },
    {
      accessorKey: "qta3",
    },
    // {
    //   accessorKey: "prezzo3",
    // },
    // {
    //   accessorKey: "prezzo3Riv",
    // },
    // {
    //   accessorKey: "totOrdini",
    // },
  ];

  const fuzzyFilter = (row: any, columnId: any, value: any, addMeta: any) => {
    const itemRank = rankItem(row.getValue(columnId), value);

    addMeta({ itemRank });

    return itemRank.passed;
  };

  const DebauncedInput = ({
    value: keyWord,
    onChange,
    ...props
  }: any): JSX.Element => {
    const [value, setValue] = useState(keyWord);
    useEffect(() => {
      const timeOut = setTimeout(() => {
        onChange(value);
      }, 700);
      return () => clearTimeout(timeOut);
    }, [value]);
    return (
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  };

  const getStateTable = (): IGetStateTable => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPage = table.getRowModel().rows.length;

    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = pageIndex * pageSize + rowsPage;

    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  useEffect(() => {
    ClienteService.getUtenti().then((res) => {
      let data = res?.data.data;

      console.log(data);
      setData(data);
    });
  }, []);

  console.log(argomentiDate);
  return (
    <div className="px-6 py-4">
      <div className="my-2 flex justify-between">
        <h2 className="text-xl text-transform: uppercase font-weight: 900">
          Tavola Ricerca
        </h2>
        <DebauncedInput
          type="text"
          value={globalFilter ?? ""}
          onChange={(value: any) => setGlobalFilter(String(value))}
          className="text-orange-600 border border-orange-300 rounded outline-indigo py-2 px-2"
          placeholder="Buscar..."
        />
      </div>
      <table className="table-auto w-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-orange-300 text-white bg-orange-500"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2 px-4 text-left uppercase">
                  {header.isPlaceholder ? null : (
                    <div
                      className={classNames({
                        "cursor-pointer select-none":
                          header.column.getCanSort(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <i className="fas fa-sort-up"></i>,
                        desc: <i className="fas fa-sort-down"></i>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-black-600 hover:bg-slate-300">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 px-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="text-orange-600 bg-orange-200 py-0.5 px-2 rounded border border-orange-300 disabled:hover:bg-white disabled:hover:text-orange-600r"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-orange-600 bg-orange-200 py-0.5 px-2 rounded border border-orange-300 disabled:hover:bg-white disabled:hover:text-orange-600"
          >
            {"<"}
          </button>
          {table.getPageOptions().map((value, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(value)}
              className={classNames({
                "text-orange-600 bg-orange-200 py-0.5 px-2 rounded border border-orange-300 disabled:hover:bg-white disabled:hover:text-orange-600":
                  true,
                "bg-indigo-100 text-indigo-700":
                  value === table.getState().pagination.pageIndex,
              })}
            >
              {value + 1}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-orange-600 bg-orange-200 py-0.5 px-2 rounded border border-orange-300 disabled:hover:bg-white disabled:hover:text-orange-600"
          >
            {">"}
          </button>

          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="text-orange-600 bg-orange-200 py-0.5 px-2 rounded border border-orange-300 disabled:hover:bg-white disabled:hover:text-orange-600"
          >
            {">>"}
          </button>
        </div>
        <div className="text-black-600 font-semibold">
          Mostrando da {getStateTable().firstIndex} a{" "}
          {getStateTable().lastIndex} del totale di {getStateTable().totalRows}{" "}
          record
        </div>
        <select
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="text-black-600 border border-orange-300 rounded outline-indigo- py-1 px-2"
        >
          <option value="5">5 pag.</option>
          <option value="10">10 pag.</option>
          <option value="20">20 pag.</option>
          <option value="30">30 pag.</option>
          <option value="40">40 pag.</option>
        </select>
      </div>
    </div>
  );
};

export default TableOrdini;
