import React, { useEffect } from 'react';
import { TabPanel, Tab, Tabs, TabContainer } from '../Componentes/LayOut/Tabs';
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import { GLOBAL_CONFIG } from "../../../_config/global";
import LegendaStatoLavori from '../Componentes/ITouiLavori/LegendaStatoLavori';
import AcordionLavori from '../Componentes/ITouiLavori/AcordionLavori';

const ITouiLavori = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const { handleRedirectToDetaglioLavoro, handleNewTagListinoTemplate, handleDeleteLavoro} = useITuoiOrdini();
    return (
        <>
            <div className='row ml-[15px] my-[10px]'>
                <div className='col col-12'>
                    <div className='flex flex-row items-center'>
                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavoro50.png`} alt="" className="w-[50px] h-[42px]" />
                        <span className={`text-[15px] text-[#f58220] `}>
                            I TUOI LAVORI
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
                        <div className='flex flex-row items-center m-[2px]'>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavoro20.png`} alt="" className="w-[19px] h-[16px]" />
                            <span className={`text-[12px] ml-1`}>
                                Tutti i tuoi Lavori
                            </span>
                        </div>


                    </Tab>
                    <Tab
                        index={1}
                        value={activeTab}
                        setValue={setActiveTab}
                    >
                        <div className='flex flex-row items-center m-[2px]'>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoLavOpz16.png`} alt="" className="w-[16px] h-[16px]" />
                            <span className={`text-[12px] ml-1`}>
                                Legenda Status Lavori
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
                        
                        {

                        
                        <AcordionLavori 
                           
                            //handleRedirectToDetaglioLavoro={handleRedirectToDetaglioLavoro}
                            //handleRedirectToDetaglioOrdini={handleRedirectToDetaglioOrdini}
                            width={720}
                        />
                        }
                    </TabPanel>
                    <TabPanel
                        index={1}
                        value={activeTab}
                        className=''
                    >
                       <LegendaStatoLavori/>
                    </TabPanel>
                </TabContainer>
            </div>


        </>
    )
}

export default ITouiLavori;