import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { httpGetDettaglioLavoro, httpPostPreventivo, httpPostTipoRetro, httpPutModificaNoteNome, httpPutUploadFileLavoro } from "../services/DetaglioLavoroServices";
import { DataGetDetaglioLavoro, TipoRetro } from "../interfaces/GetDetaglioLavoro";
import { FormEditData, SectionEditable } from "../interfaces/PutEditNomeNote";
import { httpGetTokenPayPal } from "../../paypal/services/PayPalPServices";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { GLOBAL_CONFIG } from "../../../_config/global";

const initialEditValues: FormEditData = {
    idLavoro: null,
    nomeLavoro: "",
    note: "",
}

const initialSectionEditable: SectionEditable = {
    name: '',
    open: false
}

const useDetaglioLavoro = () => {

    const { idDettaglioLavoro } = useParams();
    const navigate = useNavigate();

    const [dataLavoro, setDataLavoro] = useState<DataGetDetaglioLavoro>();
    const [dataEdit, setDataEdit] = useState(initialEditValues);
    const [sectionEditable, setSectionEditable] = useState(initialSectionEditable)
    const [selectedFronte, setSelectedFronte] = useState<File | null>(null);
    const [selectedRetro, setSelectedRetro] = useState<File | null>(null);
    const [uploadOk, setUploadOk] = useState(false);
    const [uploadOkStr, setUploadOkStr] = useState('');
    const [loadingDettaglio, setLoadingDettaglio] = useState(false);

    const [tipoRetroValue, setTipoRetroValue] = useState(0);
    const [preventivoValue, setPreventivoValue] = useState(false);
    /*
        * <=================Get Services API'Rest===========================> 
    */
    const getDettaglioLavoro = async (IdLavoroDL: number, uri: string) => {
        const response = await httpGetDettaglioLavoro(IdLavoroDL, uri);
        return response.data
    }

    /*
        *<=================Put Services API'Rest===========================>
    */

    const putModificaNoteNome = async (data: FormEditData) => {
        const response = await httpPutModificaNoteNome(data);
        return response.data
    }

    const putUploadFileLavoro = async (filePDF: File | null, retroPDF: File | null, IdLavoro: number) => {
        const response = await httpPutUploadFileLavoro(filePDF, retroPDF, IdLavoro);
        return response.data;
    }

    /*
        *Funcion Handle Primaria 
    */

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        const { name, value } = event.target;
        dataEdit.idLavoro = dataLavoro ? dataLavoro.idOrdine : 0;
        setDataEdit({
            ...dataEdit,
            [name]: value,
        })
    }

    const handleChangeTipoRetro = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setTipoRetroValue(Number(value));
        handlePostTipoRetro(Number(value));
    }

    useEffect(() => {
        if(tipoRetroValue !== 0) {
            setSelectedRetro(null);
        }
    }, [tipoRetroValue])
    

    const handleChangePreventivo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setPreventivoValue(checked);
        handlePostPreventivo(Number(checked));
    }

    /*
        *_______________Funciones Handle Secundarias______________
     */

    const handleDettaglioLavoro = async () => {
        setLoadingDettaglio(true)
        try {
            const response = await getDettaglioLavoro(Number(idDettaglioLavoro), GLOBAL_CONFIG.IMG_IP);
            setDataLavoro(response);
            setTipoRetroValue(response.tipoRetroSelectedValue);
            setPreventivoValue(response.chkPreventivoChecked)
            if (response) {
                setLoadingDettaglio(false);
                
            }
        } catch (err) {
            throw new Error(String(err))
        } finally {
        }
    }

    const handlePutModificaNoteNome = async () => {
        setLoadingDettaglio(true)
        const response = await putModificaNoteNome(dataEdit);
        if (response) {
            await handleDettaglioLavoro()
            clearEditSection();
            setLoadingDettaglio(false)
        }

    }

    const handlePutUploadFileLavoro = async () => {
        try {
            var okayFronte = true;
            var okayRetro = true;
            if (selectedFronte === null) {
                alert("Scegli un file per il Fronte")
                okayFronte = false;
            }
            //! dataLavoro?.fronteRetro
            
            if (tipoRetroValue === 0) {
                if (selectedRetro === null) {
                    alert('Scegli un file per il Retro')
                    okayRetro = false;
                } else {
                    okayRetro = true;
                }

            }
            if (okayFronte && (okayRetro || !dataLavoro?.fronteRetro)) {
                setLoadingDettaglio(true);

                setUploadOk(true);
                const response = await putUploadFileLavoro(selectedFronte, selectedRetro, Number(idDettaglioLavoro));
                if (response) {
                    setSelectedFronte(null);
                    setSelectedRetro(null);
                    setUploadOk(false);
                    setUploadOkStr('ok');
                    setLoadingDettaglio(false)
                    navigate(`/dettaglioOrdine/${dataLavoro?.idConsegna}`)
                }
            }
        }
        catch (error) {
            throw new Error("")
        } finally {
            //setLoadingDettaglio(false)
        }
    }

    const handlePostTipoRetro =async (IdTipoRetro:number) => {
        setLoadingDettaglio(true)
        try {
            const response = await httpPostTipoRetro(IdTipoRetro,Number(idDettaglioLavoro));
            if (response && dataLavoro) {
                const newdataLavoro = {...dataLavoro,lblRetroText:response.data.lblRetroText,lblRetroVisible:response.data.lblRetroVisible}
                setDataLavoro(newdataLavoro)
            }
        }catch (error){
            throw new Error(String(error))
        }finally{
            setLoadingDettaglio(false);
        }
    }

    const handlePostPreventivo = async (cheked:number) => {
        setLoadingDettaglio(true)
        try {
            const response = await httpPostPreventivo(cheked,Number(idDettaglioLavoro));
            if (response) {

                setLoadingDettaglio(false)
            }
        }catch (error){
            throw new Error(String(error))
        }finally{
            setLoadingDettaglio(false);
        }
    }
    /*
        *_______________________UtilsFuncions_________________
     */

    const clearEditSection = () => {
        setDataEdit(initialEditValues);
        setSectionEditable(initialSectionEditable);
    }

    const clearSelectFile = (idElement: string) => {

        const inputFile = document.getElementById(idElement);
        if (inputFile) {
            (inputFile as HTMLInputElement).value = '';

        }
    }

    const handleOperationFrame = (operation: enOperationFrame, uri?: string, nav?: string, id?: number) => {
        window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri, id: id }, GLOBAL_CONFIG.IMG_IP);
        if (nav) {
            navigate(nav);
        }
    }

    const handleInderito = () => {
        window.history.back();
    }

    const handleOpenNomeInput = (name: string) => {
        setSectionEditable({ name: name, open: true })
        setDataEdit({
            ...dataEdit,
            nomeLavoro: dataLavoro!.nomeLavoro,
            note: dataLavoro!.annotazioni,
            idLavoro: dataLavoro!.idOrdine,
        })
    }

    useEffect(() => {
        handleDettaglioLavoro();
    }, [])


    return {
        //*States
        dataLavoro, loadingDettaglio,tipoRetroValue,preventivoValue,
        dataEdit,
        //*Handle
        setDataEdit,
        sectionEditable,
        handleChange,
        handlePutModificaNoteNome,
        clearEditSection,
        selectedFronte,
        setSelectedFronte,
        selectedRetro,
        setSelectedRetro,
        handlePutUploadFileLavoro,
        uploadOk,
        setUploadOk,
        uploadOkStr,
        setUploadOkStr,
        clearSelectFile, handleOperationFrame, handleInderito, handleOpenNomeInput,handleChangeTipoRetro,handleChangePreventivo,
    }
}

export default useDetaglioLavoro