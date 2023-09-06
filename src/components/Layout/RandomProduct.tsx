import { GLOBAL_CONFIG } from "../../_config/global";
const RandomProduct = () =>{
    return<>
        <div className="w-[480px] border border-[2px] rounded p-[3px]">
            <div className="w-full flex flex-row items-center">
                <span className="italic text-[11px] font-bold mx-[2px]">
                    Riflettori puntati su 
                </span>
                <span className="font-bold text-[14px] mx-[2px] text-[purple]">
                    Scritte Adesive Prespaziate da intaglio Verde Acido
                </span>
            </div>
            <div className="w-full flex flex-row" >
                <div className="w-[120px] flex justify-center items-center">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo16w.png`} alt="" className="w-[80px] h-[80px]" />
                </div>
                <div className="w-[360px]">
                    <span className="text-[10px] border-spacing-[2px] text-justify">
                        in PVC vinile polimerico VERDE ACIDO, durata 5-7 anni all'esterno,
                       ideale per etichette resistenti, decorazione autoveicoli, 
                        punti vendita, barche, camion, vetrine, decorazioni esterne
                        permanenti, resistenti al calore ed intemperie.
                    </span>
                </div>

            </div>
            <hr className="bg-[purple] border text-[purple] border-[purple]"/>
            <div className="w-full flex flex-row justify-end items-center" >
                <div className="flex flex-row my-[5px]">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFreccia16.png`} alt="" className="w-[16px] h-[16px]" />
                    <span className="text-[11px]">
                        Vai al dettaglio del Prodotto
                    </span>
                </div>
            </div>

        </div>
    </>
}

export default RandomProduct;