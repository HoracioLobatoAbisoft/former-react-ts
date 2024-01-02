import React, { useEffect } from 'react';
import { TabPanel, Tab, Tabs, TabContainer } from '../Componentes/LayOut/Tabs';
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import AcordionOrdini from '../Componentes/ITouiOrdini/AcordionOrdini';
import { GLOBAL_CONFIG } from "../../../_config/global";
import LegendaStatoOrdini from '../Componentes/ITouiOrdini/LegendaStatoOrdini';
import LoadingBackdrop from '../../loadingBackdrop';

const ITouiOrdini = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const { listOrdini, pageOrdini, handleGetOrdini, handleRedirectToDetaglioOrdini, handleDeleteOrdine, handleRedirectToDetaglioLavoro, handleNewTagListinoTemplate, handleDeleteLavoro, openLoading, } = useITuoiOrdini();

    return (
        <>
            <LoadingBackdrop isOpen={openLoading} x={2} sx={{ bgcolor: 'rgba(225,225,225,0.4)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', zIndex: 10 }} />
            <div className=' ml-[15px] my-[10px]'>
                <div className='col col-12 w-full flex justify-between'>
                    <div className='flex flex-row items-center'>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCart50.png`} alt="" className="w-[50px] h-[26px]" />
                        <span className={`text-[15px] text-[#f58220] uppercase`}>
                            Le Tue Consegna  
                        </span>
                    </div>
                    <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full rounded text-white">React V^18.2.0</span>
                </div>
            </div>
            <div className=' ml-[15px]'>
                <Tabs
                    classNameDiv={``}
                >
                    <Tab
                        index={0}
                        value={activeTab}
                        setValue={setActiveTab}
                    >
                        <div className='flex flex-row items-center'>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCarrello20.png`} alt="" className="w-[16px] h-[16px]" />
                            <span className={`text-[12px] ml-1`}>
                                Tutti Tue Consegna
                            </span>
                        </div>


                    </Tab>
                    <Tab
                        index={1}
                        value={activeTab}
                        setValue={setActiveTab}
                    >
                        <div className='flex flex-row items-center'>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavOpz16.png`} alt="" className="w-[16px] h-[16px]" />
                            <span className={`text-[12px] ml-1`}>
                                Legenda Status Consegna
                            </span>
                        </div>

                    </Tab>


                </Tabs>
                <TabContainer
                    className={`border`}
                >
                    <TabPanel
                        index={0}
                        value={activeTab}
                    >
                        <AcordionOrdini
                            listOrdini={listOrdini}
                            pageOrdini={pageOrdini}
                            handleGetOrdini={handleGetOrdini}
                            handleDeleteLavoro={handleDeleteLavoro}
                            handleDeleteOrdine={handleDeleteOrdine}
                            handleNewTagListinoTemplate={handleNewTagListinoTemplate}
                            handleRedirectToDetaglioLavoro={handleRedirectToDetaglioLavoro}
                            handleRedirectToDetaglioOrdini={handleRedirectToDetaglioOrdini}
                        />
                    </TabPanel>
                    <TabPanel
                        index={1}
                        value={activeTab}
                        className=''
                    >
                        <LegendaStatoOrdini />
                    </TabPanel>
                </TabContainer>
            </div>


        </>
    )
}

export default ITouiOrdini