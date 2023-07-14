
import { useState } from "react"
import { ImageCustom } from '../../formProdottoV1/components/ImageCustom';
import { SvgImage } from '../../formProdottoV1/interface/svgImage';
import TotaleProvvisorio from './TotaleProvvisorio';
import AcordionCarrello from "./AcordionCarrello";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { DataGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio";

type PropsRepilogo = {
    ArrayLocalCarrello: ObjCarrello[];
    countLavori: number
    TotalPrezo: number
    TotaleProvisorio: DataGetTotaleProvisorio | undefined
    handleDeleteAllCarrello: () => void
    handleRetornaProdotto: (i:number) => void
    setArrayLocalCarrello: React.Dispatch<React.SetStateAction<ObjCarrello[]>>
}

// const Riepilogo = ({ ArrayLocalCarrello, countLavori, TotalPrezo, TotaleProvisorio, handleDeleteAllCarrello,handleRetornaProdotto, }: PropsRepilogo) => {
//     handleDeleteAllCarrello: () => void,
//     setArrayLocalCarrello : any
// }

const Riepilogo = ({ArrayLocalCarrello,countLavori,TotalPrezo,TotaleProvisorio,handleDeleteAllCarrello,handleRetornaProdotto, setArrayLocalCarrello}:PropsRepilogo) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex gap-[50px]">
            <div className="w-[73%] ">

                <h3 className="flex gap-3"><img src="https://localhost:44311/img/icoCarrello16.png" width={16} height={16} /> CARRELLO</h3>
                <hr className="border my-1" />
                {ArrayLocalCarrello.length === 0 ?
                    <div className="h-[260px] border rounded-[5px] border-[#aaa] w-full flex items-center justify-center text-[24px] text-[#f58220] font-bold">Il tuo carrello è vuoto</div> :
                    <AcordionCarrello handleRetornaProdotto={handleRetornaProdotto} ArrayLocalCarrello={ArrayLocalCarrello} countLavori={countLavori} TotalPrezo={TotalPrezo} handleDeleteAllCarrello={handleDeleteAllCarrello} setArrayLocalCarrello={setArrayLocalCarrello}/>
                }
                <div>
                    <br />
                    <span style={{ 'fontSize': 12 }}>Se vuoi completare l'acquisto clicca su <strong> SCEGLI IL PAGAMENTO</strong></span>
                    <br />
                    <span style={{ 'fontSize': 12 }}>Se vuoi ordinare altri prodotti clicca qui e</span> <a style={{ 'fontSize': '16px', 'color': '#f58220', 'fontWeight': 'bold' }} className="hover:underline" >Continua gli acquisti.</a>
                </div>
            </div>
            <div className="w-[20%]">
                <TotaleProvvisorio TotalPrezo={TotalPrezo} TotaleProvisorio={TotaleProvisorio} />
            </div>

        </div>
    )
}

export default Riepilogo