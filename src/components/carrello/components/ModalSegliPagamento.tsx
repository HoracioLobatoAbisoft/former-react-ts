import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/SegliIlPagamento.css'
import { GLOBAL_CONFIG } from '../../../_config/global';

type PropsModal = {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSegliPagamento = ({ openModal, setOpenModal }: PropsModal) => {
    return (
        <Modal
            open={openModal}
            onClose={() => { }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='ModalSegliPagamento'
        >
            <div className=" w-full h-full flex justify-center mt-[10%]">
                <div className="bg-white w-[306px] h-[255px]">
                    <div className='bg-[#e9e9e9] border-[#ddd] border-[1px] rounded w-[97%] m-[5px] flex justify-between ps-[10px] py-[2px] pe-[3px] items-center'><span className='text-[11px] font-bold'>Coupon di Sconto</span><button className='bg-[#f6f6f6] w-[20px] h-[20px] flex items-center justify-center border rounded border-[#aaa] text-[#aaa] text-[13px] font-bold' onClick={()=>setOpenModal(false)}>✖</button></div>
                    <div className='w-full  text-[11px] py-[10px] px-[15px] text-justify flex flex-col gap-2'>
                        <p className='flex gap-1'>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCoupon20.png`} className='w-[16px] h-[16px] inline'/>
                            Il Coupon di Sconto è un codice che consente di usufruire di esclusive promozioni a te riservate.
                        </p>
                        <p className=''>
                            <b>Come funziona?</b>
                            <br />
                            <p className="">
                                Inseriscilo nella casella di testo sottostante e clicca sul pulsante <img src={`${GLOBAL_CONFIG.IMG_IP}/img/btnApplCoupon.png`} className='w-[93px] h-[18px] inline'/> per aggiornare il totale del carrello e ricevere lo sconto.
                            </p>
                            
                        </p>
                        <p className=''>
                            <b>Dove trovarli?</b>
                            <br />
                            Consulta la sezione "Offerte e Promozioni" nella Home Page del sito
                        </p>
                    </div>
                    <hr />

                    <div className="w-full flex justify-end pe-[20px] py-[5px]">
                        <button className='bg-[#f6f6f6] w-[37px] h-[21px] flex items-center justify-center border rounded border-[#aaa]  text-[13px] 'onClick={()=>setOpenModal(false)} >Ok</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalSegliPagamento