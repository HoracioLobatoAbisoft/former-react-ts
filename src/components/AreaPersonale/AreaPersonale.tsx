import { Route, Routes } from 'react-router-dom'
import SideBarAreaPersonale from './Componentes/LayOut/SideBarAreaPersonale';
import ITouiOrdini from './pages/ITouiOrdini';
import DettaglioOrdine from './Componentes/ITouiOrdini/DettaglioOrdine';
const AreaPersonale = () => {

    return (
        <>
            <div className="">
                {/* <div className='row'> 
                <div className='w-[200px]'>*/}
                <div className='row mt-[15px]'>
                    <div className='w-[205px]'>
                        <SideBarAreaPersonale />
                    </div>
                    <div className='w-[800px] '>
                        <Routes>
                            <Route index element={<ITouiOrdini />} />
                            <Route path="iTuoiOrdini" element={<ITouiOrdini />} />

                        </Routes>
                    </div>
                </div>

            </div>
        </>

    )
}

export default AreaPersonale;