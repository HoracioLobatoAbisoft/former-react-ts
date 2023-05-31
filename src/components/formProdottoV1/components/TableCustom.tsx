import React from 'react'
import { TablePrezzi } from '../interface/table'
import { TableDate } from '../interface/tableDate'
interface Props {
    tablaDataPrezzi: TablePrezzi[]
    tablaDate: TableDate
    viewRows:Boolean
}
const TableCustom = ({ tablaDataPrezzi, tablaDate,viewRows }: Props) => {
    const formatDate = (value: Date) => {
        if (value != undefined) {
            const date = new Date(value);
            const valueReturn = date.toLocaleDateString('it-IT', { weekday: 'long', month: 'long', day: 'numeric' })
            const valueConvert = String(valueReturn).split(" ");
            //debugger
            return valueConvert;
        }
        return ["", 0, ""]
    }

    return (
        <>
            {tablaDate &&
                <div className=" w-full flex gap-10 gap-y-10 h-[80px] overflow-hidden mb-3" >
                    <div className="w-2/4 text-xl text-center font-bold flex items-center justify-center">Quantità</div>
                    <div className="w-2/4  border-gray-300 border  rounded-xl text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-slate-100">
                        <div className=" bg-gray-600 rounded w-3/6 h-3/4">
                            <div className="text-center w-full flex-col bg-white flex justify-[space-between] h-full rounded-t rounded-bl rounded-br-3xl font-[Arial] text-xs">
                                <p className="bg-yellow-400 w-full rounded-t px-3">{formatDate(tablaDate.dataFast)[0]}</p>
                                <div className="flex flex-col items-center font-bold leading-[10px]">
                                    <p className="p-0 m-0  text-lg">{formatDate(tablaDate.dataFast)[1]}</p>
                                    <p className="p-0 m-0">{formatDate(tablaDate.dataFast)[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4  border-gray-300 border  rounded-xl text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-slate-100">
                        <div className=" bg-gray-600 rounded w-3/6 h-3/4">
                            <div className="text-center w-full flex-col bg-white flex justify-[space-between] h-full rounded-t rounded-bl rounded-br-3xl font-[Arial] text-xs">
                                <p className="bg-yellow-400 w-full rounded-t px-3">{formatDate(tablaDate.dataNormale)[0]}</p>
                                <div className="flex flex-col items-center font-bold leading-[10px]">
                                    <p className="p-0 m-0  text-lg">{formatDate(tablaDate.dataNormale)[1]}</p>
                                    <p className="p-0 m-0">{formatDate(tablaDate.dataNormale)[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                tablaDataPrezzi.map((elem, i) => {
                    return (
                        <div className={`${(i>9 && viewRows) && "hidden"} w-full h-10 overflow-hidden flex gap-10 items-center`} key={i}>
                            <div className="w-2/4 h-3/4 border-gray-300 border  rounded-xl p-3 text-xl text-center cursor-pointer hover:bg-amber-400 flex items-center justify-center">
                                <p className="text-[15px]">{elem.richiestaCalcoloPrezzo.qtaRichiesta}</p>
                            </div>
                            <div className="w-2/4 h-3/4 border-gray-300 border  rounded-xl p-3 text-xl text-center cursor-pointer hover:bg-amber-400 flex items-center justify-center">
                                <p className="text-[15px]">€ {elem.prezzoRiv}</p></div>
                            <div className="w-2/4 h-3/4 border-gray-300 border  rounded-xl p-3 text-xl text-center cursor-pointer hover:bg-amber-400 flex items-center justify-center ">
                                <p className="text-[15px]">€ {elem.prezzoPubbl}</p></div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default TableCustom