import { SvgImage } from "../interface/svgImage"
import { HTMLRender } from "./HTMLRender"

import './Cube.css';

interface Props {
    svgImage : SvgImage | undefined
}
export const ImageCustom = ({svgImage}:Props) => {

    return(
        <>
        {svgImage && <div className={"svg"}>
        <HTMLRender  htmlString={svgImage.bufferSVG}/> 

        </div>}
    </>
    )
    
}