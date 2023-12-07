import { Dialog, DialogTitle, Tooltip, Typography, IconButton, } from '@mui/material'
import { GLOBAL_CONFIG } from '../../../_config/global'
import { DataGetNazioni } from '../../AreaPersonale/Componentes/Indirizzo/interfaces/GetCaricaNazioni';
import { DataGetLocalita } from '../../AreaPersonale/Componentes/Indirizzo/interfaces/GetCaricaLocalita';
import CloseIcon from '@mui/icons-material/Close';

type PropsModal = {
    idut: number;
    indirizzo: string;
    referimento: string;
    destinatario: string;
    telefono: string;
    idNazione: number;
    idCap: number;
    cap?: string | null;
    localitaCap?: string | null;
    handleChangeIndirizzo: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleCloseFormIndirizzo: () => void;
    listNazionii: DataGetNazioni[];
    openFormIndirizzo: boolean;
    listLocalita: DataGetLocalita[];
    handleSalvaIndirizzo: () => Promise<void>;
    error: boolean;
}

const ModalAggiungiIndirizzo = ({ cap, destinatario, idCap, idNazione, idut, indirizzo, localitaCap, referimento, telefono, handleCloseFormIndirizzo, handleChangeIndirizzo, listNazionii, openFormIndirizzo, listLocalita, handleSalvaIndirizzo, error }: PropsModal) => {
    return (
        <Dialog open={openFormIndirizzo} fullWidth maxWidth="sm" sx={{ '.MuiBackdrop-root': { bgcolor: 'rgb(0,0,0,.09)' } }} onClose={handleCloseFormIndirizzo}>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', color: '#f58220', fontSize: '16px', textAlign: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoInd50.png"} />
                    AGGIUNGI UN NUOVO INDIRIZZO
                </Typography>
                <Tooltip title="vicino" arrow>
                    <IconButton aria-label="" onClick={handleCloseFormIndirizzo}>
                        <CloseIcon/>
                    </IconButton>
                </Tooltip>

            </DialogTitle>
            <p className="text-[11px] w-full p-2"> Se vuoi salvare un indirizzo differente riempi i campi qui sotto:</p>
            <div className='flex  justify-center p-2 text-[14px]   w-full' >
                <div className="flex flex-col border-[3px] border-[#f1f1f1] gap-4  w-[480px] rounded-[5px] my-[10px] p-[20px]">
                    <div className="flex ">
                        <div className="w-[150px] flex flex-col gap-[.8em]">
                            <label htmlFor="" className='font-bold'>Riferimento (*):</label>
                            <label htmlFor="" className="">Destinatario (*)</label>
                            <label htmlFor="" className="">Indirizzo (*)</label>
                            <label htmlFor="" className="">Nazione *</label>
                            {idNazione == 0 ?
                                <>
                                    <label htmlFor="" className="">Cap (*)</label>
                                    <label htmlFor="" className="">Località (*)</label>
                                </>
                                :
                                <label htmlFor="" className="">Localita e CAP *</label>
                            }
                            <label htmlFor="" className="">Telefono</label>
                        </div>
                        <div className=" w-full flex flex-col gap-[1em]">
                            <span className=''>
                                <input type="text" className="text-[11px] w-[205px] font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Dai un nome a questo indirizzo (es. Casa, Ufficio, ecc...) ' name='referimento' onChange={handleChangeIndirizzo} value={referimento} />Fermo Deposito?
                            </span>
                            <input type="text" className="text-[11px]  font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Inserisci il Destinatario' name='destinatario' onChange={handleChangeIndirizzo} value={destinatario} />
                            <input type="text" className="text-[11px]  font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Inserisci il tuo indirizzo' name='indirizzo' onChange={handleChangeIndirizzo} value={indirizzo} />
                            <select name="idNazione" className="w-[200px] text-[14px]  font-normal border-[1px] border-[#ddd] mr-2 focus:outline-none px-[3px] rounded-[2px]" value={idNazione} onChange={handleChangeIndirizzo}>
                                {listNazionii.map((item, index) => (
                                    <option value={item.idNazione} className="" key={index}>{item.nazione}</option>
                                ))}
                            </select>
                            {idNazione == 0 ?
                                <>
                                    <input type="text" className="text-[11px] w-[90px]  font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Inserisci il tuo CAP' name='cap' value={cap ? cap : ''} onChange={handleChangeIndirizzo} />
                                    <select name="idCap" id="" className="w-[200px] text-[14px]  font-normal border-[1px] border-[#ddd] mr-2 focus:outline-none px-[3px] rounded-[2px]" value={idCap} onChange={handleChangeIndirizzo}>
                                        {listLocalita.map((item, index) => (
                                            <option value={item.idCap} className="" key={index}>{item.riassunto}</option>
                                        ))}
                                    </select></> :
                                <input type="text" className="text-[11px] w-[90px]  font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Inserisci il tuo CAP' name='localitaCap' value={localitaCap ? localitaCap : ''} onChange={handleChangeIndirizzo} />
                            }
                            <input type="text" className="text-[11px] w-[205px]  font-normal border-[1px] border-[#4f4f4f] mr-2 focus:outline-none px-[3px] rounded-[2px]" placeholder='Inserisci un numero di Telefono' name='telefono' value={telefono} onChange={handleChangeIndirizzo} />
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center flex-col gap-3">
                        {error && <p className="text-[12px] font-bold flex items-center"><img src={GLOBAL_CONFIG.IMG_IP + "/img/icoWarning32.png"} />ATTENZIONE! Tutti i campi contrassegnati dall'asterisco sono obbligatori</p>}
                        <button className="bg-[#f58220] flex text-[11px] items-center justify-center gap-2 uppercase rounded-[4px] leading-[30px] text-[#fff] w-[120px]" type='submit' onClick={handleSalvaIndirizzo}>
                            <img src={GLOBAL_CONFIG.IMG_IP + "/img/icoSaveW.png"} className='w-[22px] h-[22px]' />
                            Salva
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalAggiungiIndirizzo