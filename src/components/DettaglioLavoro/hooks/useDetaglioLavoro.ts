import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { httpGetDettaglioLavoro, httpPutModificaNoteNome, httpPutUploadFileLavoro } from "../services/DetaglioLavoroServices";
import { DataGetDetaglioLavoro } from "../interfaces/GetDetaglioLavoro";
import { FormEditData, SectionEditable } from "../interfaces/PutEditNomeNote";
import { httpGetTokenPayPal } from "../../paypal/services/PayPalPServices";

const initialEditValues: FormEditData = {
    idLavoro: null,
    nomeLavoro: null,
    note: null,
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
    const [uploadOkStr, setUploadOkStr] = useState('')
    /*
        * <=================Get Services API'Rest===========================> 
    */
    const getDettaglioLavoro = async (IdLavoroDL: number) => {
        const response = await httpGetDettaglioLavoro(IdLavoroDL);
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
        console.log("TargetValue", event.target.name, event.target.value)

        const { name, value } = event.target;
        dataEdit.idLavoro = dataLavoro ? dataLavoro.idOrdine : 0;
        setDataEdit({
            ...dataEdit,
            [name]: value,
        })
    }


    /*
        *_______________Funciones Handle Secundarias______________
     */

    const handleDettaglioLavoro = async () => {
        const response = await getDettaglioLavoro(Number(idDettaglioLavoro));
        console.log(response)
        setDataLavoro(response);
    }

    const handlePutModificaNoteNome = async () => {

        console.log('dataEdit', dataEdit);
        const response = await putModificaNoteNome(dataEdit);
        if (response) {
            handleDettaglioLavoro()
            clearEditSection();
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
            if (dataLavoro?.fronteRetro) {
                if (selectedRetro === null) {
                    alert('Scegli un file per il Retro')
                    okayRetro = false;
                } else {
                    okayRetro = true;
                }

            }
            if (okayFronte && okayRetro) {
                setUploadOk(true);
                console.log('')
                const response = await putUploadFileLavoro(selectedFronte, selectedRetro, Number(idDettaglioLavoro));
                if (response) {
                    setSelectedFronte(null);
                    setSelectedRetro(null);
                    setUploadOk(false);
                    setUploadOkStr('ok');
                    navigate(`/dettaglioOrdine/${dataLavoro?.idConsegna}`)
                }
            }
        }
        catch (error) {
            throw new Error("")
        }
    }
    

    /*
        *_______________________UtilsFuncions_________________
     */

    const clearEditSection = () => {
        setDataEdit(initialEditValues);
        setSectionEditable(initialSectionEditable);
    }

    useEffect(() => {
        handleDettaglioLavoro();
    }, [])


    return {
        dataLavoro,
        dataEdit,
        setDataEdit,
        sectionEditable,
        setSectionEditable,
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
    }
}

export default useDetaglioLavoro