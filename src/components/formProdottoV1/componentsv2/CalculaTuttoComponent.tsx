import { numberFormat } from "../../../Helpers/formatNumber";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { DataResponseGetUtente } from "../../../interface/Utente"
import { DataGetCalcolaTuto } from "../interface/calcolaTuto";

type Props = {
    utenteData: DataResponseGetUtente | undefined;
    calcolaTuto: DataGetCalcolaTuto | undefined;
    handleDonwloadPDF: () => void;
    showTablePreez: boolean;
}

export const CalculaTuttoComponent = ({ utenteData, calcolaTuto, handleDonwloadPDF, showTablePreez }: Props) => {
    return (
        <div className="bg-[#d6e03d] w-full p-[10px] h-[92px] flex flex-col justify-between mt-1 gap-1">
            <div className="flex justify-between">
                <p className="text-[10px] flex items-center gap-1">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo.png`} width="20" height="25" />
                    PREZZO {utenteData?.tipo !== 1 ? (
                        <>
                            RISERVATO A:<b className="text-[13px] uppercase">{utenteData?.nominativo}</b>
                        </>
                    ) : ''}
                </p>
                <p className="text-[22px] font-bold"> {showTablePreez ? "€" + numberFormat(calcolaTuto?.prezzoCalcolatoNetto) + " + iva" : "-"} </p>
            </div>
            <div className=" flex justify-between">
                <div className="hidden">
                </div>
                <a className="flex gap-1 text-[12px] cursor-pointer" onClick={() => { handleDonwloadPDF() }}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFileTypePDF.png`} width={20} height={20} /> Preventivo PDF  ↓</a>
                <p className="text-[11px]">Prezzo consigliato al pubblico min. <b> {showTablePreez ? "€ " + numberFormat(calcolaTuto?.prezzoPubblico) + " + iva" : "-"} </b>  (+ grafica € <b>{numberFormat(calcolaTuto?.graficaPerFacciata)}</b> a facciata)</p>

            </div>
            {calcolaTuto?.idMacchinarioStampa ?
                <div className="flex text-[11px] justify-end"><img src={GLOBAL_CONFIG.IMG_IP + "/img/icoStampaInDigitale26.png"} /> * Il prodotto verrà realizzato con tecnologia <b>Digital Print</b></div> : null
            }

        </div>
    )
}
