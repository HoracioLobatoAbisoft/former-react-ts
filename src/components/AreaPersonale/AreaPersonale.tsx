import { Route, Routes } from 'react-router-dom'
import SideBarAreaPersonale from './Componentes/LayOut/SideBarAreaPersonale';
import ITouiOrdini from './pages/ITouiOrdini';
const AreaPersonale = () =>{

    return(
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
                        <Route index element={ <ITouiOrdini/> } />
                        <Route path="iTuoiOrdini" element={ <ITouiOrdini/>  } />
                        <Route path="2" element={ <h1> 2 </h1> } />
                    </Routes>
                </div>
            </div>
        </div>
        </>
    
    )
}

export default AreaPersonale;