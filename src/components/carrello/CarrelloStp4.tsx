
import { GLOBAL_CONFIG } from "../../_config/global"
import TotaleProdotto from "./components/TotaleProdotto"
import LoadingBackdrop from "../loadingBackdrop"
import Stepper from "./components/Stepper"
import useCarrelloStep4 from "./hooks/useCarrelloStep4"
import ModalSegliPagamento from "./components/ModalSegliPagamento"
import ContinuaGliAcquisti from "./components/ContinuaGliAcquisti"

const CarrelloStp4 = () => {

    const {tipoPagamento,valueConsegna,valuePagamento,handleRadioPagamento,TotaleProvisorio,handleTotaleChange,loading,openModal,setOpenModal,handleChangeInputCoupon,handleAplicaCoupon,messageCoupon,showInputCoupon} = useCarrelloStep4();

    //const showInputCoupon = 

    return (
        <div className="w-full h-full">
            <LoadingBackdrop
                isOpen={loading}
                x={1}
                sx={{
                    bgcolor: "rgba(225,225,225,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    pr: 8,
                    zIndex: 1000
                }}
            />
            <Stepper stepNumber={4} />
            <div className='flex gap-5'>
                <div className="w-[73%]">
                    <div className="flex w-full justify-between text-[13px]">
                        <h3 className="text-[14px] font-bold  flex gap-1"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPrezzo16.png`} width={16} height={16} />Scegli il Pagamento </h3>
                        <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full text-white rounded">React V^18.2.0</span>
                    </div>
                    <hr className="border border-[#aaa] my-1" />
                    <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px]">
                        {tipoPagamento.map((item, index) => (
                        <div className="flex gap-2" key={index}>
                            <span className={`${item.idTipoPagamento == valuePagamento ? 'text-[#68af68]' : 'text-[#fff]'}`}>✔</span>
                            <img src={`${GLOBAL_CONFIG.IMG_IP}/${item.imgRif}`} className='w-[32pxpx] h-[32px]' />
                            <div className="">
                                <input type="radio" checked={item.idTipoPagamento == valuePagamento} value={item.idTipoPagamento} onChange={handleRadioPagamento}/>
                                <label htmlFor="" className='text-[14px] font-bold ml-[3px]'>{item.titulo} </label>
                                <p className='text-[12px]'>{item.descrizione} <span dangerouslySetInnerHTML={{ __html: item.note != null ? item.note : '' }}></span></p>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="border border-[#aaa] rounded-[5px] px-[10px] py-[10px] mt-[10px] flex flex-col gap-[6px]">
                        <h2 className="flex gap-2"><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoCoupon20.png`} className='w-[16px] h-[16px] ms-[2px]' /><span className="px-[4px]  bg-[#1aaf5d] py-0 text-[#fff] text-[14px] rounded-[3px] font-[400]">COUPON DI SCONTO</span></h2>
                        {showInputCoupon  ?
                            <div className=" flex gap-3 w-full justify-center">
                                <p className="text-[11.5px]">Hai un Coupon di Sconto? Inserisci qui il codice e ti verrà applicato</p>
                                <input type="text" className="ms-4 border rounded-[2px] border-[#000]  h-[21px]" maxLength={30} onChange={handleChangeInputCoupon}/>
                                <a className="text-[12px] ms-1 bg-[#f58220] h-[20px] py-[2px] px-[4px] cursor-pointer" onClick={handleAplicaCoupon}>Applica</a>
                            </div> : null
                        }
                        <p className="text-[12px] flex justify-center text-[red] font-bold">{messageCoupon}</p>
                        <div className="flex justify-end gap-2 text-[12px]">
                            <a className='flex  cursor-pointer hover:underline' ><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoMieiCoupon20.png`} className='w-[16px] h-[12px] ' /> Vai ai tuoi Coupon di Sconto</a>
                            <ModalSegliPagamento openModal={openModal} setOpenModal={setOpenModal} />
                            <a className='flex cursor-pointer hover:underline' onClick={() => setOpenModal(true)}><img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoInfo16.png`} className='w-[16px] h-[16px] ' /> Cosa e' un Coupon di sconto?</a>
                        </div>
                    </div>
                    <ContinuaGliAcquisti  step={4} text='RIVEDI E ACQUISTA'/>
                </div>
                <div className="w-[23%]">
                    <TotaleProdotto TotaleProvisorio={TotaleProvisorio} handleTotaleChange={handleTotaleChange} textBtn={'RIVEDI E ACQUISTA'} />
                </div>
            </div>
        </div>


    )
}

export default CarrelloStp4