import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GLOBAL_CONFIG } from "../../_config/global";
type CarouselProps = {
    items:JSX.Element[];
}

const CustomCarousel = ({items}:CarouselProps) => {
   
    const handleDragStart = (e:any) => e.preventDefault();

    
    // const items = [
    //     <img src="https://placehold.co/100x100"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/200x200"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/300x300"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/400x400"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/500x500"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/600x600"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/700x700"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/800x800"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/900x900"     role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    //     <img src="https://placehold.co/1000x1000"   role="presentation" className="w-[64px] h-[64px] border rounded hover:border-[purple]" />,
    // ];

    const thumbItems = (items :any , [setThumbIndex, setThumbAnimation]:any) => {
        return items.map((item:any, i:number) => (
            <div key={`item-carousel-${i}`} className="rounded mx-[15px] p-[5px]" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
                {item}
            </div>
        ));
    };
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems([...items], [setThumbIndex, setThumbAnimation]));
    const slideNext = () => {
        console.log('thumbIndex slideNext', thumbIndex)
        
        if (thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        console.log('thumbIndex slidePrev', thumbIndex)
        if (thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        } 
    };

    const responsive = {
        0: { items: 7, itemsFit: 'contain', },
        568: { items: 7, itemsFit: 'contain', },
        1024: { items: 6 },
      };
    useEffect(()=>{

    }, [thumbIndex])
    
    return (
        <>
         <div className="w-full p-0 flex h-[100px] justify-around items-center">
                        <div className="w-[5%] flex justify-center items-center">
                            <div className="btn-prev  rounded" onClick={()=>slidePrev()}>
                                <span className="text-[30px] font-bold text-[purple]">
                                    &lang;
                                </span>
                            </div>   
                        </div>
                        <div className="w-[90%]">
                            <AliceCarousel
                                //infinite={true}
                                //?items={thumbs} 
                                items={items} //!modifique los items porque con thumbs no me reconocia la lectura de lo que la api traia en items que lo pase por props
                                autoPlay={true}
                                //animationType="fadeout"
                                autoPlayInterval={3000}
                                animationDuration={3000}
                                mouseTracking={false}
                                responsive={responsive}
                                disableDotsControls={true}
                                disableButtonsControls={true}
                                activeIndex={thumbIndex}
                            //  onSlideChanged={syncThumbs}
                            //  touchTracking={!mainAnimation}
                            />
                        </div>
                        <div className="w-[5%] flex justify-center items-center">
                            <div className="btn-prev  rounded " onClick={()=>slideNext()}>
                                <span className="text-[30px] font-bold text-[purple]">
                                    &rang;
                                </span>
                            </div>   
                        </div>
                    </div>
        </>
    )

}
export default CustomCarousel;