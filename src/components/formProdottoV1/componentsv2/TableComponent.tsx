import { FormatNumber0_000, numberFormat } from "../../../Helpers/formatNumber";
import { InitialValuesProdotto } from "../../formProdotto/interfaces/prodotto";
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";
import { PrezzoValue } from "../interface/showColumPrezzo";
import { TablePrezzi } from "../interface/table";
import { TableDate } from "../interface/tableDate";

type TableComponentProps = {
    tablaDate: TableDate | undefined;
    tablaDataPrezzi: TablePrezzi[];
    valueRadio: string | number
    viewRow: boolean;
    calcolaTuto: DataGetCalcolaTuto | undefined;
    handlePrezzoTable: (code: string, qtaZelezionata: number, prezzo: number,i: number,dateConsegna: Date) => Promise<void>;
    showColumTable: PrezzoValue | undefined;
    showTablePreez: boolean;
    rowSelectedIva: number | undefined;
    
}

const TableComponent = ({ tablaDate, tablaDataPrezzi, valueRadio, viewRow, calcolaTuto, handlePrezzoTable, showColumTable, showTablePreez,rowSelectedIva }: TableComponentProps) => {

    const formatDate = (value: Date) => {

        if (value != undefined) {
            const date = new Date(value);
            const valueReturn = date.toLocaleDateString('it-IT', { weekday: 'long', month: 'long', day: 'numeric' })
            const valueConvert = String(valueReturn).split(" ");
            if (Number(valueConvert[1]) <= 9) {
                //console.log(valueConvert[1])
                valueConvert[1] = "0" + valueConvert[1]
            }
            //debugger
            return valueConvert;
        }
        return ["", 0, ""]
    }
    var promo = false;

    const handleFormatPrezzo = (prezzo: number) => {
        if (prezzo != 0) {
            
            switch (valueRadio) {
                case "2":
                    return "€ " + numberFormat(prezzo, "it-IT", 4, 4)
                default:
                    return "€ " +numberFormat(prezzo)
            }
        }else{
            return '-'
        }

    }

    const handleSelectedPreezzoFast = (prezzoRiv:number,qtaRichiesta: number) => {
        if(calcolaTuto?.prezzoCalcolatoNetto == prezzoRiv && calcolaTuto.code == "F" && qtaRichiesta == calcolaTuto.qta){return true}
        if(rowSelectedIva == prezzoRiv && calcolaTuto?.code == "F" && qtaRichiesta == calcolaTuto.qta){return true}
    }

    const handleSelectNormale = (prezzoPubbl:number,i:number,qtaRichiesta: number) => {
        if(calcolaTuto?.prezzoCalcolatoNetto == prezzoPubbl && calcolaTuto.code == "N" && qtaRichiesta == calcolaTuto.qta) {return true}
        if (rowSelectedIva == prezzoPubbl && calcolaTuto?.code == "N" && qtaRichiesta == calcolaTuto.qta) {return true} 
        if(i == 0 && calcolaTuto?.code == "N" && rowSelectedIva == undefined && valueRadio != 0 && qtaRichiesta == calcolaTuto.qta){return true}
    }

    const handleSelectSlow = (prezzoConsigliatoPubbl:number,qtaRichiesta: number) => {
        if(calcolaTuto?.prezzoCalcolatoNetto == prezzoConsigliatoPubbl && calcolaTuto.code == "S" && qtaRichiesta == calcolaTuto.qta){return true} 
        if(rowSelectedIva == prezzoConsigliatoPubbl && calcolaTuto?.code == "S" && qtaRichiesta == calcolaTuto.qta){return true}
    }

    return (
        <div className=" flex  flex-col gap-">
            {tablaDate &&
                <div className="flex gap-1 overflow-hidden mb-[5px]" >
                    <div className="w-[104px] h-[70px] text-xs text-center  flex items-end justify-center">Quantità</div>
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
                        </div>
                        : null
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
                        </div>
                        : null
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
            {showTablePreez ? tablaDataPrezzi.map((elem, i) => {
                return (
                    <div key={i} className={`${i > 9 && viewRow ? "hidden" : ''} w-full overflow-hidden flex gap-[2px] items-center justify-center`}>
                        <div className={` w-[104px] h-[40px] mb-[2px] ${calcolaTuto?.qta == elem.richiestaCalcoloPrezzo.qtaRichiesta ? 'bg-[#d6e03d] ' : 'bg-[#f1f1f1]'}  rounded px-3 font-semibold text-center fcursor-pointer  flex items-center justify-end`}>
                            <p className=" text-end text-[14px]">{FormatNumber0_000(elem.richiestaCalcoloPrezzo.qtaRichiesta)}</p>
                        </div>
                        {showColumTable?.prezzoFazt ?
                            <button onClick={() => handlePrezzoTable("F", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoRiv,i,tablaDate!.dataFast)} className={`${handleSelectedPreezzoFast(elem.prezzoRiv,elem.richiestaCalcoloPrezzo.qtaRichiesta)  ? 'bg-[#d6e03d]' : 'bg-[#eef3f1]'}  w-[232px] h-[40px]  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className="text-[14px]">{handleFormatPrezzo(elem.prezzoRiv)}</p>
                            </button> : null
                        }
                        {showColumTable?.prezzoNorm ?
                            <button onClick={() => handlePrezzoTable("N", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoPubbl,i,tablaDate!.dataNormale)} className={`${handleSelectNormale(elem.prezzoPubbl,i,elem.richiestaCalcoloPrezzo.qtaRichiesta) ? 'bg-[#d6e03d]' : 'bg-[#d4e8df]'}  w-[232px] h-[40px]  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className="text-[14px]"> {handleFormatPrezzo(elem.prezzoPubbl)}</p>
                            </button> : null
                        }
                        {showColumTable?.prezzoSlow ?
                            <button onClick={() => handlePrezzoTable("S", elem.richiestaCalcoloPrezzo.qtaRichiesta, elem.prezzoConsigliatoPubbl,i,tablaDate!.dataSlow)} className={`${ handleSelectSlow(elem.prezzoConsigliatoPubbl,elem.richiestaCalcoloPrezzo.qtaRichiesta)? 'bg-[#d6e03d]' : 'bg-[#a4d9d1]'} w-[232px] ${promo ? 'h-[45px]' : 'h-[40px]'}  rounded px-3 font-semibold text-center cursor-pointer hover:bg-[#d6e03d] mb-[2px] flex items-center justify-center `}>
                                <p className="text-[14px]"> {handleFormatPrezzo(elem.prezzoConsigliatoPubbl)}</p>
                            </button> : null
                        }

                    </div>
                )
            })
                :
                <div className={`  w-full h-10 overflow-hidden flex gap-1 items-center`} >
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
        </div>
    )
}

export default TableComponent