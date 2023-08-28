import { GLOBAL_CONFIG } from "../../../_config/global"
import { DataGetProduttoConsigliato } from "../interface/prodottoConsigliato"

type ProddotiSugeritiProps = {
    prodottoConsigliato: DataGetProduttoConsigliato
}

const ProdottiSuggeriti = ({ prodottoConsigliato }: ProddotiSugeritiProps) => {
    return (
        <div className="flex gap-2 p-[8px] border-[3px] border-[#d3d3d3] rounded-[5px] hover:border-[#d6e03d] mb-[10px]">
            <div className=" w-[50%]">
                <img src={`https://tipografiaformer.it/listino/img/${prodottoConsigliato.getImgFormato}`} className="w-[128px] h-[128px]" />
            </div>
            <div className="text-[11px] ">
                <a href="" className="text-[14px] font-bold ">{prodottoConsigliato.carta}</a>
                <p className="p-[1px]">Categoria: {prodottoConsigliato.categoria}</p>
                <p className="p-[1px]">Formato: {prodottoConsigliato.formato}</p>
                <p className="p-[1px]">Carta: {prodottoConsigliato.carta}</p>
                <p className="p-[1px]">Colori: {prodottoConsigliato.colori}</p>
                <p className="py-[5px] italic">
                    {prodottoConsigliato.descrSito}
                </p>
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
                    <a href="" className="hover:underline"> Vai al dettaglio del Prodotto</a>
                </p>
            </div>
        </div >
    )
}

export default ProdottiSuggeriti