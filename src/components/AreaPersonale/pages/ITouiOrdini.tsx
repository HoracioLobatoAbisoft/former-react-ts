import React from 'react';
import {TabPanel, Tab, Tabs, TabContainer} from '../Componentes/LayOut/Tabs';
import useITuoiOrdini from '../hooks/useITuoiOrdini';
import AcordionOrdini from '../Componentes/ITouiOrdini/AcordionOrdini';


const ITouiOrdini = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const { listOrdini, pageOrdini,handleGetOrdini } = useITuoiOrdini();

    return (
        <>
        <Tabs>
            <Tab
                index={0}
                value={activeTab}
                setValue={setActiveTab}
            >
                <span className='text-[12px]´'>
                    Tutti Tuoi Ordini
                </span>

            </Tab>
            <Tab
                index={1}
                value={activeTab}
                setValue={setActiveTab}
            >
                <span>
                    Legenda Status Ordini
                </span>

            </Tab>
            

        </Tabs>
        <TabContainer>
            <TabPanel
                index={0}
                value={activeTab}
            >
                <AcordionOrdini listOrdini={listOrdini} pageOrdini={pageOrdini} handleGetOrdini={handleGetOrdini}/>

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
            
        </>
    )
}

export default ITouiOrdini