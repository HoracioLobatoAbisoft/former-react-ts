import React, { useEffect } from 'react'
import { SelectRow, TablePrezzi } from '../interface/table'
import { TableDate } from '../interface/tableDate'
import { PrezzoValue } from '../interface/showColumPrezzo'
import { InitialValuesProdotto } from '../../formProdotto/interfaces/prodotto'
import { DataGetCalcolaTuto } from '../interface/calcolaTuto'
import { DateFormatDDMM } from '../../../Helpers/formatDates'
interface Props {
    tablaDataPrezzi: TablePrezzi[]
    tablaDate: TableDate | undefined
    viewRows: Boolean,
    selectRow: {},
    handleChangeRowSelect: (conditional: boolean, value: number, quantity: number) => void
    radioIva?: number;
    showColumTable: PrezzoValue | undefined;
    showTablePreez: boolean ;
    senderComandargument: string;
    setSenderComandargument: React.Dispatch<React.SetStateAction<string>>
    handleCalcolaTuto: (code: string, QtaSelezionata: number, prezoSelezionata: number, i: number, dateConsegna: Date | undefined) => void
    handleSelectDate: (code: string, date1: Date | undefined, date2: Date | undefined) => void
    alertMassimo: string;
    setTablaDataPrezzi: React.Dispatch<React.SetStateAction<TablePrezzi[]>>;
    initialState: InitialValuesProdotto;
    qtaSelezinata: number;
    calcolaTuto: DataGetCalcolaTuto | undefined;
    prezzoActive: number;
}
const TableCustom = ({ tablaDataPrezzi, tablaDate, viewRows, selectRow, handleChangeRowSelect, radioIva, showColumTable, showTablePreez, senderComandargument, setSenderComandargument, handleCalcolaTuto, handleSelectDate, alertMassimo, initialState, setTablaDataPrezzi, qtaSelezinata, calcolaTuto, prezzoActive, }: Props) => {
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
            var formatNumber = new Intl.NumberFormat('it', { minimumFractionDigits: 2, maximumFractionDigits: 4, });
            var numeroResultFormat = formatNumber.format(Number(numberResult));
            return numeroResultFormat
        }
        const valueConditional = radioIva
        let numberminimun = 2
        if (valueConditional === 2) {
            numberminimun = 4
        }
        var formatNumber = new Intl.NumberFormat('it', { minimumFractionDigits: numberminimun, maximumFractionDigits: 4, });
        var numeroResultFormat = formatNumber.format(Number(value));
        return numeroResultFormat
    }
    const formatQuantity = (value: number) => {

        return value.toLocaleString('es', { useGrouping: true });
    }
    const formatValue = (value: number, quantity?: number) => {
        if (radioIva === 2 && quantity != null) {
            const valueC = value * quantity
            if (valueC === 0) {
                return "-"
            } else {
                return `€ ${numberFormat(value)}`
            }
        }
        if (value === 0) return "-"
        return `€ ${numberFormat(value)}`
    }

    const bgColor_ = ( bgColor:string,value: number, quantity?: number)=>{
        if (radioIva === 2 && quantity != null) {
            const valueC = value * quantity
            if (valueC === 0) {
                return ""
            } else {
                return bgColor
            }
        }
        if (value === 0) return ""
        return bgColor
    }

    const selectPrecio = (value: number, quantity?: number) => {
        if (radioIva === 2 && quantity != null) {
            const valueC = value * quantity
            if (valueC === 0) {
                return false
            } else {
                return true
            }
        }
        if (value === 0) return false
        return true
    }

    const handlePrimary = (i: number,qta: number,row:string,prezzo: number,data: Date | undefined) =>{
        handleChangeRowSelect(false, i, qta); 
        handleCalcolaTuto(row, qta, prezzo, i, data); 
        handleSelectDate(row, tablaDate?.dataFast, tablaDate?.dataFastProduzione);
    }

    const promo = tablaDataPrezzi.some(x => x.prezzoPromo > 0);
    // handleChangeRowSelect(true, i, elem.richiestaCalcoloPrezzo.qtaRichiesta); handleCalcolaTuto("N", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoPubbl, i, tablaDate?.dataNormale); handleSelectDate("N", tablaDate?.dataNormale, tablaDate?.dataNormaleProduzione)
    return (
        <>
            {tablaDate &&
                <div className="  flex gap-2 mb-[3px] overflow-hidden " >
                    <div className="w-[104px] text-xs text-center  flex items-end justify-center">Quantità</div>
                    {showColumTable?.prezzoFazt ?
                        <div className={`w-[223px] ${promo ? "h-[90px]" : 'h-[70px]'}    py-1   rounded text-xl text-center capitalize flex justify-center items-center bg-[#eef3f1]`}>
                            <div className={` bg-gray-400 rounded  w-[63px] ${promo ? 'h-[75%]' : "h-[95%]"} `}>
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
                        <div className={`w-[225px] ${promo ? "h-[90px]" : 'h-[70px]'}  py-1 m-0 rounded text-xl text-center cursor-pointer hover: capitalize flex justify-center items-center bg-[#d4e8df]`}>
                            <div className={` bg-gray-400 rounded w-[63px] ${promo ? 'h-[75%]' : "h-[95%]"} `}>
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
                        <div className='w-[225px]  '>
                            <div className={` ${promo ? "h-[70px]" : 'h-full'}  py-1  m-0 rounded-t text-xl text-center cursor-pointer hover: capitalize flex gap-[3px]  items-center bg-[#a4d9d1] flex-col`}>
                                <div className={` bg-gray-400 rounded w-[63px] ${promo ? 'h-[95%]' : 'h-[95%]'} `}>
                                    <div className="text-center w-full flex-col bg-[#f1f1f1] flex  h-full rounded-t rounded-bl rounded-br-3xl  text-xs">
                                        <p className={`${promo ? 'bg-[#009ec9] text-white font-normal' : 'bg-[#d6e03d] font-medium'} w-full rounded-t  `}>{formatDate(tablaDate.dataSlow)[0]}</p>
                                        <div className="flex flex-col items-center  leading-[10px]">
                                            <p className="p-0 m-0  text-lg font-bold">{formatDate(tablaDate.dataSlow)[1]}</p>
                                            <p className="p-0 m-0 text-[10px]">{formatDate(tablaDate.dataSlow)[2]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {promo &&
                                <div className='text-[11px] rounded p-[2px] text-center bg-[#009ec9] text-white  m-0 '><span className=''>Promo</span></div>
                            }

                        </div>
                        : null
                    }
                </div>
            }
            {
                showTablePreez == true ?
                    tablaDataPrezzi.map((elem, i) => {
                        return (
                            <div className={`  ${(i > 9 && viewRows) && "hidden"} w-full overflow-hidden flex gap-1 items-center `} key={i}>
                                <div className={` w-[104px] ${promo ? 'h-[45px]' : 'h-[32.8px]'} ${qtaSelezinata == elem.richiestaCalcoloPrezzo.qtaRichiesta ? 'bg-[#d6e03d] ' : 'bg-[#f1f1f1]'}  rounded px-3 font-semibold text-center fcursor-pointer hover:bg-[#d6e03d] flex items-center justify-end`} >
                                    <p className=" text-end text-[14px]">{formatQuantity(elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                                </div>
                                {showColumTable?.prezzoFazt ?
                                    <div onClick={() => {selectPrecio(elem.prezzoRiv, elem.richiestaCalcoloPrezzo.qtaRichiesta)?handlePrimary(i,elem.richiestaCalcoloPrezzo.qtaRichiesta,"F",elem.prezzoRiv,tablaDate?.dataFast) : null  }} className={` 
                                    ${qtaSelezinata == elem.richiestaCalcoloPrezzo.qtaRichiesta && prezzoActive == elem.prezzoRiv ? 'bg-[#d6e03d]' : bgColor_('bg-[#eef3f1]',elem.prezzoRiv, elem.richiestaCalcoloPrezzo.qtaRichiesta,)} w-[228px] ${promo ? 'h-[45px]' : 'h-[32.8px]'} rounded  px-3  font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex items-center justify-center mb-[2px]`}>
                                        <p className="text-[14px]">{formatValue(elem.prezzoRiv, elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                                    </div> : null
                                }
                                {showColumTable?.prezzoNorm ?
                                    <div onClick={() => {selectPrecio(elem.prezzoPubbl, elem.richiestaCalcoloPrezzo.qtaRichiesta) ?handlePrimary(i,elem.richiestaCalcoloPrezzo.qtaRichiesta,"N",elem.prezzoPubbl,tablaDate?.dataNormale) : null  }} className={`${qtaSelezinata == elem.richiestaCalcoloPrezzo.qtaRichiesta && prezzoActive == elem.prezzoPubbl ? 'bg-[#d6e03d]' : bgColor_('bg-[#d4e8df]',elem.prezzoPubbl, elem.richiestaCalcoloPrezzo.qtaRichiesta)}  w-[232px] ${promo ? 'h-[45px]' : 'h-[32.8px]'}  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                        <p className="text-[14px]">{formatValue(elem.prezzoPubbl, elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                                    </div> : null
                                }
                                {showColumTable?.prezzoSlow ?
                                    <div onClick={() => { handleChangeRowSelect(false, i, elem.richiestaCalcoloPrezzo.qtaRichiesta); handleCalcolaTuto("S", elem.richiestaCalcoloPrezzo.qtaRichiesta, promo ? elem.prezzoPromo : elem.prezzoConsigliatoPubbl, i, tablaDate?.dataSlow); handleSelectDate("S", tablaDate?.dataSlow, tablaDate?.dataSlowProduzione) }} className={`${qtaSelezinata == elem.richiestaCalcoloPrezzo.qtaRichiesta && prezzoActive == elem.prezzoConsigliatoPubbl || qtaSelezinata == elem.richiestaCalcoloPrezzo.qtaRichiesta && prezzoActive == elem.prezzoPromo ? 'bg-[#d6e03d]' : 'bg-[#a4d9d1]'} w-[232px] ${promo ? 'h-[45px]' : 'h-[32.8px]'}   rounded px-3 mb-[2px] font-semibold text-center cursor-pointer hover:bg-[#d6e03d] flex flex-col items-center justify-center `}>
                                        <p className={`text-[14px] ${promo ? 'line-through' : ''}`}>€ {numberFormat(elem.prezzoConsigliatoPubbl)}</p>
                                        {promo &&
                                            <p className="text-[14px] text-[#009ec9]">€ {numberFormat(elem.prezzoPromo)}</p>
                                        }
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
                            </div> : null
                        }

                    </div>

            }
        </>

    )
}


export default TableCustom