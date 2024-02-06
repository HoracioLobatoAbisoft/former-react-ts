import { useEffect, useState } from "react";
import { GLOBAL_CONFIG } from "../../../_config/global";
import '../styles/DescrizioneSEO.css'
import ParagraphEfect from "./ParagraphEfect";
type Props = {
    title?: string;
    img?: string;
    description1: string;
    description2: string;
}
const DescrizioneSEO = ({ description1, description2, title, img }: Props) => {

    

    return (
        <div className={`w-full mt-2 flex flex-col items-center gap-2 bg-[#f1f1f1] px-2 rounded-md`} title="Informazioni">
            <h1 title={title} aria-label={title} className="text-[1.5em] font-bold text-center animate-fade animate-thrice animate-ease-lineare">{title}</h1>
            <img src={GLOBAL_CONFIG.IMG_IP + "/listino/img/" + img} title={title} alt={description1} itemProp="image" className="w-[150px] h-[150px]animate-fade animate-thrice animate-ease-lineare" />
            {/* <ParagraphEfect description={description1} title={title}/> */}
            <ParagraphEfect description={description2} title={title}/>
        </div>
    )
}
export default DescrizioneSEO