import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";
import { numberFormat } from "../../../Helpers/formatNumber";
import { DataGetDescrizioniDinamica } from "../interface/DescrizioneDinamica";
import { DataGetTotaleProvisorio } from "../../carrello/Interfaces/totaleProvvisorio";
import { formatNumber } from "../../../services/NumberFormat";

type PropsMenuCarrrelo = {
    handleHidden: (operation: enOperationFrame, uri?: string | undefined, nav?: string) => void;
    idUt: string | undefined
    handleLogin: () => void;
    handleCarrello: () => Promise<void>;
    handleCompraloSubito: () => Promise<void>;
    calcolaTuto: DataGetCalcolaTuto | undefined;
    qtaSelezinata: number;
    menuDateConsegna: string | undefined,
    pdfTemplate: string | undefined;
    prodotto: any | undefined;
    showTablePreez: boolean;
    descrizioneDinamica: DataGetDescrizioniDinamica | undefined;
    TotaleProvisorio: DataGetTotaleProvisorio | undefined;
    showTemplate: boolean | undefined;
    template3D: string | undefined;
    handleCampioneGratutito: () => void
}

const MenuCarrelo = ({ handleHidden, idUt, handleLogin, handleCarrello, pdfTemplate, prodotto, handleCompraloSubito, calcolaTuto, qtaSelezinata, menuDateConsegna, showTablePreez, descrizioneDinamica, TotaleProvisorio, showTemplate, template3D,handleCampioneGratutito }: PropsMenuCarrrelo) => {
    const OpenTemplateWindow = (pdfTemplate: string | undefined) => {
        window.open(`https://www.tipografiaformer.it/listino/template/${pdfTemplate}`)
    }
    const openTemplate3d = (template3D: string | undefined) => {
        window.open(`https://www.tipografiaformer.it/listino/template/${template3D}`)

    }

    const scontoLocal = localStorage.getItem('sc')

    return (
        <>
            <div className="bg-[#f1f1f1] w-full h-[200px] text-[12px] ">
                <h3 className="bg-[#d6e03d] text-center uppercase font-normal tracking-[.5px] mb-[5px h-[20px]">Riepilogo Carrello</h3>
                <table className="w-full mt-[10px]">
                    <tbody className="text-end ">
                        <tr >
                            <td className="pt-[5px]">
                                Totale Netto
                            </td>
                            <td className="pt-[5px] pr-[10px]">
                                {TotaleProvisorio ? formatNumber(TotaleProvisorio.prezzoTotaleOrdini) : "0,00"}
                            </td>
                        </tr>
                        {scontoLocal ?
                            <>
                                <tr>
                                    <td className="px-[10px]">
                                        Totale Sconto:
                                    </td>
                                    <td className="px-[10px] text-end text-[red] font-semibold"> - € {TotaleProvisorio ? formatNumber(Number(scontoLocal)) : "0,00"}</td>
                                </tr>
                                <tr>
                                    <td className="px-[10px]">
                                        Totale Netto:
                                    </td>
                                    <td className="px-[10px] text-end">€ {TotaleProvisorio ? formatNumber(TotaleProvisorio.totalNeto) : "0,00"}</td>
                                </tr>
                            </> : null
                        }
                        <tr>
                            <td >
                                Spedizioni
                            </td>
                            <td className="pr-[10px]">
                                {TotaleProvisorio ? formatNumber(TotaleProvisorio.spedizioni) : "0,00"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                IVA (22%)
                            </td>
                            <td className="pr-[10px] ">
                                {TotaleProvisorio ? formatNumber(TotaleProvisorio.iva) : "0,00"}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="ps-[2px] pe-[10px]">
                                <hr className="border border-[#d6e03d] mt-[10px] mb-[10px]" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>TOTALE</b>
                            </td>
                            <td className="pr-[10px] ">
                                <b >{TotaleProvisorio ? formatNumber(TotaleProvisorio.totaleOridini) : "00,00"}</b>
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    {idUt != undefined && idUt > '0' ?
                        //<Link to={'/carrello'} onClick={() => handleHidden(enOperationFrame.hidden)}>
                        <button className="flex gap-[5px]  items-center bg-[#d6e03d] rounded-[4px] w-[150px] h-[30px]  mt-[10px] text-[11.5px] font-medium uppercase px-[4px] py-[6px]  hover:bg-[#FCFF33]" onClick={() => handleHidden(enOperationFrame.reliadUrl, 'carrello')}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Vai al Carrello</button>
                        //</Link>
                        :
                        <button className="flex gap-[5px] items-center bg-[#d6e03d] rounded-[4px] w-[150px] h-[30px]  mt-[10px] text-[11.5px] font-medium uppercase px-[4px] py-[6px]  hover:bg-[#FCFF33]" onClick={() => handleHidden(enOperationFrame.redirectLogin)}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Vai al Carrello</button>
                    }
                </center>
            </div>
            <div className="bg-[#f1f1f1] w-full h-[179px] mt-[5px] text-[12px]">
                <h3 className="text-center bg-[#f58220] text-[#fff] uppercase h-[20px]">Riepilogo Lavoro</h3>
                <table className="w-full mt-[10px]">
                    <tbody className="text-end "><tr>
                        <td className="pt-[5px]">
                            {descrizioneDinamica?.idReparto == 2 ? 'Copie' : 'Quantità'}
                        </td>
                        <td className="pt-[5px] pr-[10px]">
                            <b>{showTablePreez ? numberFormat(calcolaTuto?.qta, 'it-IT', 0, 0) : "0"}</b>
                        </td>
                    </tr>
                        <tr>
                            <td>
                                Consegna
                            </td>
                            <td className="pr-[10px]">
                                <b>{showTablePreez ? menuDateConsegna : ' '}</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Prezzo Netto
                            </td>
                            <td className="pr-[10px]">
                                <b>{showTablePreez ? numberFormat(calcolaTuto?.prezzoCalcolatoNetto) : '-'}</b>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="ps-[2px] pe-[10px]">
                                <hr className="border border-[#f58220] mt-[10px] mb-[10px]" />
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    {/* {idUt != undefined && idUt > '0' ?
                        // <Link to={"/carrello"} onClick={() => { localStorage.setItem('stp', '1'); handleCarrello() }}>
                        <button className="flex gap-2  w-[160px] h-[30px] bg-[#f58220] rounded-[4px]  text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center" onClick={() => handleCompraloSubito()}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                        // </Link>
                        :
                        <button onClick={handleLogin} className="flex gap-2  w-[160px] h-[30px] bg-[#f58220] rounded-[4px]  text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                    } */}

                </center>
            </div>
            {showTemplate ?
                <div className="text-[12px] mt-[15px] bg-[#f1f1f1]">
                    <h3 className="text-center bg-[#009ec9] uppercase text-[#fff] h-[20px] mb-[5px]">Info sul Prodotto</h3>
                    <center>
                        <a className="bg-[#009ec9] w-[150px] mt-[10px] flex h-[30px] items-center justify-center gap-[3px] uppercase rounded text-[#fff] font-semibold cursor-pointer"
                            onClick={() => OpenTemplateWindow(pdfTemplate)}
                        >
                            <img width={22} src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePdf.png`} />
                            Scarica Template
                        </a>
                        {(template3D != undefined && template3D.length > 0) ?
                            <button
                                onClick={() => openTemplate3d(template3D)}
                                className="bg-[#009ec9] w-[150px] mt-[10px] flex h-[30px] items-center pl-[6px] gap-[2px] uppercase rounded text-[#fff] font-semibold">
                                <img width={22} src={`${GLOBAL_CONFIG.IMG_IP}/img/ico3D.png`} />
                                Modello 3D
                            </button> : null
                        }

                        <button
                            // to={`/richiedi-un-campione-gratuito`}
                            //state={prodotto}
                            onClick={() => handleCampioneGratutito()}
                            className="bg-[#009ec9] w-[150px] mt-[10px] flex h-[30px] items-center justify-center gap-[2px] uppercase rounded text-[#fff] font-semibold">
                            <img width={22} src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCampGratuito.png`} />
                            Campione Gratuito
                        </button>

                    </center>
                    <br />
                </div>
                : null
            }

        </>
    )
}

export default MenuCarrelo