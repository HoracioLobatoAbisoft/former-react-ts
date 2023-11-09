import { useEffect, useState } from "react"
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";

const useBtnCarrello = () => {

    const [arrayCarrello, setArrayCarrello] = useState<ObjCarrello[]>([]);
    

    const getCarello = () => {
        const localCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        if (localCarrello) {
            ArrayLocalCarrello = JSON.parse(localCarrello);
            if (ArrayLocalCarrello.length > 0) {
                setArrayCarrello(ArrayLocalCarrello);
            }
        }
    }

    useEffect(() => {
        getCarello();
    }, [])

    return{
        arrayCarrello,
    }

}

export default useBtnCarrello