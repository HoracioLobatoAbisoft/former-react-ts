import { SvgImage } from "../interface/svgImage"
import { HTMLRender } from "./HTMLRender"

import './Cube.css';

interface Props {
    svgImage : SvgImage | undefined
}
export const ImageCustom = ({svgImage}:Props) => {

    return(
        <>
        {svgImage && <div className={(svgImage.heigth<150 || svgImage.width<150) ?"svg":""}>
        <HTMLRender  htmlString={svgImage.bufferSVG}/> 

        </div>}
    </>
    )
    
}