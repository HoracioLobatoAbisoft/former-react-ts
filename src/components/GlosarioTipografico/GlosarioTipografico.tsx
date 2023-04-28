import React from 'react'
import Header from '../common/Header/Header'
import SearchOrdini from '../ordini/components/SearchOrdini'
import Footer from '../common/Footer/Footer'
import SideBarPersonalArea from '../common/SideBarPersonalArea/SideBarPersonalArea'
import SearchIcon from '@mui/icons-material/Search';

const GlosarioTipografico = () => {
    return (
        <>
            
            <div className="flex gap-5 mt-4">
                
                <div className="w-full
                    flex
                    flex-col
                    gap-[4rem]
                ">
                    <div className="gap-10 bg-gray-200 mt-8 flex justify-center items-center text-[#f58220] py-8">
                        <h2><span className='border-[.2rem] border-[#f58220] p-3 rounded font-bold '>A</span><span className='border-[.2rem] border-[#f58220] p-3 rounded font-bold'>Z</span></h2>
                        <h2 className='font-extrabold gre tracking-wider uppercase text-3xl'>Glossario Tipografico</h2>
                    </div>
                    <div className="w-full flex justify-center">
                        <p className="whitespace-normal text-justify w-3/6 ">
                            <b>Benvenuti nel Glossario Tipografico!</b><br />

                            In questa sezione troverete un aiuto per comprendere le terminologie più utilizzate nel mondo della Tipografia. Vi basterà cercare una parola o parte di essa e otterrete tutti i termini corrispondenti con la relativa definizione.
                        </p>
                    </div>
                    <div className="flex w-full justify-center gap-3 items-center">
                        <button className='uppercase flex gap-4 text-white bg-[#f58220] ms-0 font-semibold ps-2 pe-6 py-3 rounded'>
                            <SearchIcon /> Cerca
                        </button>
                        <input type="text" className='bg-gray-200 w-[35rem]  p-3 focus:outline-none rounded' placeholder='Scrivi qui quello che cerchi'/>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="bg-gray-200 p-3 text-[#f58220] font-bold flex gap-[1rem] rounded uppercase">
                            <span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span><span>i</span><span>j</span><span>k</span><span>l</span><span>m</span><span>n</span><span>o</span><span>p</span><span>q</span><span>r</span><span>s</span><span>t</span><span>u</span><span>v</span><span>w</span><span>x</span><span>y</span><span>z</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>

    )
}

export default GlosarioTipografico