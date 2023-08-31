import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";

type PropsMenuCarrrelo = {
    handleHidden: () => Promise<void>
    idUt: string | undefined
    handleLogin: () => void;
    handleCarrello: () => Promise<void>,
    pdfTemplate: string | undefined;
    prodotto: any | undefined;
}
const MenuCarrelo = ({ handleHidden, idUt, handleLogin, handleCarrello, pdfTemplate, prodotto }: PropsMenuCarrrelo) => {
    const OpenTemplateWindow = (pdfTemplate: string|undefined) => {
        window.open(`https://www.tipografiaformer.it/listino/template/${pdfTemplate}`)
    }

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
                                0,00
                            </td>
                        </tr>
                        <tr>
                            <td >
                                Spedizioni
                            </td>
                            <td className="pr-[10px]">
                                0,00
                            </td>
                        </tr>
                        <tr>
                            <td>
                                IVA (22%)
                            </td>
                            <td className="pr-[10px] ">
                                0,00
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
                                <b >0,00</b>
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    {idUt != undefined && idUt > '0' ?
                        <Link to={'/carrello'} onClick={() => handleHidden()}>
                            <button className="flex gap-[5px] items-center bg-[#d6e03d] rounded-[4px] w-[150px] h-[30px]  mt-[10px] text-[11.5px] font-medium uppercase px-[4px] py-[6px]  hover:bg-[#FCFF33]"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Vai al Carrello</button>
                        </Link>
                        :
                        <button className="flex gap-[5px] items-center bg-[#d6e03d] rounded-[4px] w-[150px] h-[30px]  mt-[10px] text-[11.5px] font-medium uppercase px-[4px] py-[6px]  hover:bg-[#FCFF33]" onClick={handleLogin}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello.png`} width={22} /> Vai al Carrello</button>
                    }


                </center>

            </div>
            <div className="bg-[#f1f1f1] w-full h-[179px] mt-[5px] text-[12px]">
                <h3 className="text-center bg-[#f58220] text-[#fff] uppercase h-[20px]">Riepilogo Lavoro</h3>
                <table className="w-full mt-[10px]">
                    <tbody className="text-end "><tr>
                        <td className="pt-[5px]">
                            Quantità
                        </td>
                        <td className="pt-[5px] pr-[10px]">
                            <b>100</b>
                        </td>
                    </tr>
                        <tr>
                            <td>
                                Consegna
                            </td>
                            <td className="pr-[10px]">
                                <b>12 lug</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Prezzo Netto
                            </td>
                            <td className="pr-[10px]">
                                <b>12,00</b>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="ps-[2px] pe-[10px]">
                                <hr className="border border-[#f58220] mt-[10px] mb-[10px]" />
                            </td>
                        </tr>
                    </tbody></table>
                <center>
                    {idUt != undefined && idUt > '0' ?
                        <Link to={"/carrello"} onClick={() => { localStorage.setItem('stp', '1'); handleCarrello() }}>
                            <button  className="flex gap-2  w-[160px] h-[30px] bg-[#f58220] rounded-[4px]  text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                        </Link>
                        :
                        <button onClick={handleLogin} className="flex gap-2  w-[160px] h-[30px] bg-[#f58220] rounded-[4px]  text-[12px] text-[#fff] font-bold uppercase hover:bg-[#E5781B] px-[4px] py-[4px] items-center"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/ico1Click.png`} width={22} />Compralo subito</button>
                    }

                </center>
            </div>
            <div className="text-[12px] mt-[15px] bg-[#f1f1f1]">
                <h3 className="text-center bg-[#009ec9] uppercase text-[#fff] h-[20px] mb-[5px]">Info sul Prodotto</h3>
                <center>
                    <a className="bg-[#009ec9] w-[150px] mt-[10px] flex h-[30px] items-center justify-center gap-[3px] uppercase rounded text-[#fff] font-semibold" 
                        onClick={()=>OpenTemplateWindow(pdfTemplate)}
                    >
                        <img width={22} src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePdf.png`} />
                        Scarica Template
                    </a> 
                    <Link 
                        to={`/richiedi-un-campione-gratuito`}
                        state={prodotto}
                        className="bg-[#009ec9] w-[150px] mt-[10px] flex h-[30px] items-center justify-center gap-[2px] uppercase rounded text-[#fff] font-semibold">
                        <img width={22} src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCampGratuito.png`} /> 
                        Campione Gratuito
                    </Link>
                </center>
                <br />
            </div>
        </>
    )
}

export default MenuCarrelo