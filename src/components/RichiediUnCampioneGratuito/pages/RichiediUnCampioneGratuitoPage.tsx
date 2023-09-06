import React, { useState } from "react";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { Tabs, Tab, TabContainer, TabPanel } from "../../Layout/Tabs";
import Promo from "../../carrello/components/Promo";
import RichiediUnCampioneGratuito from "../compontes/RichiediUnCampioneGratuito";
import { useLocation } from "react-router-dom";
import CustomCarousel from "../../Layout/CustomCarousel";
import useRichiediUnCampione from "../hooks/useRichiediUnCampione";
import CustomSlider from "../../Layout/CustomSlider";

const RichiediUnCampioneGratuitoPage = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const { state: stateLocation } = useLocation();

    const { itemsCarousel, } = useRichiediUnCampione()

    return (
        <>
            <div className='row ml-[15px] w-[780px]'>
                <div className="w-full">
                    <Tabs
                        classNameDiv={``}
                    >
                        <Tab
                            index={0}
                            value={activeTab}
                            setValue={setActiveTab}
                        >
                            <div className='flex flex-row items-center m-[3px]'>
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoProdotti.png`} alt="" className="w-[16px] h-[16px]" />
                                <span className={`text-[12px] ml-1`}>
                                    Richiedi un Campione Gratuito
                                </span>
                            </div>
                        </Tab>
                        <Tab
                            index={1}
                            value={activeTab}
                            setValue={setActiveTab}
                        >
                            <div className='flex flex-row items-center'>
                                <span className="bg-[#009ec9] flex flex-row m-[3px]">
                                    <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo16w.png`} alt="" className="w-[16px] h-[16px]" />
                                    <span className={`text-[12px] ml-1 text-[white]`}>
                                        PROMO
                                    </span>
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
                            <RichiediUnCampioneGratuito
                                prodotto={stateLocation}
                            />

                        </TabPanel>
                        <TabPanel
                            index={1}
                            value={activeTab}
                            className=''
                        >
                            <div className="w-[790px] p-[10px]" >
                                <Promo></Promo>
                            </div>
                        </TabPanel>
                    </TabContainer>
                </div>
                <div className="w-full">
                    <CustomCarousel items={itemsCarousel} />
                </div>
                <div className="w-full flex-row">
                    <div className="w-[284px] h-[150px]">
                        <CustomSlider></CustomSlider>
                    </div>

                </div>
            </div>
        </>
    )

}
export default RichiediUnCampioneGratuitoPage;