import { useEffect, useState } from "react"
import { getSvgImageService, httpGetAggiornaReview, httpGetCalcolaTuto, httpGetColoreStampa, httpGetDescrizioniDinamica, httpGetDisabledProfundita, httpGetFormatoArray, httpGetFormatoParams, httpGetFormatoStr, httpGetHelperData, httpGetOpzioni, httpGetOpzioniCarrello, httpGetProdottoConsigliato, httpGetRecensioni, httpGetShowAlertMassimo, httpGetShowBloccoMisure, httpGetShowColumTable, httpGetShowFogliPagine, httpGetShowOpzioni, httpGetShowOrientmiento, httpGetShowQtaCustom, httpGetShowSVG, httpGetShowTabellaPrezzi, httpGetStampaCaldo, httpGetTableDate, httpGetTablePrezzi, httpGetTipoCarta } from "../services"
import { httpGetUtente } from "../../../services/UtenteService"
import { httpGetTotaleProvisorio } from "../../carrello/services/Services"
import { useNavigate, useParams } from "react-router-dom"
import { InitialValuesProdotto, OptionsSelect } from "../../formProdotto/interfaces/prodotto"
import { IFormato } from "../interface/Formato"
import { TipoDiCarta } from "../interface/tipoCarta"
import { ColoreStampa } from "../interface/coloreStampa"
import { OptionsSelectS, StaCalOpz } from "../interface/stampaCaldo"
import { TableDate } from "../interface/tableDate"
import { TablePrezzi } from "../interface/table"
import { Opzioni } from "../interface/opzioni"
import { DataGetCalcolaTuto } from "../interface/calcolaTuto"
import { DataResponseGetUtente } from "../../../interface/Utente"
import { enOperationFrame } from "../../../enHelpers/enOperationFrame"
import { GLOBAL_CONFIG } from "../../../_config/global"
import { Datum, Sotoblocco } from "../interface/fogliPagine"

const initialValues: InitialValuesProdotto = {
    base: null,
    depth: null,
    height: null,
    quantity: null,
    tipoCarta: null,
    coloreStampa: null,
    Format: "",
    facciatePagine: null,
    formatoS: null,
    iva: 0,
    orientamiento: 0,
    nome: '',
    note: '',
    qtaSelezinata: 0,
};

const useConfigProdottoV2 = () => {


    let { idPrev, idFormProd, IdTipoCarta, IdColoreStampa, idFogli, idUt, idFustella, idCategoria, idBaseEtiquete, idAltezaEtiquete } = useParams();

    const navigate = useNavigate();

    //*useStatesPrimarios
    const [initialState, setInitialState] = useState(initialValues);

    const [formatoList, setFormatoList] = useState<IFormato[]>([])
    const [tipoCartaList, setTipoCartaList] = useState<TipoDiCarta[]>([])
    const [coloreStampaList, setColoreStampaList] = useState<ColoreStampa[]>([])
    const [stampaCalOpz, setStampaCalOpz] = useState<StaCalOpz[]>([])
    const [tablaDate, setTablaDate] = useState<TableDate>()
    const [tablaDataPrezzi, setTablaDataPrezzi] = useState<TablePrezzi[]>([]);
    const [opzioniList, setOpzioniList] = useState<Opzioni[]>([])
    const [calcolaTuto, setCalcolaTuto] = useState<DataGetCalcolaTuto>()
    const [utenteData, setUtenteData] = useState<DataResponseGetUtente>()
    const [copertina, setCopertina] = useState([{
        descrizioneEstesa: '',
        idTipoCartaC: 0,
        imgRif: '',
        tipologia: '',
        text: ''
    }])

    const [sotoblocco, setSotoblocco] = useState([{
        descrizioneEstesa: '',
        idTipoCartaD: 0,
        imgRif: '',
        tipologia: '',
        text: ''
    }])
    const [showFlogliPagine, setShowFlogiPagine] = useState<Datum[]>()


    var [valuesStampaCaldoOpz, setValuesStampaCaldoOpz] = useState<Record<string, number>>({});

    //*useStatesSecundarias
    const [showOpzzioni, setShowOpzzioni] = useState<number>()

    const [selectedImage, setSelectedImage] = useState('');
    const [labelFogli, setLabelFogli] = useState<string>('');

    const [openLoading, setOpenLoading] = useState(false)
    const [viewRow, setviewRow] = useState(true)

    const [showFaciatePagine, setShowFaciatePagine] = useState<boolean>()
    const [showQtaCustom, setShowQtaCustom] = useState<boolean>()

    const [showSotoblocco, setShowSotoblocco] = useState<number>();
    //*FUNCION HANDLE PRIMARIA 
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value, name } = evt.target;
        switch (name) {
            case "formatoS":
                valuesStampaCaldoOpz = {};
                initialState.formatoS = Number(value);
                handleChangeFormato(Number(idPrev), Number(value), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? Number(initialState.iva) : 0, valuesStampaCaldoOpz, Number(idUt));
                break;
            case "tipoCarta":
                valuesStampaCaldoOpz = {};
                console.log(valuesStampaCaldoOpz);
                initialState.tipoCarta = Number(value);
                handleChangeTipoCarta(Number(idPrev), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), Number(value), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? Number(initialState.iva) : 0, valuesStampaCaldoOpz, Number(idUt));

                break;
            case "coloreStampa":
                setValuesStampaCaldoOpz({});
                handleChangeColoreStampa(Number(idPrev), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), Number(value), initialState.tipoCarta != null ? Number(initialState.tipoCarta) : Number(IdTipoCarta), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? Number(initialState.iva) : 0, valuesStampaCaldoOpz, Number(idUt));
                break;
            case "iva":
                initialState.iva = Number(value);
                handleChangeIva(Number(idPrev), initialState.tipoCarta != null ? Number(initialState.tipoCarta) : Number(IdTipoCarta), initialState.coloreStampa != null ? initialState.coloreStampa : Number(IdColoreStampa), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), Number(value), valuesStampaCaldoOpz, Number(idUt));
                break;
            default:

                valuesStampaCaldoOpz[name] = Number(value);
                //console.log(valuesStampaCaldoOpz);
                if (parseInt(value) != 0) {
                    handleChangeStampaCaldoOPZ(valuesStampaCaldoOpz);
                } else {
                    valuesStampaCaldoOpz[name] = 0;
                }
                break;
        }

    }

    //* FUNCIONES HANDLE SECUNDARIAS

    const handleData = async () => {
        try {
            setOpenLoading(true)
            await handleGetFormato(Number(idPrev));
            await handleGetTipoCarta(Number(idPrev), Number(idFormProd));
            await handleGetColoriStampa(Number(idPrev), Number(idFormProd), Number(IdTipoCarta));
            await handleGetStampaCaldo(Number(idPrev), Number(idFormProd), Number(IdTipoCarta), Number(IdColoreStampa));
            await handleGetTableDate(Number(idPrev), Number(idFormProd), Number(IdTipoCarta), Number(IdColoreStampa), 0, 0, 0);
            await handleGetOpzioni(Number(idPrev), Number(idFormProd), Number(IdTipoCarta), Number(IdColoreStampa), 0, 0, 0);
            await handleGetTablePrezzo(Number(idPrev), Number(IdTipoCarta), Number(IdColoreStampa), Number(idFormProd), 0, 0, 0, 0, Number(idFogli), 0, valuesStampaCaldoOpz, Number(idUt));
            await handleGetCalcolaTutto("N", 0, 0, Number(idPrev), Number(IdTipoCarta), Number(IdColoreStampa), Number(idFormProd), 0, 0, 0, 0, Number(idFogli), 0, valuesStampaCaldoOpz, Number(idUt));
            await handleGetUtn(Number(idUt));
            await handleGetFogliPagine(Number(idPrev), Number(IdTipoCarta), Number(IdColoreStampa), Number(idFormProd), 0, 0, 0, 0, Number(idFogli), 0, valuesStampaCaldoOpz, Number(idUt),)
            setOpenLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeFormato = async (IdPrevHCF: number, IdFormatoHCF: number, BaseHCF: number, HeightHDF: number, DepthHDF: number, quantityHDF: number, idFogliHDF: number, ivaHDF: number, valuesStapaCaldoOpzHDF: Record<string, number>, idUt: number) => {
        setOpenLoading(true);


        const IdTipoCarta = await handleGetTipoCarta(IdPrevHCF, IdFormatoHCF);
        const IdColoreStampa = await handleGetColoriStampa(IdPrevHCF, IdFormatoHCF, IdTipoCarta[0].idTipoCarta);
        const stampacLadoOPZ = await handleGetStampaCaldo(IdPrevHCF, IdFormatoHCF, IdTipoCarta[0].idTipoCarta, IdColoreStampa[0].idColoreStampa);
        await handleGetTablePrezzo(IdPrevHCF, IdTipoCarta[0].idTipoCarta, IdColoreStampa[0].idColoreStampa, IdFormatoHCF, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        await handleGetOpzioni(IdPrevHCF, IdFormatoHCF, IdTipoCarta[0].idTipoCarta, IdColoreStampa[0].idColoreStampa, BaseHCF, DepthHDF, HeightHDF);
        await handleGetCalcolaTutto("N", 0, 0, IdPrevHCF, IdTipoCarta[0].idTipoCarta, IdColoreStampa[0].idColoreStampa, IdFormatoHCF, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        initialState.tipoCarta = IdTipoCarta[0].idTipoCarta;
        initialState.coloreStampa = IdColoreStampa[0].idColoreStampa;
        if (initialState.formatoS != null) {
            const a = formatoList.find(x => x.idFormProd == initialState.formatoS);
            setSelectedImage(a ? a.imgRif : "");
        }
        setOpenLoading(false);
    }

    const handleChangeTipoCarta = async (IdPrevHTC: number, IdFormatoHTC: number, IdTipoCartaHTC: number, BaseHCF: number, HeightHDF: number, DepthHDF: number, quantityHDF: number, idFogliHDF: number, ivaHDF: number, valuesStapaCaldoOpzHDF: Record<string, number>, idUt: number) => {
        setOpenLoading(true);
        const IdColoreStampa = await handleGetColoriStampa(IdPrevHTC, IdFormatoHTC, IdTipoCartaHTC);
        await handleGetStampaCaldo(IdPrevHTC, IdFormatoHTC, IdTipoCartaHTC, IdColoreStampa[0].idColoreStampa);
        await handleGetTablePrezzo(IdPrevHTC, IdTipoCartaHTC, IdColoreStampa[0].idColoreStampa, IdFormatoHTC, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        await handleGetCalcolaTutto("N", 0, 0, IdPrevHTC, IdTipoCartaHTC, IdColoreStampa[0].idColoreStampa, IdFormatoHTC, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        setOpenLoading(false);
    }

    const handleChangeColoreStampa = async (IdPrevHCS: number, IdFormatoHCS: number, IdColoreStampaHCS: number, IdTipoCartaHCS: number, BaseHCF: number, HeightHDF: number, DepthHDF: number, quantityHDF: number, idFogliHDF: number, ivaHDF: number, valuesStapaCaldoOpzHDF: Record<string, number>, idUt: number) => {
        setOpenLoading(true);
        await handleGetStampaCaldo(IdPrevHCS, IdFormatoHCS, IdTipoCartaHCS, IdColoreStampaHCS);
        await handleGetTablePrezzo(IdPrevHCS, IdTipoCartaHCS, IdColoreStampaHCS, IdFormatoHCS, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        await handleGetCalcolaTutto("N", 0, 0, IdPrevHCS, IdTipoCartaHCS, IdColoreStampaHCS, IdFormatoHCS, BaseHCF, DepthHDF, HeightHDF, quantityHDF, idFogliHDF, ivaHDF, valuesStapaCaldoOpzHDF, idUt);
        setOpenLoading(false);
    };

    const handleChangeIva = async (idPrevTP: number, idTipoCartaTP: number, idColoreStampaTP: number, idFormProdTP: number, baseTP: number, depthTP: number, heightTP: number, quantityTP: number, idFogliTP: number, ivaTP: number, valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {
        setOpenLoading(true);
        await handleGetTablePrezzo(idPrevTP, idTipoCartaTP, idColoreStampaTP, idFormProdTP, baseTP, depthTP, heightTP, quantityTP, idFogliTP, ivaTP, valuesStapaCaldoOpzTP, idUt);
        setOpenLoading(false);
    }

    const handleChangeStampaCaldoOPZ = async (valuesStampaCaldoOpzHCO: Record<string, number>) => {
        setOpenLoading(true);
        await handleGetTablePrezzo(Number(idPrev), initialState.tipoCarta != null ? Number(initialState.tipoCarta) : Number(IdTipoCarta), initialState.coloreStampa != null ? Number(initialState.coloreStampa) : Number(IdColoreStampa), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? Number(initialState.iva) : 0, valuesStampaCaldoOpzHCO, Number(idUt));
        await handleGetCalcolaTutto("N", 0, 0, Number(idPrev), initialState.tipoCarta != null ? Number(initialState.tipoCarta) : Number(IdTipoCarta), initialState.coloreStampa != null ? Number(initialState.coloreStampa) : Number(IdColoreStampa), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? Number(initialState.iva) : 0, valuesStampaCaldoOpzHCO, Number(idUt))
        setOpenLoading(false);
    }

    const handleGetFormato = async (idPrevHF: number) => {
        const response = await getFormatoList(idPrevHF);
        setFormatoList(response.data);
        setSelectedImage(response.data[0].imgRif);
        return response.data;
    }
    const handleOptionFormato = () => {
        if (formatoList.length === 0) return [];
        const options: OptionsSelect[] = formatoList.map(elem => {
            return {
                label: elem.formato,
                value: elem.idFormProd,
                description: elem.descrizioneHTML,
                image: elem.imgRif,
                formatoCartaStr: elem.formatoCartaStr,
                pdfTemplate: elem.pdfTemplate,
            }
        })

        return options;
    }

    const handleOrientamiento = () => {
        const option: OptionsSelect[] = [
            {
                value: 0,
                label: 'Orizzontale',
            },
            {
                value: 1,
                label: 'Verticale',
            }
        ]
        return option;
    }

    const handleGetTipoCarta = async (idPrevTC: number, idFormProdTC: number) => {
        const response = await getTipoCartaList(idPrevTC, idFormProdTC);
        setTipoCartaList(response.data);
        return response.data;
    }

    const handleOptionTipoCarta = () => {
        if (tipoCartaList.length === 0) return []
        const options: OptionsSelect[] = tipoCartaList.map(elem => {
            return {
                label: elem.tipologia,
                value: elem.idTipoCarta,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        return options
    }

    const handleGetColoriStampa = async (idPrevCS: number, idFormProdCS: number, IdTipoCartaCS: number) => {
        const response = await getColoreStampa(idPrevCS, idFormProdCS, IdTipoCartaCS);
        setColoreStampaList(response.data);
        return response.data;
    }

    const handleOptionColoriStampa = () => {
        if (coloreStampaList.length === 0) return []
        const options: OptionsSelect[] = coloreStampaList.map(elem => {
            return {
                label: elem.descrizione,
                value: elem.idColoreStampa,
                description: elem.descrizione,
                image: elem.imgrif
            }
        })
        return options
    }

    const handleGetStampaCaldo = async (idPrevSCP: number, idFormProdSCP: number, idTipoCartaSCP: number, idColoreStampaSCP: number) => {
        const response = await getStampaCaldoPlaz(idPrevSCP, idFormProdSCP, idTipoCartaSCP, idColoreStampaSCP);
        setStampaCalOpz(response.data);
        return response.data;
    }

    const handleOptionsStampaCaldo = (optionsSelect: OptionsSelectS[]) => {
        if (optionsSelect.length === 0) return []
        const options: OptionsSelect[] = optionsSelect.map(elem => {
            return {
                label: elem.descrizione,
                value: elem.idLavoro,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        //setValueMapStampaOpz({...valueMapStampaOpz,options})
        return options;
    }

    const handleGetTableDate = async (idPrevTD: number, idFormProdTD: number, idTipoCartaTD: number, idColoreStampaTD: number, baseTD: number, depthTD: number, heightTD: number) => {
        const response = await getTableDate(idPrevTD, idFormProdTD, idTipoCartaTD, idColoreStampaTD, baseTD, depthTD, heightTD, Number(idUt));
        setTablaDate(response.data);
        return response.data;
    }

    const handleGetTablePrezzo = async (idPrevTP: number, idTipoCartaTP: number, idColoreStampaTP: number, idFormProdTP: number, baseTP: number, depthTP: number, heightTP: number, quantityTP: number, idFogliTP: number, ivaTP: number, valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {

        const response = await getTablePrezzi(idPrevTP, idTipoCartaTP, idColoreStampaTP, idFormProdTP, baseTP, depthTP, heightTP, quantityTP, idFogliTP, ivaTP, valuesStapaCaldoOpzTP, idUt)
        setTablaDataPrezzi(response.data);
        return response.data;
    }

    const handleGetOpzioni = async (idPrevO: number, idFormProdO: number, idTipoCartaO: number, idColoreStampaO: number, baseO: number, depthO: number, heightO: number) => {
        //const showOpzioni = await getShowOpzioni(idPrevO);
        if (Number(idFustella) === 0) {
            const response = await getOpzioniList(idPrevO, idFormProdO, idTipoCartaO, idColoreStampaO, baseO, depthO, heightO);
            setOpzioniList(response.data);
            return response.data
        }
        // setShowOpzzioni(showOpzioni.data);
        // return showOpzioni;
    }

    const handleOptionsOpzioni = (): OptionsSelect[] => {
        if (opzioniList.length === 0) return []
        const options: OptionsSelect[] = opzioniList.map(elem => {
            return {
                label: elem.descrizione,
                value: elem.idLavoro,
                description: elem.descrizioneEstesa,
                image: elem.imgRif,
                catLav: elem.catLav.descrizione
            }
        })
        return options
    }

    const handleGetCalcolaTutto = async (code: string, qtaSlezionata: number, prezzoOrdini: number, idPrevTP: number, idTipoCartaTP: number, idColoreStampaTP: number, idFormProdTP: number, baseTP: number, depthTP: number, heightTP: number, quantityTP: number, idFogliTP: number, ivaTP: number, valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {
        const response = await getCalcolaTuto(code, qtaSlezionata, prezzoOrdini, idPrevTP, idTipoCartaTP, idColoreStampaTP, idFormProdTP, baseTP, depthTP, heightTP, quantityTP, idFogliTP, ivaTP, valuesStapaCaldoOpzTP, idUt,);
        setCalcolaTuto(response.data)
        return response.data;
    }

    const handleGetUtn = async (IdUt: number) => {
        const response = await getUtente(IdUt);
        setUtenteData(response)
        return response
    }

    const handlePrezzoTable = async (code: string, qtaZelezionata: number, prezzo: number) => {
        setOpenLoading(true);
        await handleGetCalcolaTutto(code, qtaZelezionata, prezzo, Number(idPrev), initialState.tipoCarta != null ? Number(initialState.tipoCarta) : Number(IdTipoCarta), initialState.coloreStampa != null ? initialState.coloreStampa : Number(IdColoreStampa), initialState.formatoS != null ? Number(initialState.formatoS) : Number(idFormProd), initialState.base != null ? Number(initialState.base) : 0, initialState.base != null ? Number(initialState.base) : 0, initialState.depth != null ? Number(initialState.depth) : 0, initialState.quantity != null ? Number(initialState.quantity) : 0, Number(idFogli), initialState.iva != null ? initialState.iva : 0, valuesStampaCaldoOpz, Number(idUt));
        setOpenLoading(false);
    }

    const handleOperationFrame = (operation: enOperationFrame, uri?: string, navigateUri?: string) => {
        if (utenteData) {
            window.parent.postMessage({ operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
            if (navigate) {
                navigate(`${navigateUri}`);
            }
        } else {
            window.parent.postMessage({ operation: enOperationFrame.redirectLogin, uri: uri }, GLOBAL_CONFIG.IMG_IP);
        }
    }

    const handleGetFogliPagine = async (IdPrevSFP: number, IdTipoCartaSFP: number, IdColoreStampaSFP: number, IdFormProdSFP: number, BaseSFP: number, DepthSFP: number, HeightSFP: number, QuantitySFP: number, FaciatePagineSFP: number, IvaSFP: number, valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {
        const response = await getShowFogliPagine(IdPrevSFP, IdTipoCartaSFP, IdColoreStampaSFP, IdFormProdSFP, BaseSFP, DepthSFP, HeightSFP, QuantitySFP, FaciatePagineSFP, IvaSFP, valuesStapaCaldoOpzTP, idUt);
        if (response.data.copertina.showCopertina) {
            setCopertina([{
                ...copertina[0],
                idTipoCartaC: response.data.copertina.showCopertina,
                descrizioneEstesa: response.data.copertina.dezcrzzione,
                imgRif: response.data.copertina.imgRif,
                tipologia: response.data.copertina.tipologia,
                text: response.data.copertina.textCopertina,
            }]);
        }
        if (response.data.sotoblocco.showSotoblocco) {
            setSotoblocco([{
                ...sotoblocco[0],
                idTipoCartaD: response.data.sotoblocco.showSotoblocco,
                descrizioneEstesa: response.data.sotoblocco.dezcrzzione,
                imgRif: response.data.sotoblocco.imgRif,
                tipologia: response.data.sotoblocco.tipologia,
                text: response.data.sotoblocco.textSottoBlocco,
            }]);
        }
        
        setShowSotoblocco(response.data.sotoblocco.showSotoblocco)
        setShowFaciatePagine(response.data.showFogliPagine);
        setLabelFogli(response.data.fogliLabel);
        setShowFlogiPagine(response.data.data)
    }

    const handleOptionsCopertina = () => {
        if (copertina.length === 0) return []
        const option: OptionsSelect[] = copertina.map((elem) => {
            return {
                label: elem.tipologia,
                value: elem.idTipoCartaC,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        return option
    }

    const handleOptionSottoblocco = () => {
        if (sotoblocco.length === 0) return []
        const option: OptionsSelect[] = sotoblocco.map((elem) => {
            return {
                label: elem.tipologia,
                value: elem.idTipoCartaD,
                description: elem.descrizioneEstesa,
                image: elem.imgRif,
                opzione: elem.text,
            }
        })
        return option
    }

    const handleFogliPagine = () => {
        if (showFlogliPagine === undefined) return []
        if (showFlogliPagine.length === 0) return []
        const options: OptionsSelect[] = showFlogliPagine.map(elem => {
            return {
                label: elem.voceTxt,
                value: elem.valoreRif,

            }
        })

        return options;
    }

    const handleForValuesStampaCaldoOPZ = (valuesStampaCaldoOpzFor: Record<string, number>) => {
        const arrayStampa: OptionsSelect[] = [];
        Object.keys(valuesStampaCaldoOpzFor).forEach((key) => {
            const value = valuesStampaCaldoOpzFor[key];
            const objVaStampa: OptionsSelect = {
                label: key,
                value: value,
            }
            arrayStampa.push(objVaStampa);
        })
        return arrayStampa;
    }

    const handleGetShowQtaCustom =async (IdPrevSQC: number, IdFormProdSQC: number, IdTipoCartaSQC: number, IdColoreStampaSQC: number) => {
        const response = await getShowQtaCustom(IdPrevSQC,IdFormProdSQC,IdTipoCartaSQC,IdColoreStampaSQC);
        setShowQtaCustom(response?.data);
    }

    useEffect(() => {
        handleData();
    }, [])


    return {
        //*States Objects
        initialState, stampaCalOpz, tablaDate, openLoading, tablaDataPrezzi, valuesStampaCaldoOpz, selectedImage, viewRow, calcolaTuto, utenteData,labelFogli,showSotoblocco,showFaciatePagine,showQtaCustom,
        //*Functions 
        setviewRow, handleChange, handleOptionFormato, handleOrientamiento, handleOptionTipoCarta, handleOptionColoriStampa, handleOptionsStampaCaldo, handleOptionsOpzioni, handlePrezzoTable, handleOperationFrame, handleOptionsCopertina, handleOptionSottoblocco,handleFogliPagine
    }
}

export default useConfigProdottoV2


/**
     * * !!!!!!!!!!!!!!!Funciones GET's hacia las API!!!!!!!!!!!!!!!!!!!!!
     */
const getTipoCartaList = async (idPrevTC: number, idFormProdTC: number) => {
    const tipoCartaList = await httpGetTipoCarta(
        idPrevTC,
        idFormProdTC,
    )
    return tipoCartaList
}

const getColoreStampa = async (idPrevCS: number, idFormProdCS: number, IdTipoCartaCS: number) => {
    const coloreStampaList = await httpGetColoreStampa(
        Number(idPrevCS),
        Number(idFormProdCS),
        Number(IdTipoCartaCS),
    )
    return coloreStampaList;
}

const getOpzioniList = async (idPrevO: number,
    idFormProdO: number,
    idTipoCartaO: number,
    idColoreStampaO: number,
    baseO: number,
    depthO: number,
    heightO: number) => {
    const opzioniList = await httpGetOpzioni(
        idPrevO,
        idFormProdO,
        idTipoCartaO,
        idColoreStampaO,
        baseO,
        depthO,
        heightO,
    )
    return opzioniList

}

const getStampaCaldoPlaz = async (
    idPrevSCP: number,
    idFormProdSCP: number,
    idTipoCartaSCP: number,
    idColoreStampaSCP: number) => {
    //debugger
    const stampaCaldoList = await httpGetStampaCaldo(
        idPrevSCP,
        idFormProdSCP,
        idTipoCartaSCP,
        idColoreStampaSCP,
    )
    return stampaCaldoList;
}

const getTableDate = async (
    idPrevTD: number,
    idFormProdTD: number,
    idTipoCartaTD: number,
    idColoreStampaTD: number,
    baseTD: number,
    depthTD: number,
    heightTD: number, idUt: number) => {
    const tableDateList = await httpGetTableDate(
        idUt,
        idPrevTD,
        idFormProdTD,
        idTipoCartaTD,
        idColoreStampaTD,
        baseTD,
        depthTD,
        heightTD,
    )
    return tableDateList
}

const getShowColumnTable = async (idPrevSCT: number) => {
    const showColumTable = await httpGetShowColumTable(idPrevSCT);
    return showColumTable;
}

const getTablePrezzi = async (
    idPrevTP: number,
    idTipoCartaTP: number,
    idColoreStampaTP: number,
    idFormProdTP: number,
    baseTP: number,
    depthTP: number,
    heightTP: number,
    quantityTP: number,
    idFogliTP: number,
    ivaTP: number,
    valuesStapaCaldoOpzTP: Record<string, number>, idUt: number
) => {
    const tablePrezziList = await httpGetTablePrezzi(
        idPrevTP,
        idTipoCartaTP,
        idColoreStampaTP,
        idFormProdTP,
        baseTP,
        depthTP,
        heightTP,
        quantityTP,
        idFogliTP,
        ivaTP,
        idUt,
        valuesStapaCaldoOpzTP,
    )
    return tablePrezziList
}

const getShowTablePrezzi = async (idPrevSTP: number, idFormProdSTP: number, idTipoCartaSTP: number, idColoreStampaSTP: number, baseSTP: number, depthSTP: number, heightSTP: number) => {
    const showTablePlrezzi = await httpGetShowTabellaPrezzi(
        idPrevSTP,
        idFormProdSTP,
        idTipoCartaSTP,
        idColoreStampaSTP,
        baseSTP,
        depthSTP,
        heightSTP,
    )
    return showTablePlrezzi
}

const getShowOrientamiento = async (idPrevO: number, idFormPrdO: number, idTipocarta: number, idColoreStampa: number) => {
    const showOrientamiento = await httpGetShowOrientmiento(idPrevO, idFormPrdO, idTipocarta, idColoreStampa);
    return showOrientamiento;
}

const getFormatoList = async (idPrevF: number) => {
    //console.log('idPrevF', idPrevF);
    const formatoList = await httpGetFormatoArray(idPrevF);
    return formatoList;
}

const getShowBloccoMisure = async (IdPrevSBM: number, IdFormPrdSBM: number, IdTipocartaSBM: number, IdColoreStampaSBM: number) => {
    const showBloccoMisure = await httpGetShowBloccoMisure(IdPrevSBM, IdFormPrdSBM, IdTipocartaSBM, IdColoreStampaSBM);
    return showBloccoMisure;
}

const getDisableProfundita = async (IdPrevDP: number) => {
    const disabledProfundita = await httpGetDisabledProfundita(IdPrevDP)
    return disabledProfundita;
}

const getShowFogliPagine = async (IdPrevSFP: number, IdTipoCartaSFP: number, IdColoreStampaSFP: number, IdFormProdSFP: number, BaseSFP: number, DepthSFP: number, HeightSFP: number, QuantitySFP: number, FaciatePagineSFP: number, IvaSFP: number, valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {
    const showFogliPagine = await httpGetShowFogliPagine(IdPrevSFP, IdTipoCartaSFP, IdColoreStampaSFP, IdFormProdSFP, BaseSFP, DepthSFP, HeightSFP, QuantitySFP, FaciatePagineSFP, IvaSFP, idUt, valuesStapaCaldoOpzTP)

    return showFogliPagine;
}

const getShowOpzioni = async (IdPrevSO: number) => {
    const showOpzioni = await httpGetShowOpzioni(IdPrevSO)
    return showOpzioni;
}

const getFormatpDinamico = async (idCategoria: string) => {
    const formatoParams = await httpGetFormatoParams(idCategoria)
    return formatoParams;
}

const getShowSVG = async (IdPrevSSVG: number) => {
    const showSVG = await httpGetShowSVG(IdPrevSSVG)
    return showSVG;
}

const getSVG = async (BaseSVG: number, DepthSVG: number, HeightSVG: number, IdPrevSVG: number) => {
    const svg = await getSvgImageService(BaseSVG, DepthSVG, HeightSVG, IdPrevSVG);
    return svg;
}

const getShowQtaCustom = async (IdPrevSQC: number, IdFormProdSQC: number, IdTipoCartaSQC: number, IdColoreStampaSQC: number) => {
    const showQtaCustom = await httpGetShowQtaCustom(IdPrevSQC, IdFormProdSQC, IdTipoCartaSQC, IdColoreStampaSQC)
    return showQtaCustom;
}

const getShowAlertMassimo = async (IdPrevSAM: number, IdTipoCartaSAM: number, IdColoreStampaSAM: number, IdFormProd: number, BaseSAM: number, DepthSAM: number, HeightSAM: number, QuantitySAM: number, FaciatePagineSAM: number, Iva: number, valuesStampaCaldoOpz: Record<string, number>, idUt: number) => {
    const showAlertMassimo = await httpGetShowAlertMassimo(IdPrevSAM, IdTipoCartaSAM, IdColoreStampaSAM, IdFormProd, BaseSAM, DepthSAM, HeightSAM, QuantitySAM, FaciatePagineSAM, Iva, idUt, valuesStampaCaldoOpz)

    return showAlertMassimo;
}

const getUtente = async (idUt: number) => {
    const responseUtente = await httpGetUtente(idUt);
    return responseUtente.data;
}

const getCalcolaTuto = async (
    code: string,
    qtaSlezionata: number,
    prezzoOrdini: number,
    idPrevTP: number,
    idTipoCartaTP: number,
    idColoreStampaTP: number,
    idFormProdTP: number,
    baseTP: number,
    depthTP: number,
    heightTP: number,
    quantityTP: number,
    idFogliTP: number,
    ivaTP: number,
    valuesStapaCaldoOpzTP: Record<string, number>, idUt: number) => {
    const responseCalcolaTuto = await httpGetCalcolaTuto(code,
        qtaSlezionata,
        prezzoOrdini,
        idPrevTP,
        idTipoCartaTP,
        idColoreStampaTP,
        idFormProdTP,
        baseTP,
        depthTP,
        heightTP,
        quantityTP,
        idFogliTP,
        ivaTP,
        valuesStapaCaldoOpzTP, idUt)

    return responseCalcolaTuto;
}

const getHelpersData = async (IdPrevHD: number, IdFormProdHD: number, IdTipoCartaHD: number, IdColoreStampaHD: number, IdFogliHD: number) => {
    const respondeHelperData = await httpGetHelperData(IdPrevHD, IdFormProdHD, IdTipoCartaHD, IdColoreStampaHD, IdFogliHD);

    return respondeHelperData;
}

const getFormatoStr = async (IdPrevFS: number, IdFormProdFS: number, IdTipoCartaFS: number, IdColoreStampaFS: number, BaseFS: number | null | undefined, ProfonditaFS: number | null | undefined, Altezza: number | null | undefined) => {
    const responseFormatoStr = await httpGetFormatoStr(IdPrevFS, IdFormProdFS, IdTipoCartaFS, IdColoreStampaFS, BaseFS, ProfonditaFS, Altezza)

    return responseFormatoStr;
}

const getOpzioniStatic = async (IdPrevOST: number, IdFormProdOST: number, IdTipoCartaOST: number, IdColoreStampaOST: number) => {
    const responseOpzioniStatic = await httpGetOpzioniCarrello(IdPrevOST, IdFormProdOST, IdTipoCartaOST, IdColoreStampaOST)
    return responseOpzioniStatic;
}

const geProdottoConsigliato = async (IdPrevPC: number, IdFormProdPC: number, IdTipoCartaPC: number, IdColoreStampaPC: number, uriPC: string) => {
    const responseProdottoConsigliato = await httpGetProdottoConsigliato(IdPrevPC, IdFormProdPC, IdTipoCartaPC, IdColoreStampaPC, uriPC)
    return responseProdottoConsigliato;
}

const getRecensioni = async (IdPrevR: number, IdFormProdR: number, IdTipoCartaR: number, IdColoreStampaR: number, uriR: string) => {
    const responseRecensioni = await httpGetRecensioni(IdPrevR, IdFormProdR, IdTipoCartaR, IdColoreStampaR, uriR)
    return responseRecensioni;
}

const getAggiornaReview = async (IdPrevAR: number, IdFormProdAR: number, IdTipoCartaAR: number, IdColoreStampaAR: number, uriAR: string) => {
    const responseAggiornaReview = await httpGetAggiornaReview(IdPrevAR, IdFormProdAR, IdTipoCartaAR, IdColoreStampaAR, uriAR)
    return responseAggiornaReview;
}

const getDescrizioniDinammica = async (IdPrevDD: number, IdFormProdDD: number, IdTipoCartaDD: number, IdColoreStampaDD: number) => {
    const responseDescrizioniDinamica = await httpGetDescrizioniDinamica(IdPrevDD, IdFormProdDD, IdTipoCartaDD, IdColoreStampaDD)
    return responseDescrizioniDinamica;
}

const getTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, Sconto: number | null, tipoPagamento: number, IdCorriere: number, cap?: string) => {
    try {
        ////console.log('lavori',dataTotale.TotalPrezo)
        const responseProvisorio = await httpGetTotaleProvisorio(idUt, TotalePeso, cero, TotalePrezzo, Sconto, tipoPagamento, IdCorriere, cap);
        return responseProvisorio.data;
    } catch (error) {
        //console.log('error use Carrello ', error)
    }
}