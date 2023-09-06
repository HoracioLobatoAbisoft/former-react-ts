import { useEffect, useState } from "react";
import { httpGetCarouselEvidenza } from "../services/RichiediCampioneServices";
import { DataCarouseEvidenza } from "../interfaces/GetCarouselEvidenza";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { enOperationFrame } from '../../../enHelpers/enOperationFrame'
const items4 = [
    <img src="https://placehold.co/100x100" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/200x200" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/300x300" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/400x400" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/500x500" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/600x600" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/700x700" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/800x800" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/900x900" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    <img src="https://placehold.co/1000x1000" role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
];

const useRichiediUnCampione = () => {

    /*
        *UseStates hooks 
    */

    const [itemsCarousel, setItemsCarousel] = useState<JSX.Element[]>(items4)
    /*
        other special funcions
    */

    const customRedirect = (uri: String)=>{ 
        window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl,  }, GLOBAL_CONFIG.IMG_IP);
    }
    /*
        *Funciones Getters  
    */

    const getCarouselEvidenza = async () => {
        try {
            const responseGetCarouselEvidenza = await httpGetCarouselEvidenza();
            return responseGetCarouselEvidenza;
        } catch (error) {
            console.log('error getCarouselEvidenza');
        }

    }

    /*
        *Funciones Handle Secundarias 
    */

    const handleGetCarouselEvidenza = async () => {
        const responseGetCarouselEvidenza = await getCarouselEvidenza();
        if (responseGetCarouselEvidenza) {

            const items2 = responseGetCarouselEvidenza.data.map((item, i) => {
                console.log('itemCarrousel', item);
                const  urlImgFile = `${GLOBAL_CONFIG.IMG_IP}/listino/img/${item.getImgFormato}`;
                console.log(`urlImgFile: ${urlImgFile}`);
                return  <img 
                            key={i} 
                            src={`${urlImgFile}`} 
                            role="presentation" 
                            className="w-[64px] h-[64px] border rounded hover:border-[purple]" 
                            onClick={()=>{customRedirect(item.url)}}
                        />
            }
                
            )

            setItemsCarousel(items2);
        };

    }

    useEffect(() => {
        handleGetCarouselEvidenza();
    }, [])


    return {
        itemsCarousel,
    }
}

export default useRichiediUnCampione