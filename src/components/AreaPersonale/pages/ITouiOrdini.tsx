import React from 'react';
import {TabPanel, Tab, Tabs, TabContainer} from '../Componentes/LayOut/Tabs';
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import AcordionOrdini from '../Componentes/ITouiOrdini/AcordionOrdini';
import { GLOBAL_CONFIG } from "../../../_config/global";

const ITouiOrdini = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const { listOrdini, pageOrdini } = useITuoiOrdini();

    return (
        <>
        <div className='row ml-[15px] my-[10px]'>
            <div className='col col-12'>
                <div className='flex flex-row items-center'>
                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCart50.png`} alt="" className="w-[50px] h-[26px]"/>
                    <span className={`text-[15px] text-[#f58220] `}>
                        I TUOI ORDINI
                    </span>
                </div>

            </div>
        </div>
        <div className='row ml-[15px]'>
            <Tabs
                classNameDiv={``}
            >
                <Tab
                    index={0}
                    value={activeTab}
                    setValue={setActiveTab}
                >
                    <div className='flex flex-row items-center'>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello20.png`} alt="" className="w-[16px] h-[16px]"/>
                        <span className={`text-[12px] ml-1`}>
                            Tutti Tuoi Ordini
                        </span>
                    </div>
                    

                </Tab>
                <Tab
                    index={1}
                    value={activeTab}
                    setValue={setActiveTab}
                >
                    <div className='flex flex-row items-center'>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavOpz16.png`} alt="" className="w-[16px] h-[16px]"/>
                        <span className={`text-[12px] ml-1`}>
                            Legenda Status Ordini
                        </span>
                    </div>
                    
                </Tab>
                

            </Tabs>
            <TabContainer>
                <TabPanel
                    index={0}
                    value={activeTab}
                >
                    <AcordionOrdini listOrdini={listOrdini} pageOrdini={pageOrdini} />

                </TabPanel>
                <TabPanel
                    index={1}
                    value={activeTab}
                >
                <p>
                    this is a test
                </p>
                </TabPanel>
            </TabContainer>
        </div>
        
            
        </>
    )
}

export default ITouiOrdini