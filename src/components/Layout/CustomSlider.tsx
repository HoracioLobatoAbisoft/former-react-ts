import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GLOBAL_CONFIG } from "../../_config/global";
import { enOperationFrame } from '../../enHelpers/enOperationFrame'

const CustomSlider = () => {
   
    const customRedirect = (uri: String)=>{ 
        window.parent.postMessage({ uri: uri, operation: enOperationFrame.reliadUrl,  }, GLOBAL_CONFIG.IMG_IP);
    }

    const items = [
        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/imgHomeSx1.png`} onClick={()=>{customRedirect('/mondo-former/ricamo')}}    role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/imgHomeSx2.png`} onClick={()=>{customRedirect('/mondo-former/stampa-digitale')}}    role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/imgHomeSx3.png`} onClick={()=>{customRedirect('/mondo-former/stampa-tipografica-offset')}}    role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/imgHomeSx4.png`} onClick={()=>{customRedirect('/mondo-former/packaging')}}    role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
    ];
    const thumbItems = (items :any , [setThumbIndex, setThumbAnimation]:any) => {
        return items.map((item:any, i:number) => (
            <div key={`item-carousel-${i}`} className="rounded mx-[15px] p-[5px]" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems([...items, ...items, ...items], [setThumbIndex, setThumbAnimation]));
   

    const responsive = {
        0: { items: 1, itemsFit: 'contain', },
        568: { items: 1, itemsFit: 'contain', },
        1024: { items: 1 },
      };
    
    return (
        <>
         <div className="w-full p-0 flex justify-around items-center">
                    
                        <div className="w-[100%]">
                            <AliceCarousel
                                infinite={true}
                                items={thumbs} 
                                autoPlay={true}
                                //animationType="fadeout"
                                autoPlayInterval={1000}
                                animationDuration={1000}
                                mouseTracking={false}
                                responsive={responsive}
                                disableDotsControls={true}
                                disableButtonsControls={true}
                                activeIndex={thumbIndex}
                            //  onSlideChanged={syncThumbs}
                            //  touchTracking={!mainAnimation}
                            />
                        </div>
                        
                    </div>
        </>
    )

}
export default CustomSlider;