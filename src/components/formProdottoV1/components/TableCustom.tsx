import React from 'react'
import { SelectRow, TablePrezzi } from '../interface/table'
import { TableDate } from '../interface/tableDate'
import { PrezzoValue } from '../interface/showColumPrezzo'
interface Props {
    tablaDataPrezzi: TablePrezzi[]
    tablaDate: TableDate | undefined
    viewRows: Boolean,
    selectRow: SelectRow,
    handleChangeRowSelect: (conditional: boolean, value: number, quantity: number) => void
    radioIva?: number;
    showColumTable: PrezzoValue | undefined;
    showTablePreez: boolean | undefined
}
const TableCustom = ({ tablaDataPrezzi, tablaDate, viewRows, selectRow, handleChangeRowSelect, radioIva, showColumTable,showTablePreez }: Props) => {
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
    const numberFormat = (value: number) => {

        if (Number.isInteger(value)) {
            var numberResult = value.toFixed(2);
            var formatNumber = new Intl.NumberFormat('es', { minimumFractionDigits: 2, maximumFractionDigits: 4, });
            var numeroResultFormat = formatNumber.format(Number(numberResult));
            return numeroResultFormat
        }
        const valueConditional = radioIva
        let numberminimun = 2
        if (valueConditional === 2) {
            numberminimun = 4
        }
        var formatNumber = new Intl.NumberFormat('es', { minimumFractionDigits: numberminimun, maximumFractionDigits: 4, });
        var numeroResultFormat = formatNumber.format(Number(value));
        return numeroResultFormat
    }
    const formatQuantity = (value: number) => {

        return value.toLocaleString('es', { useGrouping: true });
    }
    const formatValue = (value: number, quantity?: number) => {
        if (radioIva === 2 && quantity != null) {
            const valueC = value * quantity
            if (valueC <= 1000) {
                return `€ ${numberFormat(value)}`
            } else {
                return "-"
            }
        }
        if (value <= 1000) return `€ ${numberFormat(value)}`
        return "-"
    }
    const viewSelectQuantity = (value: number) => {
        if (value === selectRow.quantity) return "bg-[#d6e03d]"
        return "bg-[#eef3f1]"
    }
    const viewSelectPrice = (conditional: boolean, value: number, element: number) => {
        if (value === selectRow.value && conditional === selectRow.conditional) return "bg-[#d6e03d]"
        if (conditional) return "bg-[#d4e8df]"
        const valueValidation = formatValue(element)
        if (valueValidation === "-") return ""
        return "bg-[#eef3f1]"

    }
    return (
        <>
            {tablaDate &&
                <div className="  flex gap-2 mb-[3px] overflow-hidden " >
                    <div className="w-[104px] text-xs text-center  flex items-end justify-center">Quantità</div>
                    {showColumTable?.prezzoFazt ?
                        <div className="w-[223px] h-[70px]  py-1   rounded text-xl text-center capitalize flex justify-center  bg-[#eef3f1]">
                            <div className=" bg-gray-400 rounded  w-[63px] h-[95%]">
                                <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                    <p className="bg-[#d6e03d]  w-full rounded-t font-medium">{formatDate(tablaDate.dataFast)[0]}</p>
                                    <div className="flex flex-col items-center leading-[10px]">
                                        <p className="p-0 m-0  text-lg font-bold ">{formatDate(tablaDate.dataFast)[1]}</p>
                                        <p className="p-0 m-0 text-[10px]">{formatDate(tablaDate.dataFast)[2]}</p>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }
                    {showColumTable?.prezzoNorm ?
                        <div className="w-[225px] h-[70px]  py-1 m-0 rounded text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-[#d4e8df]">
                            <div className=" bg-gray-400 rounded w-[63px] h-[95%]">
                                <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                    <p className="bg-[#d6e03d] w-full rounded-t  font-medium">{formatDate(tablaDate.dataNormale)[0]}</p>
                                    <div className="flex flex-col items-center  leading-[10px]">
                                        <p className="p-0 m-0  text-lg font-bold">{formatDate(tablaDate.dataNormale)[1]}</p>
                                        <p className="p-0 m-0 text-[10px]">{formatDate(tablaDate.dataNormale)[2]}</p>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }
                    {showColumTable?.prezzoSlow ?
                        <div className="w-[225px] h-[70px]  py-1 m-0 rounded text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-[#a4d9d1]">
                            <div className=" bg-gray-400 rounded w-[63px] h-[95%]">
                                <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                    <p className="bg-[#d6e03d] w-full rounded-t  font-medium">{formatDate(tablaDate.dataSlow)[0]}</p>
                                    <div className="flex flex-col items-center  leading-[10px]">
                                        <p className="p-0 m-0  text-lg font-bold">{formatDate(tablaDate.dataSlow)[1]}</p>
                                        <p className="p-0 m-0 text-[10px]">{formatDate(tablaDate.dataSlow)[2]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                </div>
            }

            {
                showTablePreez == false?
                    tablaDataPrezzi.map((elem, i) => {
                        return (
                            <div className={`  ${(i > 9 && viewRows) && "hidden"} w-full overflow-hidden flex gap-1 items-center `} key={i}>
                                <div className={`${viewSelectQuantity(elem.richiestaCalcoloPrezzo.qtaRichiesta)} w-[104px] h-[32.8px]  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-end mb-[1.5px]`}>
                                    <p className=" text-end text-[14px]">{formatQuantity(elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                                </div>
                                {showColumTable?.prezzoFazt ?
                                    <div onClick={() => handleChangeRowSelect(false, i, elem.richiestaCalcoloPrezzo.qtaRichiesta)} className={`${viewSelectPrice(false, i, elem.prezzoRiv)} w-[228px] h-[32.8px] rounded  px-3  font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center`}>
                                        <p className="text-[14px]">{formatValue(elem.prezzoRiv, elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                                    </div> : null
                                }
                                {showColumTable?.prezzoNorm ?
                                    <div onClick={() => handleChangeRowSelect(true, i, elem.richiestaCalcoloPrezzo.qtaRichiesta)} className={`${viewSelectPrice(true, i, elem.prezzoRiv)} w-[232px] h-[32.8px]  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center `}>
                                        <p className="text-[14px]">€ {numberFormat(elem.prezzoPubbl)}</p>
                                    </div> : null
                                }
                                {showColumTable?.prezzoSlow ?
                                    <div onClick={() => handleChangeRowSelect(false, i, elem.richiestaCalcoloPrezzo.qtaRichiesta)} className={`${viewSelectPrice(true, i, elem.prezzoRiv)} w-[232px] h-[32.8px]  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center `}>
                                        <p className="text-[14px]">€ {numberFormat(elem.prezzoConsigliatoPubbl)}</p>
                                    </div> : null
                                }

                            </div>
                        )
                    }) : <div className={`  w-full h-10 overflow-hidden flex gap-1 items-center`} >
                        <div className={`w-[104px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-end bg-[#eef3f1]`}>
                            <p className=" text-end">-</p>
                        </div>
                        {showColumTable?.prezzoFazt ?
                            <div className={` w-[228px] h-[32.8px] rounded  px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#eef3f1]`}>
                                <p className="">-</p>
                            </div> : null
                        }
                        {showColumTable?.prezzoNorm ?
                            <div className={`w-[232px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#d4e8df]`}>
                                <p className="">-</p>
                            </div> : null
                        }
                        {showColumTable?.prezzoSlow ?
                            <div className={`w-[232px] h-[32.8px]  rounded px-3 py-[19px] font-medium text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center bg-[#a4d9d1]`}>
                                <p className="">-</p>
                            </div>:null
                        }

                    </div>

            }
        </>

    )
}


export default TableCustom