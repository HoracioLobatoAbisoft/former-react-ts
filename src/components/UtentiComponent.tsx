import React, { useState, useEffect, useRef } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { defaultData } from "../utils/defaultData";
import classNames from "classnames";
import ClienteService from "../../src/services/LoginService";

const UtentiComponent = () => {
  const [argomentiDate, setArgomentiDate] = useState(defaultData);

  const [data, setData] = useState(defaultData);

  const columns = [
    {
      accessorKey: "name",
    },
    {
      accessorKey: "lastName",
    },
    {
      accessorKey: "age",
    },
    {
      accessorKey: "status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    ClienteService.getUtenti().then((res) => {
      let data = res?.data.data;

      console.log(data);
      //setData(data);
    });
  }, []);

  console.log(argomentiDate);

  return (
    <div className="px-6 py-4">
      <table className="table-auto w-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-gray-300 text-gray-600 bg-gray-100"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2 px-4 text-left uppercase">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-gray-600 hover:bg-slate-300">
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
            className="text-gray-600 bg-gray-200 py-0.5 px-2 rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-grat-200"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-gray-600 bg-gray-200 py-0.5 px-2 rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-grat-200"
          >
            {"<"}
          </button>
          {table.getPageOptions().map((value, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(value)}
              className={classNames({
                "text-gray-600 bg-gray-200 py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-grat-200":
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
            className="text-gray-600 bg-gray-200 py-0.5 px-2 rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-grat-200"
          >
            {">"}
          </button>

          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="text-gray-600 bg-gray-200 py-0.5 px-2 rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-grat-200"
          >
            {">>"}
          </button>
        </div>
        <div className="text-gray-600 font-semibold">
          Mostrando de {Number(table.getRowModel().rows[0].id) + 1} a{" "}
          {Number(table.getRowModel().rows[table.getRowModel().rows.length - 1].id) + 1} del
          total de {data.length} registros
        </div>
        <select 
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
          className="text-gray-600 border border-gray-300 rounded outline-indigo- py-1 px-2">
          <option value="10">10 pag.</option>
          <option value="20">20 pag.</option>
          <option value="30">30 pag.</option>
          <option value="40">40 pag.</option>
        </select>
      </div>
    </div>
  );
};

export default UtentiComponent;
