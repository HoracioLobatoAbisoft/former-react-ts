import { useState } from "react";
import '../styles/ParagraphEfect.css'
type Props = {
    description: string;
    title?:string;
}
const ParagraphEfect = ({description,title}:Props) => {

    const palabras = description ? description.split(' ') : [];

    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <p className="parrafo" aria-label={description} title={title}>
            {palabras.map((palabra, index) => (
                <span
                    key={index}
                    className={index <= hoverIndex ? 'resaltado' : ''}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    dangerouslySetInnerHTML={{__html:palabra + ' '}}
                >
                    
                </span>
            ))}
        </p>
    )
}

export default ParagraphEfect