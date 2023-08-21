import { Route, Routes } from 'react-router-dom'
import SideBarAreaPersonale from './Componentes/LayOut/SideBar';
const AreaPersonale = () =>{

    return(
        <>
        <div className="bg-[blue]">
            <div className='row'> 
                <div className='w-[200px]'>
                    <SideBarAreaPersonale />
                </div>
                <div className='w-[600px] bg-[red]'>
                    <Routes>
                        <Route index element={ <h1> index </h1> } />
                        <Route path="1" element={ <h1> 1 </h1>  } />
                        <Route path="2" element={ <h1> 2 </h1> } />
                    </Routes>
                </div>
            </div>
        </div>
        </>
    
    )
}

export default AreaPersonale;