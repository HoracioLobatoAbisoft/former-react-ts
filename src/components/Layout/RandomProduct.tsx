import { useEffect, useState } from "react";
import { GLOBAL_CONFIG } from "../../_config/global";
import useProductRandom from "./hooks/useProductRamdon";
import { enOperationFrame } from '../../enHelpers/enOperationFrame'
const RandomProduct = () =>{
    const {getCaricaRandomListino} = useProductRandom()
    const [product, setProduct] = useState<any>();
    const loadProduct = async () => {
        let response = await getCaricaRandomListino();
        if (response?.status == 200){
            setProduct(response.data);
        }

    }
    const customRedirect = (uri: String)=>{ 
        window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl,  }, GLOBAL_CONFIG.IMG_IP);
    }

    useEffect(()=>{
        loadProduct()
    },[])
    return<>
        <div className="w-[480px] border border-[2px] rounded p-[3px]">
            {
                product&&
           
            <>
            <div className="w-full flex flex-row items-center">
                <span className="italic text-[11px] font-bold mx-[2px]">
                    Riflettori puntati su 
                </span>
                <span className="font-bold text-[14px] mx-[2px] text-[purple]">
                    {`${product.nome}`}
                </span>
            </div>
            <div className="w-full flex flex-row" >
                <div className="w-[120px] flex justify-center items-center">
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/listino/img/${product.getImgFormato}`} alt="" className="w-[80px] h-[80px]" />
                </div>
                <div className="w-[360px]">
                    <p className="text-[10px] border-spacing-[2px] text-justify leading-normal pr-[5px]" dangerouslySetInnerHTML={{ __html: String(product.descrSitoFormatted) }}>
                       
                    </p>
                </div>

            </div>
            <hr className="bg-[purple] border text-[purple] border-[purple] mt-[10px]"/>
            <div className="w-full flex flex-row justify-end items-center" >
                <div className="flex flex-row my-[5px]" onClick={()=>customRedirect(product.url)}>
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFreccia16.png`} alt="" className="w-[16px] h-[16px]" />
                    <span className="text-[11px]" >
                        Vai al dettaglio del Prodotto
                    </span>
                </div>
            </div>
            </>
             }

        </div>
    </>
}

export default RandomProduct;