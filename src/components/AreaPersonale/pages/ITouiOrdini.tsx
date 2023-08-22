
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import AcordionOrdini from '../Componentes/ITouiOrdini/AcordionOrdini';


const ITouiOrdini = () => {

    const { listOrdini, pageOrdini } = useITuoiOrdini();

    return (
        <>
            <AcordionOrdini listOrdini={listOrdini} pageOrdini={pageOrdini} />
        </>
    )
}

export default ITouiOrdini