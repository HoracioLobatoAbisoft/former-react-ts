import React, { useState } from 'react'
import SideBarPersonalArea from '../../common/SideBarPersonalArea/SideBarPersonalArea'
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { Box } from '@mui/material';
import IndirizziCorriereHooks from '../hooks/IndirizziCorriereHooks';
import DeleteIcon from '@mui/icons-material/Delete';

const IndirizziCorriereContent = () => {

    const { indirizoList } = IndirizziCorriereHooks()
    const [activeAccordion, setActiveAccordion] = useState(-1);
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string, I: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
        setActiveAccordion(I)
    };

    return (
        <div className='w-full gap-4 flex'>
            <SideBarPersonalArea />
            <div className="p-5">
                <h2 className="my-3 bg-[#f58220] text-white p-1 font-semibold tracking-wide w-full rounded"><RoomSharpIcon /> INDIRIZZI DI SPEDIZIONE</h2>
                <p className="">Da qui puoi gestire i tuoi indirizzi per la consegna degli ordini. Clicca sul + che vedi accanto a ogni indirizzo per visualizzare il dettaglio.</p>
                <div className="flex flex-col">
                    <div className="flex  ">
                        <h3 className="mx-[10%] text-[#f58220] font-semibold my-5">RIFERIMENTO</h3>
                        <h3 className="mx-[10%] text-[#f58220] font-semibold my-5">INDIRIZZO</h3>
                    </div>
                    {indirizoList?.map((LI, I) => {

                        const colors = ['#E1DBDB', '#F4F4F4 ', '#FBFAFA'];
                        let color = activeAccordion === I ? "#f58220" : colors[I % 3];

                        return (
                            <Accordion  expanded={expanded === `panel${I}`} sx={{ borderRadius: 2 }} key={I} onChange={handleChange(`panel${I}`, I)}>
                                <AccordionSummary
                                    sx={{ bgcolor: color, borderRadius: 2 }}
                                >
                                    <table className="w-full">
                                        <thead>
                                            <tr className='flex]'  >
                                                <th className='w-[10%]'> + <StarPurple500SharpIcon sx={{ color: LI.predefinito?'yellow':'#f58220' }} /> <RoomSharpIcon /> </th>
                                                <th className='w-[22%] text-start'>{LI.nome}</th>
                                                <th className='font-semibold text-start text-sm'>{LI.riassunto}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="flex justify-center gap-10">
                                        <div className="">
                                            <p>Riferimento </p>
                                            <p>Destinatario </p>
                                            <p>Indirizzo </p>
                                            <p>Località </p>
                                            <p>Nazione </p>
                                            <p>Telefono </p>
                                        </div>
                                        <div className="">
                                            <p className='font-bold'>Sede Legale </p>
                                            <p className='font-bold'>CF advertising di Fabrizio ArEl Calò </p>
                                            <p className='font-bold'>Via Andrea Fulvio 12/a </p>
                                            <p className='font-bold'>00162 Roma (RM) </p>
                                            <p className='font-bold'>Italia </p>
                                            <p className='font-bold'>54654465 </p>
                                        </div>
                                    </div>
                                    <hr className='bg-[#f58220] border-0 h-1 rounded mt-5' />
                                    <div className="flex justify-end mt-3 gap-5">
                                        <button className='bg-[#f58220] p-2 rounded text-white font-semibold'><StarPurple500SharpIcon sx={{color:
                                        'yellow'}}/> Rendi predefinito </button>
                                        <button className='bg-[#f58220] p-2 rounded text-white font-semibold'><DeleteIcon/> Elimina indirizzo</button>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default IndirizziCorriereContent