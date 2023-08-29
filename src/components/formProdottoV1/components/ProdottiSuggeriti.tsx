import { GLOBAL_CONFIG } from "../../../_config/global"
import { enOperationFrame } from "../../../enHelpers/enOperationFrame"
import { DataGetProduttoConsigliato } from "../interface/prodottoConsigliato"

type ProddotiSugeritiProps = {
    prodottoConsigliato: DataGetProduttoConsigliato
}

const ProdottiSuggeriti = ({ prodottoConsigliato }: ProddotiSugeritiProps) => {

    const handleRedirect = () => {
        window.parent.postMessage({ operation: enOperationFrame.reliadUrl, uri: prodottoConsigliato.url }, GLOBAL_CONFIG.IMG_IP);
    }

    return (
        <div className="flex gap-2 p-[8px] border-[3px] border-[#d3d3d3] rounded-[5px] hover:border-[#d6e03d] mb-[10px]">
            <img src={`https://tipografiaformer.it/listino/img/${prodottoConsigliato.getImgFormato}`} className="w-[128px] h-[128px]" />
            <div className="text-[11px] ">
                <a href="" className="text-[14px] font-bold ">{prodottoConsigliato.carta}</a>
                <p className="p-[1px]">Categoria: {prodottoConsigliato.categoria}</p>
                <p className="p-[1px]">Formato: {prodottoConsigliato.formato}</p>
                <p className="p-[1px]">Carta: {prodottoConsigliato.carta}</p>
                <p className="p-[1px]">Colori: {prodottoConsigliato.colori}</p>
                <p className="py-[5px] italic">
                    {prodottoConsigliato.descrSito}
                </p>
                {prodottoConsigliato.existPromo ?
                    <div className="border-[2px] border-[#009ec9] p-[10px] rounded-[3px] w-3/4">
                        <p className="flex items-center"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo20.png`} /> <b className="bg-[#009ec9] text-white py-0 px-[3px] font-[400]  me-1 rounded" >Promo</b> Prodotto in promozione con sconto del <b className="bg-[#009ec9] text-white py-0 px-[3px] font-[400]  ms-1 rounded">{prodottoConsigliato.percentualePromo}</b></p>
                        <p className="">* Valido fino al {prodottoConsigliato.dataFineValidita} salvo esaurimento scorte</p>
                    </div>:null
                }

                <p className="flex my-[5px] items-end gap-2">
                    <span className="flex" dangerouslySetInnerHTML={{ __html: prodottoConsigliato.stars }}></span>
                    {prodottoConsigliato.recesioni == 0 ? "Non sono ancora presenti recensioni" : prodottoConsigliato.recesioni + " recensioni"}
                </p>
                {prodottoConsigliato.recesioni != 0 ??
                    <p className=" my-[5px]">{prodottoConsigliato.aggregateRatingStr} su 5 stelle</p>
                }

                <hr className="border-[#d6e03d] border-[1.5px] mt-[12px] mb-[5px]" />
                <p className="flex justify-end gap-1">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFreccia16.png`} />
                    <a className="hover:underline cursor-pointer" onClick={handleRedirect}> Vai al dettaglio del Prodotto</a>
                </p>
            </div>
        </div >
    )
}

export default ProdottiSuggeriti