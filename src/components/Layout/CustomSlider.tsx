import { useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const CustomSlider = () => {
   
    const handleDragStart = (e:any) => e.preventDefault();

    const items = [
        <img src="https://placehold.co/100x100"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/200x200"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/300x300"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/400x400"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/500x500"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/600x600"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/700x700"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/800x800"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/900x900"     role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
        <img src="https://placehold.co/1000x1000"   role="presentation" className="w-[284px] h-[150px] border rounded hover:border-[purple]" />,
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