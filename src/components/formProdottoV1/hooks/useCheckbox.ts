import { useState } from "react";
import { OptionsSelect } from "../../formProdotto/interfaces/prodotto"

interface Props{
    //opciones: OptionsSelect[];
}

const useCheckbox = ({}:Props) => {
    
    const [hoverState, setHoverState] = useState<OptionsSelect>()
    //console.log(hoverState);
    return {setHoverState,hoverState}
}

export default useCheckbox