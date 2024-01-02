import { useEffect, useRef, useState } from 'react'
import { InitialValuesProdotto, OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import { useNavigate, useParams } from 'react-router-dom';
import { getSvgImageService, httpGetAggiornaReview, httpGetCalcolaTuto, httpGetColoreStampa, httpGetDescrizioniDinamica, httpGetDisabledProfundita, httpGetFormatoArray, httpGetFormatoParams, httpGetFormatoStr, httpGetHelperData, httpGetOpzioni, httpGetOpzioniCarrello, httpGetProdottoConsigliato, httpGetRecensioni, httpGetShowAlertMassimo, httpGetShowBloccoMisure, httpGetShowColumTable, httpGetShowFogliPagine, httpGetShowOpzioni, httpGetShowOrientmiento, httpGetShowQtaCustom, httpGetShowSVG, httpGetShowTabellaPrezzi, httpGetStampaCaldo, httpGetTableDate, httpGetTablePrezzi, httpGetTipoCarta } from '../services';
import { ResponseApi, TipoDiCarta } from '../interface/tipoCarta';
import { ColoreStampa } from '../interface/coloreStampa';
import { Opzioni } from '../interface/opzioni';
import { OptionsSelectS, StaCalOpz } from '../interface/stampaCaldo';
import {  TableDate } from '../interface/tableDate';
import { PrezzoValue } from '../interface/showColumPrezzo';
import { SelectRow, TablePrezzi } from '../interface/table';
import { IFormato } from '../interface/Formato';
import { set } from 'react-hook-form';
import { DataDisablesProfundita } from '../interface/disabledProfundita';
import { SvgImage } from '../interface/svgImage';
import { Datum } from '../interface/fogliPagine';
import { enChangeFormato } from '../../../enHelpers/enChange';
import { httpGetUtente } from '../../../services/UtenteService';
import { DataResponseGetUtente } from '../../../interface/Utente';
import { DataGetCalcolaTuto } from '../interface/calcolaTuto';
import { ObjCarrello } from '../interface/ObjCarrrello';
import { DataGetHelperDataProdotto } from '../interface/helpersDataProdotto';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { DataDimensioniStr, ResponseDimensioniStr } from '../interface/DimensioneStr';
import { DataGetOpzioniStatic } from '../interface/opzioniStatic';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { DataGetProduttoConsigliato } from '../interface/prodottoConsigliato';
import { DataGetResencioniP, ResponseGetRecensioni } from '../interface/RecensioniP';
import { DataGetAggiornaReview } from '../interface/AggiornaReview';
import { DataGetDescrizioniDinamica } from '../interface/DescrizioneDinamica';
import { httpGetCorriereSelezionata, httpGetMetodiPagamento, httpGetTotaleProvisorio } from '../../carrello/services/Services';
import { DateFormatDDMM, DateFormatDDMSYYHHSS, DateFormatItWDMY } from '../../../Helpers/formatDates';
import { DataGgetCorriereSelezionata } from '../../carrello/Interfaces/Corriere';
import jsPDF from 'jspdf';
import { DataGetTotaleProvisorio } from '../../carrello/Interfaces/totaleProvvisorio';
import logo from "../../../assets/iconsLast/logo.png";
import { numberFormat, numberPercentuale } from '../../../Helpers/formatNumber';

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

// let valuesStampaCaldoOpz: Record<string, number> = {

// }

const useRefactorProdotto = () => {

    let { idPrev, idFormProd, IdTipoCarta, IdColoreStampa, idFogli, idUt, idFustella, idCategoria, idBaseEtiquete, idAltezaEtiquete } = useParams()

    const navigate = useNavigate();

    const pdfRef = useRef(null);

    const [initialState, setInitialState] = useState(initialValues);
    const [tipoCartaList, setTipoCartaList] = useState<TipoDiCarta[]>([])
    const [coloreStampaList, setColoreStampaList] = useState<ColoreStampa[]>([])
    const [opzioniList, setOpzioniList] = useState<Opzioni[]>([])
    const [stampaCalOpz, setStampaCalOpz] = useState<StaCalOpz[]>([])
    const [tablaDate, setTablaDate] = useState<TableDate>()
    const [showColumTable, setShowColumTable] = useState<PrezzoValue>()
    const [tablaDataPrezzi, setTablaDataPrezzi] = useState<TablePrezzi[]>([])
    const [formatoList, setFormatoList] = useState<IFormato[]>([])
    const [valuesStampaCaldoOpz, setValuesStampaCaldoOpz] = useState<Record<string, number>>({});
    const [disableProfundita, setDisableProfundita] = useState<DataDisablesProfundita>()
    const [showOpzzioni, setShowOpzzioni] = useState<number>()
    const [imageSvg, setImageSvg] = useState<SvgImage>()// TODO: GENERAR EL SVG 
    const [showFlogliPagine, setShowFlogiPagine] = useState<Datum[]>()
    const [utenteData, setUtenteData] = useState<DataResponseGetUtente>()
    const [calcolaTuto, setCalcolaTuto] = useState<DataGetCalcolaTuto>()
    const [senderComandargument, setSenderComandargument] = useState("")
    const [valueMapStampaOpz, setValueMapStampaOpz] = useState<OptionsSelect[]>([]);
    const [helperDataProdotto, setHelperDataProdotto] = useState<DataGetHelperDataProdotto>()
    const [dimensionniStr, setDimensionniStr] = useState<DataDimensioniStr>()
    const [opzioniListStatic, setOpzioniListStatic] = useState<DataGetOpzioniStatic[]>([])
    const [prodottoConsigliato, setProdottoConsigliato] = useState<DataGetProduttoConsigliato[]>([])
    const [rencensioniP, setRencensioniP] = useState<DataGetResencioniP>()
    const [recencioniC, setRecencioniC] = useState<DataGetAggiornaReview[]>([])
    const [descrizioneDinamica, setDescrizioneDinamica] = useState<DataGetDescrizioniDinamica>()
    const [opzInclusa, setOpzInclusa] = useState<OptionsSelect[]>([])
    const [TotaleProvisorio, setTotaleProvisorio] = useState<DataGetTotaleProvisorio>()


    const [showTablePreez, setShowTablePreez] = useState<boolean>(false);
    const [orientamiento, setOrientamiento] = useState<boolean>();
    const [showBloccoMisure, setShowBloccoMisure] = useState<boolean>()
    const [showProfundita, setShowProfundita] = useState<boolean>();
    const [showSvg, setShowSvg] = useState<boolean>()
    const [showFaciatePagine, setShowFaciatePagine] = useState<boolean>()
    const [showQtaCustom, setShowQtaCustom] = useState<boolean>()
    const [viewRows, setViewRows] = useState<Boolean>(true)
    const [openLoadingBackdrop, setOpenLoadingBackdrop] = useState<boolean>(false);

    const [textMetrics, setTextMetrics] = useState<string>('')
    const [formatoDinamico, setFormatoDinamico] = useState<string>('')
    const [imgAcoppiati, setimgAcoppiati] = useState<string | undefined>()
    const [labelFogli, setLabelFogli] = useState<string>('');
    const [alertMassimo, setAlertMassimo] = useState<string>("")
    const [codeStart, setCodeStart] = useState<string>("N")
    const [textTipoCarta, setTextTipoCarta] = useState<string>('')

    //const [dateConsegna, setDateConsegna] = useState<DateConsegna>();
    const [menuDateConsegna, setMenuDateConsegna] = useState<string>()

    const [qtaSelezinata, setQtaSelezinata] = useState<number>(0)
    const [heplerFormProd, setHeplerFormProd] = useState<number>(0)

    const [showCoperatina, setShowCoperatina] = useState<number>()
    const [showSotoblocco, setShowSotoblocco] = useState<number>();
    const [prezzoActive, setPrezzoActive] = useState<number>(0);
    const [numberPrezzo, setNumberPrezzo] = useState<number | null>(null)
    const [qtaSelezinataDiabled, setQtaSelezinataDiabled] = useState(0)


    const [scadenza, setScadenza] = useState<Date>()

    const [selectRow, setSelectRow] = useState({

    })
    const [mmValue, setMMValue] = useState({ "base": true, "depth": true, "height": true })
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

    const handleData = async () => {
        try {
            setOpenLoadingBackdrop(true)
            // const responseUtente = await getUtente(Number(idUt))
            // setUtenteData(responseUtente);
            const reponseHelperData = await getHelpersData(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
                initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,)
            setHelperDataProdotto(reponseHelperData.data);
            const responseTipoCartaList = await getTipoCartaList(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,);
            setTipoCartaList(responseTipoCartaList.data);
            const responseColoreStampa = await getColoreStampa(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            );
            setColoreStampaList(responseColoreStampa.data);

            const responseOpizioni = await getOpzioniList(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
                initialState.base === null ? 0 : initialState.base,
                initialState.depth === null ? 0 : initialState.depth,
                initialState.height === null ? 0 : initialState.height,
            );
            setOpzioniList(responseOpizioni.data);
            //debugger
            const responseStampaCaldo = await getStampaCaldoPlaz(
                Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            );
            setStampaCalOpz(responseStampaCaldo.data)

            const responseDateTable = await getTableDate(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
                initialState.base === null ? 0 : initialState.base,
                initialState.depth === null ? 0 : initialState.depth,
                initialState.height === null ? 0 : initialState.height,)

            setTablaDate(responseDateTable.data);
            //setDateConsegna({ ...dateConsegna, date1: responseDateTable.data.dataNormale, date2: responseDateTable.data.dataNormaleProduzione })

            if (menuDateConsegna === undefined) {
                const menuDate = DateFormatDDMM(responseDateTable.data.dataNormale);
                setMenuDateConsegna(menuDate)
            }

            const responseShowColumnTable = await getShowColumnTable(Number(idPrev))
            setShowColumTable(responseShowColumnTable?.data)

            const responseShowTablePrezzi = await getShowTablePrezzi(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
                initialState.base === null ? 0 : initialState.base,
                initialState.depth === null ? 0 : initialState.depth,
                initialState.height === null ? 0 : initialState.height,);
            setShowTablePreez(responseShowTablePrezzi.data);
            //await effectTablePrezzi();
            

            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,)
            setOrientamiento(responseShowOrientamiento.data)

            // const responseFormatoList = await getFormatoList(Number(idPrev));
            // setFormatoList(responseFormatoList.data)

            const responseShowBloccoMisure = await getShowBloccoMisure(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa)
            setShowBloccoMisure(responseShowBloccoMisure?.data)

            const responseDIsableProfundita = await getDisableProfundita(Number(idPrev))
            setDisableProfundita(responseDIsableProfundita?.data)
            if (responseDIsableProfundita.data.disabled === true) {
                initialState.depth = responseDIsableProfundita.data.txt_Profundita
                setMMValue({ ...mmValue, "depth": false })
            }

            const responseShowFoliPagine = await getShowFogliPagine(Number(idPrev), initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.base === null ? 0 : initialState.base,
                initialState.depth === null ? 0 : initialState.depth,
                initialState.height === null ? 0 : initialState.height,
                initialState.quantity === null ? 0 : initialState.quantity,
                initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
                initialState.iva === null ? 0 : initialState.iva, valuesStampaCaldoOpz);

            setTextMetrics(responseShowFoliPagine.data.getEtichettaMisure);
            setShowProfundita(responseShowFoliPagine.data.showProfundita);
            setShowCoperatina(responseShowFoliPagine.data.copertina.showCopertina)
            if (responseShowFoliPagine.data.copertina.showCopertina) {
                setCopertina([{
                    ...copertina[0],
                    idTipoCartaC: responseShowFoliPagine.data.copertina.showCopertina,
                    descrizioneEstesa: responseShowFoliPagine.data.copertina.dezcrzzione,
                    imgRif: responseShowFoliPagine.data.copertina.imgRif,
                    tipologia: responseShowFoliPagine.data.copertina.tipologia,
                    text: responseShowFoliPagine.data.copertina.textCopertina,
                }]);
            }
            if (responseShowFoliPagine.data.sotoblocco.showSotoblocco) {
                setSotoblocco([{
                    ...sotoblocco[0],
                    idTipoCartaD: responseShowFoliPagine.data.sotoblocco.showSotoblocco,
                    descrizioneEstesa: responseShowFoliPagine.data.sotoblocco.dezcrzzione,
                    imgRif: responseShowFoliPagine.data.sotoblocco.imgRif,
                    tipologia: responseShowFoliPagine.data.sotoblocco.tipologia,
                    text: responseShowFoliPagine.data.sotoblocco.textSottoBlocco,
                }]);
            }
            setShowSotoblocco(responseShowFoliPagine.data.sotoblocco.showSotoblocco)
            setShowFaciatePagine(responseShowFoliPagine.data.showFogliPagine)
            setShowFlogiPagine(responseShowFoliPagine.data.data)
            setLabelFogli(responseShowFoliPagine.data.fogliLabel)
            setTextTipoCarta(responseShowFoliPagine.data.tipoCartaText);

            const responseShowOpzioni = await getShowOpzioni(Number(idPrev))
            setShowOpzzioni(responseShowOpzioni.data);

            if (idCategoria && idCategoria != "0") {
                const responseFormatoDinamico = await getFormatpDinamico();
                setFormatoDinamico(responseFormatoDinamico.data.categoria)
            }

            const responseShowSVG = await getShowSVG(Number(idPrev))
            setShowSvg(responseShowSVG.data);

            const responseShowQtaCustom = await getShowQtaCustom(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa)
            setShowQtaCustom(responseShowQtaCustom?.data)

            //await handleChangePrezzo();
            setOpenLoadingBackdrop(false);

            await handleOpzionisStatic();
            if (initialState.base != null && initialState.height != null) {

                await handleShowAlertMassimo();
            }

            const responseProdottoCOnsigliato = await geProdottoConsigliato(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setProdottoConsigliato(responseProdottoCOnsigliato.data);

            const responseRecensioniP = await getRecensioni(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setRencensioniP(responseRecensioniP.data);

            const responseAggiornaReview = await getAggiornaReview(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setRecencioniC(responseAggiornaReview.data);
            const responseDescrizioniDinamica = await getDescrizioniDinammica(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,)

            setDescrizioneDinamica(responseDescrizioniDinamica.data);

            handleOpzioneInclusa(responseStampaCaldo.data);
            await handleTotaleProvisorio();
        } catch (error) {
            //console.log('ErrorHandleData', error)
        }
    }

    /**
     * * !!!!!!!!!!!!!!!Funciones getters hacia las API!!!!!!!!!!!!!!!!!!!!!
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
        heightTD: number) => {
        const tableDateList = await httpGetTableDate(
            Number(idUt),
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
        valuesStapaCaldoOpzTP: Record<string, number>
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
            Number(idUt),
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
        console.log('idPrevF', idPrevF);
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

    const getShowFogliPagine = async (IdPrevSFP: number, IdTipoCartaSFP: number, IdColoreStampaSFP: number, IdFormProdSFP: number, BaseSFP: number, DepthSFP: number, HeightSFP: number, QuantitySFP: number, FaciatePagineSFP: number, IvaSFP: number, valuesStapaCaldoOpzTP: Record<string, number>) => {
        const showFogliPagine = await httpGetShowFogliPagine(IdPrevSFP, IdTipoCartaSFP, IdColoreStampaSFP, IdFormProdSFP, BaseSFP, DepthSFP, HeightSFP, QuantitySFP, FaciatePagineSFP, IvaSFP, Number(idUt), valuesStapaCaldoOpzTP)

        return showFogliPagine;
    }

    const getShowOpzioni = async (IdPrevSO: number) => {
        const showOpzioni = await httpGetShowOpzioni(IdPrevSO)
        return showOpzioni;
    }

    const getFormatpDinamico = async () => {
        const formatoParams = await httpGetFormatoParams(String(idCategoria))
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

    const getShowAlertMassimo = async (IdPrevSAM: number, IdTipoCartaSAM: number, IdColoreStampaSAM: number, IdFormProd: number, BaseSAM: number, DepthSAM: number, HeightSAM: number, QuantitySAM: number, FaciatePagineSAM: number, Iva: number, valuesStampaCaldoOpz: Record<string, number>) => {
        const showAlertMassimo = await httpGetShowAlertMassimo(IdPrevSAM, IdTipoCartaSAM, IdColoreStampaSAM, IdFormProd, BaseSAM, DepthSAM, HeightSAM, QuantitySAM, FaciatePagineSAM, Iva, Number(idUt), valuesStampaCaldoOpz)

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
        valuesStapaCaldoOpzTP: Record<string, number>) => {
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
            valuesStapaCaldoOpzTP, Number(idUt))

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
    /* 
    * <===================handleChange | eventos de cambios=======================>
    */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        //console.log('stampaOzp\n', evt.target.name, evt.target.value);
        const { name, value, type } = evt.target;

        var exist = true;

        if (valuesStampaCaldoOpz.hasOwnProperty(name) && type == 'checkbox') {
            //console.log('existe');
            delete valuesStampaCaldoOpz[name];
            exist = false;
            setValuesStampaCaldoOpz({ ...valuesStampaCaldoOpz });
            console.log("valuesStampaCaldoOpz", valuesStampaCaldoOpz)
        }

        if (name !== "Format" && name !== "base" && name !== "coloreStampa" && name !== "depth" && name !== "height" && name !== "quantity" && name !== "tipoCarta" && name !== "formatoS" && name !== "facciatePagine" && name !== 'nome' && name !== 'note' && exist) {
            //console.log('aca entro')
            setValuesStampaCaldoOpz({
                ...valuesStampaCaldoOpz,
                [name]: Number(value)
            });
        }
        if (name === "base" || name === "depth" || name === "height") {

            if (parseInt(value) > 0 && value != " ") {
                setMMValue({
                    ...mmValue,
                    [name]: value
                })
            }
        }

        if (name === "iva") {
            setCodeStart("N")
            setNumberPrezzo(0);
        }

        switch (name) {
            case 'base':
                //console.log("aquiiii")
                let newBase: number;
                if (value != "") {
                    if (disableProfundita?.disabled === true) {
                        //console.log("aquiiii")
                        newBase = parseInt(value) < 70 ? 70 : parseInt(value);
                    } else if (showProfundita === false) {
                        newBase = parseInt(value) < 1 ? 1 : parseInt(value);
                        if (parseInt(value) > 440) {
                            newBase = 440;
                        } else {
                            newBase = parseInt(value);
                        }
                    }
                    else {
                        newBase = parseInt(value) < 20 ? 20 : parseInt(value);
                        //console.log("aquiiii")
                    }
                    setInitialState({
                        ...initialState,
                        [name]: newBase,
                    });
                    setMMValue({ ...mmValue, "base": false })
                    evt.target.value = newBase.toString();
                }
                break;
            case 'depth':
                if (value != "") {
                    const newdepth = parseInt(value) < 14 ? 14 : parseInt(value);
                    setInitialState({
                        ...initialState,
                        [name]: newdepth,
                    });
                    setMMValue({ ...mmValue, "depth": false })
                    evt.target.value = newdepth.toString();
                }
                break;
            case 'height':
                if (value != "") {
                    let newheight: number;
                    if (disableProfundita?.disabled === true) {
                        newheight = parseInt(value) < 100 ? 100 : parseInt(value);
                    } else if (showProfundita === false) {
                        newheight = parseInt(value) < 1 ? 1 : parseInt(value);
                        if (parseInt(value) > 310) {
                            newheight = 310;
                        } else {
                            newheight = parseInt(value);
                        }
                    }
                    else {
                        newheight = parseInt(value) < 40 ? 40 : parseInt(value);
                    }
                    setInitialState({
                        ...initialState,
                        [name]: newheight,
                    });
                    setMMValue({ ...mmValue, "height": false })
                    evt.target.value = newheight.toString();
                }
                break;
            default:
                console.log(name)
                setInitialState({
                    ...initialState,
                    [name]: value,
                });
                break;
        }

    }
    /**
     * * !!!!!!!!!!!!Funciones Handle De Listado de Opciones!!!!!!!!!!!!!
     */

    const handleDataUtn = async () => {
        const responseUtente = await getUtente(Number(idUt))
        setUtenteData(responseUtente);
    }

    const handleGetFormato = async () => {
        const responseFormatoList = await getFormatoList(Number(idPrev));
        setFormatoList(responseFormatoList.data)
    }


    const handleOptionsTipoCarta = () => {
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
    const handleOptionsColoreStampa = () => {
        if (coloreStampaList.length === 0) return []
        const options: OptionsSelect[] = coloreStampaList.map(elem => {
            return {
                label: elem.descrizione,
                value: elem.idColoreStampa,
                description: elem.descrizione,
                image: elem.imgrif,
            }
        })
        return options
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

    const handleStampaCaldoOpz = (optionsSelect: OptionsSelectS[]) => {
        if (optionsSelect.length === 0) return []
        const options: OptionsSelect[] = optionsSelect.map(elem => {
            return {
                label: elem.descrizione,
                value: elem.idLavoro,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        return options;
    }

    const handleChangeRowSelect = (conditional: boolean, value: number, quantity: number) => {
        setSelectRow({ conditional, value, quantity })
    }

    const handleOrientamiento = () => {
        const options: OptionsSelect[] = [
            {
                label: 'Orizzontale',
                value: 0
            },
            {
                label: 'Verticale',
                value: 1
            },
        ]
        return options
    }

    const hanldeFormatoList = (): OptionsSelect[] => {
        if (formatoList.length === 0) return []
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

    const handleOptionsFormat = () => {
        const { base, depth, height } = initialState;
        if (base) {
            if (disableProfundita?.disabled === true) {
                if (base < 70) {
                    initialState.base = 70;
                }
            } else {
                if (base < 20) {
                    initialState.base = 20;
                }
            }
        }
        if (depth) {
            if (disableProfundita?.disabled === true) {
                if (depth < 20) {
                    initialState.depth = 20;
                }
            } else {
                if (depth < 14) {
                    initialState.depth = 14;
                }
            }

        }
        if (height) {
            if (disableProfundita?.disabled === true) {
                if (height < 100) {
                    initialState.height = 100;
                }
            } else {
                if (height < 40) {
                    initialState.height = 40;
                }
            }

        }
        const option: string = `${base || 0} x ${height || 0} x ${depth || 0
            } (Chiuso)`;

        return option;
    };

    const handleCoperatinaOpz = () => {
        if (copertina.length === 0) return []
        const option: OptionsSelect[] = copertina.map((elem) => {
            return {
                label: elem.tipologia,
                value: elem.idTipoCartaC,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        //debugger
        return option
    }
    const handleSotobloccoOpz = () => {
        if (sotoblocco.length === 0) return []
        const option: OptionsSelect[] = sotoblocco.map((elem) => {
            return {
                label: elem.tipologia,
                value: elem.idTipoCartaD,
                description: elem.descrizioneEstesa,
                image: elem.imgRif
            }
        })
        //debugger
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

    const handleChangeViewTableRows = () => {
        setViewRows(!viewRows)
    }

    const handleCalcolaTuto = async (code: string, QtaSelezionata: number, prezzoOrdini: number, i: number, dateConsegna: Date | undefined) => {

        setOpenLoadingBackdrop(true)

        initialState.qtaSelezinata = QtaSelezionata;
        setCodeStart(code)
        setQtaSelezinata(QtaSelezionata);
        setNumberPrezzo(i);
        const responsNoRender = await effectTablePrezziNoRender();
        ////console.log('Cacol', QtaSelezionata)
        setPrezzoActive(prezzoOrdini)
        const menuDate = DateFormatDDMM(dateConsegna);

        setMenuDateConsegna(menuDate)

        switch (code) {
            case 'F':
                prezzoOrdini = responsNoRender[i].prezzoRiv;
                break;
            case 'N':
                prezzoOrdini = responsNoRender[i].prezzoPubbl;
                break;
            case 'S':
                prezzoOrdini = responsNoRender[i].prezzoConsigliatoPubbl;
                break;
            default:
                break;
        }

        const responseCalcolaTuto = await getCalcolaTuto(
            code,
            QtaSelezionata,
            prezzoOrdini,
            Number(idPrev),
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.base === null ? 0 : initialState.base,
            initialState.depth === null ? 0 : initialState.depth,
            initialState.height === null ? 0 : initialState.height,
            initialState.quantity === null ? 0 : initialState.quantity,
            initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            0,
            valuesStampaCaldoOpz)

        setCalcolaTuto(responseCalcolaTuto.data)
        setOpenLoadingBackdrop(false)

    }

    const handleSelectDate = (code: string, date1: Date | undefined, date2: Date | undefined) => {
        //console.log('Code: ', code, "Date1", date1, "Date2", date2)

        if (date1 != undefined && date2 != undefined) {
            //setDateConsegna({ date1: date1, date2: date2 })
        }
    }

    const handleDimensioniStr = async () => {
        const dimensioneStr = await getFormatoStr(Number(idPrev),
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.base, initialState.depth, initialState.height
        );

        setDimensionniStr(dimensioneStr.data)
    }

    const handleShowAlertMassimo = async () => {
        const responseGetShowAlertMassimo = await getShowAlertMassimo(Number(idPrev),
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.base === null ? 0 : initialState.base,
            initialState.depth === null ? 0 : initialState.depth,
            initialState.height === null ? 0 : initialState.height,
            initialState.quantity === null ? 0 : initialState.quantity,
            initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            initialState.iva === null ? 0 : initialState.iva,
            valuesStampaCaldoOpz)

        // setAlertMassimo(responseGetShowAlertMassimo.data)
        // if (responseGetShowAlertMassimo.data != '') {
        //     setShowTablePreez(false)
        //     setTablaDataPrezzi([])
        // }
    }

    const handleCarrello = async () => {

        navigate('/carrello')

        localStorage.setItem('stp', '1');
        // (showBloccoMisure && initialState.base && initialState.height) || (showProfundita && initialState.depth)
        const responseHandFormato = hanldeFormatoList();
        const responseHandTipoCarta = handleOptionsTipoCarta();
        const responseHandColoreStampa = handleOptionsColoreStampa();
        const responseHandOrientamiento = handleOrientamiento();
        const responseHandFacPagine = handleFogliPagine();

        const OPZ = handleOptionOPZ()

        const objDataProdotto: ObjCarrello = {
            idUt: idUt,
            idPrev: idPrev,
            IdFormProd: initialState.formatoS == null ? idFormProd : initialState.formatoS,
            IdTipoCarta: initialState.tipoCarta == null ? IdTipoCarta : initialState.tipoCarta,
            IdColoreStampa: initialState.coloreStampa == null ? IdColoreStampa : initialState.coloreStampa,
            nome: initialState.nome,
            note: initialState.note,
            qta: qtaSelezinata,
            img:  helperDataProdotto?.imgRif,
            svgImg: showSvg,
            prodotto: dimensionniStr?.prodotto,
            orientamiento: orientamiento && handleCarrelloData(initialState.orientamiento, responseHandOrientamiento).label,
            idOrientamiento: orientamiento ? Number(handleCarrelloData(initialState.orientamiento, responseHandOrientamiento).value) : null,
            suporto: handleCarrelloData(initialState.tipoCarta, responseHandTipoCarta).label,
            stampa: handleCarrelloData(initialState.coloreStampa, responseHandColoreStampa).label,
            dimencioni: parseInt(String(idBaseEtiquete)) != 0 ? `(${idBaseEtiquete}B x ${idAltezaEtiquete}A mm)` : dimensionniStr?.dimensioniStr,
            colli: calcolaTuto?.colli,
            peso: calcolaTuto?.pesoStr,
            prezzo: calcolaTuto?.prezzoCalcolatoNetto,
            descrizione: showColumTable?.descrizione,
            stampaOPZ: OPZ._stampaOpz,
            _stampaOpzId: OPZ._stampaOpzId,
            nomeUrl: helperDataProdotto?.url,
            scadenza: '',
            code: codeStart,
            idListinoBase: helperDataProdotto?.idListinoBase,
            showFogli: showFaciatePagine,
            fogli: handleCarrelloData(initialState.facciatePagine, responseHandFacPagine).label,
            labelFogli: labelFogli,
            pdfTemplate: handleCarrelloData(initialState.formatoS == null ? Number(idFormProd) : initialState.formatoS, responseHandFormato).pdfTemplate,
            idReparto: dimensionniStr?.idReparto,
            base: initialState.base ?? 0,
            produndita: initialState.base ?? 0,
            altezza: initialState.base ?? 0,
            promo:false
        }//Buste Intestate 11x23 con Finestra e strip a colori solo fronte
        const existCarreloLocal = localStorage.getItem('c');
        let dataCarrelli: any[] = [];
        if (existCarreloLocal) {
            dataCarrelli = JSON.parse(existCarreloLocal);
        }
        ////console.log("IdsCarrellos", objDataProdotto)
        const updateCarrello = [...dataCarrelli, objDataProdotto];
        localStorage.setItem('c', JSON.stringify(updateCarrello));
        //navigate('/carrello');

        handleHidden(enOperationFrame.hidden);

    }

    const handleOptionOPZ = () => {
        const arrayStampa: OptionsSelect[] = [];
        const _stampaOpzId: number[] = []
        Object.keys(valuesStampaCaldoOpz).forEach((key) => {
            const value = valuesStampaCaldoOpz[key];
            const objVaStampa: OptionsSelect = {
                label: key,
                value: value,
            }
            arrayStampa.push(objVaStampa);
        })
        const _stampaOpz: string[] = []
        const _stampaOpzAllString: string[] = []
        if (arrayStampa.length > 0) {
            stampaCalOpz?.map((elem, i) => {
                const responseHandStampaOpz = handleStampaCaldoOpz(elem.optionsSelect);
                arrayStampa.map((item, j) => {
                    if (item.value != 0) {
                        const dataPush = responseHandStampaOpz.find(x => x.value == item.value);
                        if (dataPush != undefined) {
                            _stampaOpz.push(String(dataPush?.label))
                            _stampaOpzId.push(Number(dataPush?.value))
                        }
                    }
                })
            })
        }
        if (parseInt(String(idFustella)) === 0) {
            opzioniList.map((item, i) => {
                _stampaOpz.push(item.descrizione);
                _stampaOpzId.push(item?.idLavoro)
            })
        }
        const noExistentes = opzioniListStatic.filter((x) =>
            stampaCalOpz?.every((y) =>
                !y.optionsSelect.some((z) => z.idLavoro === x.idLavoro)
            )
        );
        noExistentes.map((ele, i) => {
            _stampaOpz.push(ele.descrizione);
            _stampaOpzId.push(ele?.idLavoro)

        })
        return { _stampaOpz, _stampaOpzId }
    }

    const handleHidden = (operation: enOperationFrame, uri?: string) => {
        console.log('mando 1')
        window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleCarrelloData = (Id: number | null | undefined, options: OptionsSelect[]) => {

        const optionsVoid: OptionsSelect = {
            value: 0,
            label: ''
        }
        if (options.length > 0) {
            const defaultOption = options[0];
            const selectedOption = options.find(x => x.value === Number(Id));
            const data = {
                value: selectedOption ? selectedOption.value : defaultOption.value,
                label: selectedOption ? selectedOption.label : defaultOption.label,
                dimencioni: selectedOption ? selectedOption.formatoCartaStr : defaultOption.formatoCartaStr,
                img: selectedOption ? selectedOption.image : defaultOption.image,
                pdfTemplate: selectedOption ? selectedOption.pdfTemplate : defaultOption.pdfTemplate,
            }
            return data;
        }
        return optionsVoid
    }

    const handleOpzionisStatic = async () => {
        const responseOpzioniStatic = await getOpzioniStatic(Number(idPrev),
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa)
        setOpzioniListStatic(responseOpzioniStatic.data);
    }

    const handleLogin = () => {
        //alert('first')
        window.parent.postMessage({ operation: enOperationFrame.redirectLogin }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleImg = () => {
        const img = hanldeFormatoList().find(x => x.value == initialState.formatoS)
        if (Number(idPrev) == 34) {
            const imgR = handleOptionsTipoCarta().find(x => x.value == Number(IdTipoCarta));
            const imgI = handleOptionsTipoCarta().find(x => x.value == initialState.tipoCarta);
            return imgI == undefined ? imgR?.image : imgI?.image;
        }

        if ((Number(idPrev) == 32 || Number(idPrev) == 33) && imgAcoppiati != undefined) {
            return imgAcoppiati;
        }

        return img == undefined ? hanldeFormatoList()[0]?.image : img.image
    }

    const handleOpzioneInclusa = (responseStampaCaldo: StaCalOpz[]) => {

        var opzH: OptionsSelect[] = [];
        var opz: OptionsSelect;
        const arrayStampa: OptionsSelect[] = [];
        Object.keys(valuesStampaCaldoOpz).forEach((key) => {
            const value = valuesStampaCaldoOpz[key];
            const objVaStampa: OptionsSelect = {
                label: key,
                value: value,
            }
            arrayStampa.push(objVaStampa);
        })
        arrayStampa.map((item, i) => {
            const val = responseStampaCaldo//.filter(x => x.optionsSelect[0].idLavoro != 0);

            val.map((elem, j) => {
                if (elem.descrizione == item.label && item.value != 0 && item.value == elem.optionsSelect[0].idLavoro) {
                    //console.log('emntra')
                    opz = {
                        value: elem.optionsSelect[0].idLavoro,
                        label: elem.optionsSelect[0].descrizione,
                        description: elem.optionsSelect[0].descrizioneEstesa,
                        catLav: elem.descrizione,
                        opzione: 'inclusa '
                    }
                    opzH.push(opz);
                } else {
                    elem.optionsSelect.map((pro, k) => {
                        if (elem.descrizione == item.label && pro.idLavoro == item.value && item.value != 0) {
                            opz = {
                                value: pro.idLavoro,
                                label: pro.descrizione,
                                catLav: elem.descrizione,
                                description: pro.descrizioneEstesa,
                                opzione: 'Scelta '
                            }
                            opzH.push(opz);
                        }
                    })
                }
            })
            setOpzInclusa(opzH);
        })
    }

    const handleScandeza = (dateConsegnas: DataGgetCorriereSelezionata,) => {
        const code = codeStart;
        const dateConsegna = dateConsegnas.dateConsegna;

        switch (code) {
            case "F":
                if (utenteData?.corriere.idMetodoConsegna == 0) {
                    localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
                    localStorage.setItem('prv', String(dateConsegna?.dataFast));
                    localStorage.setItem('scande', String(dateConsegna?.dataFast));
                    return DateFormatItWDMY(dateConsegna?.dataFastProduzione);
                } else {
                    localStorage.setItem('gro', String(dateConsegna?.dataFastProduzione));
                    localStorage.setItem('prv', String(dateConsegna?.dataFast));
                    return DateFormatItWDMY(dateConsegna?.dataFast);
                }
                break;
            case "N":
                if (utenteData?.corriere.idMetodoConsegna == 0) {
                    localStorage.setItem('prv', String(dateConsegna?.dataNormale));
                    localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
                    return DateFormatItWDMY(dateConsegna?.dataNormaleProduzione);
                } else {
                    localStorage.setItem('gro', String(dateConsegna?.dataNormaleProduzione))
                    localStorage.setItem('prv', String(dateConsegna?.dataNormale));
                    return DateFormatItWDMY(dateConsegna?.dataNormale);
                }
                break;
            case "S":
                if (utenteData?.corriere.idMetodoConsegna == 0) {
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    localStorage.setItem('gro', String(dateConsegna?.dataSlowProduzione))
                    return DateFormatItWDMY(dateConsegna?.dataSlowProduzione);
                } else {
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    localStorage.setItem('prv', String(dateConsegna?.dataSlow));
                    return DateFormatItWDMY(dateConsegna?.dataSlow);
                }
                break;
            default:
                return ""

                break;
        }
    }

    const handleCorriere = () => {
        const responseScandeza = httpGetCorriereSelezionata(1, String(utenteData?.defaultCap), Number(idPrev),
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,)

        responseScandeza.then(r => {
            if (r) {
                const dateConsegna = r.data;
                const scandeza = handleScandeza(dateConsegna,)
                localStorage.setItem('scande', String(scandeza))



            }
        })

    }

    const handleCompraloSubito = async () => {
        handleCorriere();

        localStorage.setItem('stp', '5');
        localStorage.setItem('cons', String(utenteData?.corriere.idMetodoConsegna));
        localStorage.setItem('mil', String(utenteData?.email));
        localStorage.setItem('ind', String(utenteData?.indirizoS) + " " + utenteData?.indirizoR);
        localStorage.setItem('indid', String(utenteData?.idIndirizzo));

        const pzo = localStorage.getItem('pzo')
        if (pzo) {
            var p = parseInt(pzo) + parseInt(String(calcolaTuto?.pesoStr))
            localStorage.setItem('pzo', String(p))
        } else {
            localStorage.setItem('pzo', String(calcolaTuto?.pesoStr));
        }

        const responseMetodiPagamento = httpGetMetodiPagamento(Number(utenteData?.idUt), prezzoActive, Number(utenteData?.corriere.idMetodoConsegna));

        responseMetodiPagamento.then(r => {
            if (r) {
                const corr = r.data.find(x => x.idTipoPagamento == 5);
                //const colli = dataTotale.Colli;
                localStorage.setItem('tp', String(corr?.titulo));
                localStorage.setItem('tpI', String(corr?.imgRif));
                localStorage.setItem('tpD', String(corr?.descrizione));
                localStorage.setItem('tppr', String(corr?.periodoPagamento));
                localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
                localStorage.setItem('tpDI', String(corr?.idTipoPagamento));
                handleCarrello().then(rc => {
                    navigate('/carrello')
                });
            }
        })
    }

    const handleDonwloadPDF = () => {

        const pdf = new jsPDF(undefined, 'px',);
        // const prevPDF = document.getElementById('preventivoPDFID');
        // if (prevPDF) {
        //     pdf.html(prevPDF, {
        //         callback: (pdf) => {
        //             pdf.save('Preventivo_' + calcolaTuto?.nomePreventivo);
        //         }
        //     });
        // }

        // Crear un nuevo documento PDF
        var mx = 60, my = 40, fullwidth = 380, lineY = 126;

        const dateNow = new Date();

        pdf.addImage(logo, "png", mx, my - 10, 100, 20);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.text('TIPOGRAFIA FORMER', mx, my + 20);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8);
        pdf.text("Stabilimento e Uffici: Via Cassia 2010, 00123 Roma", mx, my + 30);
        pdf.text("Servizio Clienti: 06.30884518 - Email:", mx, my + 40);
        pdf.textWithLink("info@tipografiaformer.it", mx + 102, my + 40, { url: '' })
        pdf.text("Partita Iva: 14974961006", mx, my + 50);

        pdf.setFont("helvetica", "bold")
        pdf.text("Preventivo WEB", fullwidth - 25, my, { align: "right" })

        pdf.setFont("helvetica", "normal");
        pdf.text(`${DateFormatDDMSYYHHSS(dateNow)}`, fullwidth - 20, my + 10, { align: "right" });

        //*Cliente 

        if (utenteData) {
            pdf.setFont("helvetica", "bold");
            pdf.text("Cliente", mx, my + 85);
            pdf.line(mx, lineY, fullwidth, lineY);
            pdf.text(utenteData.nominativo, mx, my + 100);
            pdf.setFont("helvetica", "normal");
            pdf.text(`Cod. Cliente Online: ${utenteData.idUt}`, mx, my + 108);
            pdf.text(`Riferimento: ${utenteData.nome} ${utenteData.cognome}`, mx, my + 116);
            pdf.text(`Cod. Fisc: ${utenteData.codFisc}`, mx, my + 124);
            pdf.text(`P.IVA: ${utenteData.piva}`, mx, my + 132);
            pdf.text("Email:", mx, my + 140);
            pdf.textWithLink(utenteData.email, mx + 18, my + 140, { url: "" });
            pdf.text(`Tel: ${utenteData.tel}`, mx, my + 148);
        }
        //*Ordine

        pdf.setFont("helvetica", "bold");
        pdf.text("Ordine", mx, my + 170);
        pdf.line(mx, lineY + 85, fullwidth, lineY + 85);

        pdf.setFont("helvetica", "normal");
        pdf.text(`Quantità: ${showTablePreez ? qtaSelezinata : ''}`, mx, my + 180);
        if (showOpzzioni == 2 || showOpzzioni == 1) {
            pdf.text(`Prodotto : ${parseInt(String(idBaseEtiquete)) != 0 ? `(${idBaseEtiquete}B x ${idAltezaEtiquete}A mm)` : dimensionniStr?.prodotto}`, mx, my + 190,)
            pdf.text(`Formato: ${dimensionniStr?.prodotto}`, mx, my + 200);
            my = my + 10;
        } else {
            pdf.text(`Formato: ${handleCarrelloData(initialState.formatoS, hanldeFormatoList()).label}`, mx, my + 190);
        }
        pdf.text(`Tipo di carta: ${handleCarrelloData(initialState.tipoCarta, handleOptionsTipoCarta()).label}`, mx, my + 200);
        pdf.text(`Colore stampa: ${handleCarrelloData(initialState.tipoCarta, handleOptionsColoreStampa()).label}`, mx, my + 210);
        pdf.text("Opzioni:", mx, my + 220);
        handleOptionOPZ()._stampaOpz.map((item, i) => {
            pdf.text(`- ${item}`, mx, my + 228);
            if (handleOptionOPZ()._stampaOpz.length > 1) {
                my = my + 8;
                lineY = lineY + 8;
            }
        })

        //*Informazioni aggiuntive

        pdf.setFont("helvetica", "bold");
        pdf.text("Informazioni aggiuntive", mx, my + 248);

        pdf.setFont("helvetica", "normal");
        pdf.text(`Data in cui vuoi ricevere il prodotto: ${menuDateConsegna}`, mx, my + 258);
        pdf.text("Modalità di pagamento: 60 giorni data fattura", mx, my + 268);
        pdf.text(`Colli: ${showTablePreez ? calcolaTuto?.colli : '-'}`, mx, my + 278);
        pdf.text(`Peso: ${showTablePreez ? calcolaTuto?.pesoStr : '- '} kg ±`, mx, my + 288);

        pdf.line(mx, lineY + 217, fullwidth, lineY + 217);

        //*Totale

        pdf.setFont("helvetica", "bold");
        pdf.text(`Imponibile € ${showTablePreez ? numberFormat(calcolaTuto?.prezzoCalcolatoNetto) : '-'}`, fullwidth, my + 313, { align: 'right' });
        pdf.text("IVA € 2,64", fullwidth, my + 323, { align: 'right' });
        pdf.text(`Totale con IVA € ${showTablePreez ? numberFormat(numberPercentuale(Number(calcolaTuto?.prezzoCalcolatoNetto), 22)) : '-'}`, fullwidth, my + 333, { align: 'right' });
        pdf.setFontSize(6.4);
        pdf.setFont("helvetica", "normal");
        pdf.text("CONDIZIONI DI VENDITA", mx, my + 383,);
        pdf.text(`I prezzi indicati sono soggetti ad improvvise variazioni, verificare on line il prezzo prima dell’ordine. In caso di spedizione i costi sono esclusi dal presente`, mx, my + 390, { align: "justify", })
        pdf.text("preventivo e verranno conteggiati automaticamente al momento dell'ordine a seconda dell'indirizzo di consegna.", mx, my + 395,);
        pdf.text("FILE ALLEGATI AL LAVORO", mx, my + 405);
        pdf.text("Dopo aver effettuato l'ordine potrai allegare i file sorgenti con estrema semplicità tramite un apposito modulo nel sito internet.", mx, my + 410, { align: "justify", });

        pdf.text("RESPONSABILITA' DEL COMMITENTE", mx, my + 420);
        pdf.text("La committente si assume la paternità dei contenuti oggetto di stampa esonerando la Tipografia Former dall'obbligo di esame degli stessi ed assumendosi,", mx, my + 425, { align: "left", });
        pdf.text("pertanto, qualsiasi responsabilità  nei confronti di terzi che dovessero lamentare lesioni all'immagine, onore, decoro, integrità morale o comunque qualsiasi", mx, my + 430, { align: "left", });
        pdf.text("danno patrimoniale e non patrimoniale causalmente collegate alla stampa oggetto di contratto. La Tipografia Former si riserva la chiamata in manleva della", mx, my + 435, { align: "left", });
        pdf.text("committente nell'eventualità in cui domande risarcitorie venissero formulate direttamente nei suoi confronti.", mx, my + 440);

        pdf.text("CLAUSOLA ESONERO RESPONSABILITA'", mx, my + 450);
        pdf.text("Tipografia Former non sarà responsabile nei confronti del committente e/o beneficiario della prestazione se diverso, per danni di qualsiasi specie, sia diretti", mx, my + 455);
        pdf.text("che indiretti, derivanti da eventuali errori, di ogni natura, nella stampa del file inviato dal cliente o derivanti dalla ricezione di materiale sbagliato.   In tali casi", mx, my + 460);
        pdf.text("Tipografia Former sarà tenuta esclusivamente  ad  effettuare una sola ristampa del materiale qualora l'errore  sia  imputabile  alla qualita della  stampa.", mx, my + 465);
        pdf.text("Parimenti Tipografia Former non sarà responsabile per danni, diretti e indiretti, dovuti alla mancata e/o ritardata consegna del materiale,né sarà", mx, my + 470);
        pdf.text("responsabile di eventuali deterioramenti dell'imballaggio; in tali casi sarà tenuta esclusivamente ad effettuare una sola ristampa  del  materiale a condizione", mx, my + 475);
        pdf.text(`che  il pacco venga accettato  dal  cliente "con riserva dei vizi"  che  dovranno essere elencati sulla ricevuta rilasciata  dal corriere e comunicati a Tipografia`, mx, my + 480);
        pdf.text(`Former a mezzo fax, a pena di decadenza,entro tre giorni dalla ricezione del plico. Eventuali errori nella stampa o nel confezionamento del materiale vanno`, mx, my + 485);
        pdf.text(`segnalati alla email info@tipografiaformer.it  con  documentazione fotografica digitale allegata, avendo  cura  di  indicare nell'oggetto  il  numero d'ordine  di`, mx, my + 490);
        pdf.text(`riferimento, entro tre giorni dalla ricezione del materiale.`, mx, my + 495);

        pdf.text("FORO DI COMPETENZA", mx, my + 505);
        pdf.text("Per tutte  le  controversie relative all'interpretazione e/o  all'esecuzione del presente contratto, le parti riconoscono l'esclusiva competenza del foro di Roma,", mx, my + 510, { align: "justify", });
        pdf.text("indipendentemente dal luogo di conclusione del contratto, dal domicilio del committente, dal luogo di pagamento anche se per mezzo di tratta e/o di r.b.", mx, my + 515,)


        pdf.save('Preventivo_' + calcolaTuto?.nomePreventivo);


    }

    const handleTotaleProvisorio = async () => {
        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        let TotalPrezo = 0;
        let TotalPeso = 0;
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            ArrayLocalCarrello.map((lem, i) => {
                if (lem.prezzo != undefined) {

                    TotalPrezo += lem.prezzo
                }
                if (lem.peso != undefined) {
                    TotalPeso += lem.peso
                }
            })
        }
        if (ArrayLocalCarrello.length > 0) {
            const scontoLocal = localStorage.getItem('sc');
            const radioPagamento = localStorage.getItem('tpDI');
            const radio = localStorage.getItem('cons');
            const responseTotale = await getTotaleProvisorio(Number(ArrayLocalCarrello[0].idUt), TotalPeso, 0, TotalPrezo, scontoLocal == undefined ? null : Number(scontoLocal), Number(radioPagamento), Number(radio));
            setTotaleProvisorio(responseTotale);
        } else {
            setTotaleProvisorio(undefined);
        }
    }

    const handleChangePrezzo =async () => {
        setOpenLoadingBackdrop(true);
        //debugger
        await effectTablePrezzi();
        const responseCalcolaTuto = await getCalcolaTuto(
            "N",
            0, 0,
            Number(idPrev),
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.base === null ? 0 : initialState.base,
            initialState.depth === null ? 0 : initialState.depth,
            initialState.height === null ? 0 : initialState.height,
            initialState.quantity === null ? 0 : initialState.quantity,
            initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            initialState.iva === null ? 0 : initialState.iva,
            valuesStampaCaldoOpz)

        setCalcolaTuto(responseCalcolaTuto.data)
        setQtaSelezinata(responseCalcolaTuto.data.qta);
        setQtaSelezinataDiabled(responseCalcolaTuto.data.qta)
        setPrezzoActive(responseCalcolaTuto.data.prezzoCalcolatoNetto);
        setOpenLoadingBackdrop(false)
    }

    ////console.log("params2",idPrev, idFormProd, IdTipoCarta, IdColoreStampa, idFogli, idUt, idFustella, idCategoria, idBaseEtiquete, idAltezaEtiquete)
    // * ---------------Efects Helpers-----------------------


    const effectTablePrezzi = async () => {
        //debugger
        const responseTablePrezzi = await getTablePrezzi(
            Number(idPrev),
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.base === null ? 0 : initialState.base,
            initialState.depth === null ? 0 : initialState.depth,
            initialState.height === null ? 0 : initialState.height,
            initialState.quantity === null ? 0 : initialState.quantity,
            initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            initialState.iva === null ? 0 : initialState.iva,
            valuesStampaCaldoOpz
        )
        setTablaDataPrezzi(responseTablePrezzi.data);
        if (initialState.iva != null && initialState.iva != 0) {
            setNumberPrezzo(responseTablePrezzi.data.findIndex(x => x.richiestaCalcoloPrezzo.qtaRichiesta == qtaSelezinataDiabled));
        }

    }

    const effectTablePrezziNoRender = async () => {
        //debugger
        const responseTablePrezzi = await getTablePrezzi(
            Number(idPrev),
            initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            initialState.base === null ? 0 : initialState.base,
            initialState.depth === null ? 0 : initialState.depth,
            initialState.height === null ? 0 : initialState.height,
            initialState.quantity === null ? 0 : initialState.quantity,
            initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            0,
            valuesStampaCaldoOpz
        )
        return responseTablePrezzi.data;
    }

    const efectFormato = async () => {
        //debugger
        if (initialState.formatoS != null && initialState.formatoS != Number(idFormProd)) {
            setValuesStampaCaldoOpz({})
            setAlertMassimo('')
            //console.log('cambio formato')
            ////console.log("cambio formatoS",)
            initialState.tipoCarta = null;
            // initialState.coloreStampa = null; 
            // initialState.base = null;
            // initialState.depth = null;
            // initialState.height = null;
            // initialState.quantity = null;
            idFormProd = String(initialState.formatoS);
            const responseTipoCarta = await getTipoCartaList(Number(idPrev), initialState.formatoS)

            const idTipoCartaUrl = responseTipoCarta.data.findIndex(x => x.idTipoCarta == Number(IdTipoCarta))
            if (idTipoCartaUrl !== -1) {
                initialState.tipoCarta = responseTipoCarta.data[idTipoCartaUrl].idTipoCarta;
                IdTipoCarta = String(responseTipoCarta.data[idTipoCartaUrl].idTipoCarta);
            } else {
                initialState.tipoCarta = responseTipoCarta.data[0].idTipoCarta;
                IdTipoCarta = String(responseTipoCarta.data[0].idTipoCarta);
            }
            setTipoCartaList(responseTipoCarta.data)
            const responseColoreStampa = await getColoreStampa(Number(idPrev), initialState.formatoS, Number(initialState.tipoCarta));

            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa);
            setColoreStampaList(responseColoreStampa.data);

            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS, responseTipoCarta.data[0].idTipoCarta, Number(IdColoreStampa))
            setStampaCalOpz(responseStampaCaldo.data);

            //console.log('responseStampaCaldo', responseStampaCaldo.data)

            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev), initialState.formatoS, responseTipoCarta.data[0].idTipoCarta, responseColoreStampa.data[0].idColoreStampa)
            setOrientamiento(responseShowOrientamiento.data)

            const responseShowFoliPagine = await getShowFogliPagine(Number(idPrev), responseTipoCarta.data[0].idTipoCarta, responseColoreStampa.data[0].idColoreStampa, initialState.formatoS, initialState.base === null ? 0 : initialState.base,
                initialState.depth === null ? 0 : initialState.depth,
                initialState.height === null ? 0 : initialState.height,
                initialState.quantity === null ? 0 : initialState.quantity,
                initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
                initialState.iva === null ? 0 : initialState.iva, valuesStampaCaldoOpz);
            //initialState.facciatePagine = responseShowFoliPagine.data.data[0].valoreRif;
            idFogli = String(responseShowFoliPagine.data.data[0].valoreRif);

            responseStampaCaldo.data.map((item, i) => {
                //valuesStampaCaldoOpz[item.descrizione] = item.optionsSelect[0].idLavoro;
                setValuesStampaCaldoOpz({ [item.descrizione]: item.optionsSelect[0].idLavoro })
            })
            //await effectTablePrezzi()
        } else {
            //console.log('cambio formato else')
            initialState.formatoS = null;
            initialState.tipoCarta = null;
            initialState.coloreStampa = null;
            // initialState.base = null;
            // initialState.depth = null;
            // initialState.height = null;
            // initialState.quantity = null;

            handleData();
        }
    }

    const efectTipoCarta = async () => {
        if (initialState.tipoCarta != null && initialState.tipoCarta != Number(IdTipoCarta)) {
            console.log("cambio TipoCarta")
            //setValuesStampaCaldoOpz({})
            //initialState.coloreStampa = null;
            // initialState.base = null;
            // initialState.depth = null;
            // initialState.height = null;
            // initialState.quantity = null;

            const responseColoreStampa = await getColoreStampa(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta);
            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa)
            setColoreStampaList(responseColoreStampa.data)
            //debugger
            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta, responseColoreStampa.data[0].idColoreStampa)
            setStampaCalOpz(responseStampaCaldo.data);

            
            // const valueRespone = responseStampaCaldo.data.map((item, i) => {
            //     //valuesStampaCaldoOpz[item.descrizione] = item.optionsSelect[0].idLavoro;
            //     return({ [item.descrizione]: item.optionsSelect[0].idLavoro });
            // }) as any
            // setValuesStampaCaldoOpz(valueRespone);
            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta, responseColoreStampa.data[0].idColoreStampa)
            setOrientamiento(responseShowOrientamiento.data)
            //await effectTablePrezzi()
        } else {
            ////console.log('cambio tipo carta else')
            //initialState.tipoCarta = null;
            initialState.coloreStampa = null;
            // initialState.base = null;
            // initialState.depth = null;
            // initialState.height = null;
            //initialState.quantity = null;

            const responseColoreStampa = await httpGetColoreStampa(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta))
            setColoreStampaList(responseColoreStampa.data)
            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa)

            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta), responseColoreStampa.data[0].idColoreStampa);

            setStampaCalOpz(responseStampaCaldo.data);

            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta), responseColoreStampa.data[0].idColoreStampa)
            setOrientamiento(responseShowOrientamiento.data)
            //await effectTablePrezzi()

        }
    }

    const effectTablePrezziNull = async () => {
        if (initialState.base, initialState.depth, initialState.height, initialState.quantity, initialState.iva, initialState.coloreStampa, initialState.facciatePagine, valuesStampaCaldoOpz) {
            await effectTablePrezzi()
        }
    }

    const effectSvg = async () => {
        if (initialState.base && initialState.depth && initialState.height) {
            const responseSvg = await getSVG((initialState.base), (initialState.depth), (initialState.height), Number(idPrev),)
            setImageSvg(responseSvg.data);
        }
    }

    // useEffect(() => {
    //     console.log('ejecuta el primero');
    //     efectFormato();
    // }, [initialState.formatoS])

    // useEffect(() => {
    //     efectTipoCarta();
    // }, [initialState.tipoCarta])

    

    // useEffect(() => {
    //     if (initialState.iva != null && initialState.iva != 0) {
    //         setNumberPrezzo(tablaDataPrezzi.findIndex(x => x.richiestaCalcoloPrezzo.qtaRichiesta == qtaSelezinataDiabled));
    //     }
    //     console.log('se volvio a jecutar');
    //     //console.log("valuesStampaCaldoOpz", valuesStampaCaldoOpz)
    //     //handleData();
    //     effectSvg();
    //     handleDimensioniStr();
    //     //effectTablePrezzi();
    //     handleChangePrezzo();  //* Este comentamos 

    //     //effectPermiso();
    // }, [(initialState.base && initialState.base > 0) ? initialState.base : null, (initialState.depth && initialState.depth > 0) ? initialState.depth : null, (initialState.height && initialState.height > 0) ? initialState.height : null, (initialState.quantity && initialState.quantity > 0) ? initialState.quantity : null, initialState.iva, initialState.coloreStampa, initialState.facciatePagine,valuesStampaCaldoOpz])

    // useEffect(() => {
    // }, [])

    useEffect(() => {
        const c = localStorage.getItem('c')
        if (c === undefined) {
            const arrayObj: any = []
            localStorage.setItem('c', JSON.stringify(arrayObj))
        }
        handleData();
        handleDataUtn();
        handleGetFormato();
        handleChangePrezzo();
    }, [])

    return {
        ...initialState,
        initialState,
        handleChange,
        handleOptionsTipoCarta,
        handleOptionsColoreStampa,
        handleOptionsOpzioni,
        stampaCalOpz,
        handleStampaCaldoOpz,
        tablaDate,
        showColumTable,
        tablaDataPrezzi,
        showTablePreez,
        handleChangeRowSelect,
        selectRow,
        handleOrientamiento,
        orientamiento,
        hanldeFormatoList,
        showBloccoMisure,
        mmValue,
        disableProfundita,
        textMetrics,
        showProfundita,
        showOpzzioni,
        idBaseEtiquete,
        idAltezaEtiquete,
        formatoDinamico,
        handleOptionsFormat,
        showSvg,
        imageSvg,
        setimgAcoppiati,
        imgAcoppiati,
        valuesStampaCaldoOpz,
        showCoperatina,
        copertina,
        handleCoperatinaOpz,
        showSotoblocco,
        sotoblocco,
        handleSotobloccoOpz,
        showFaciatePagine,
        handleFogliPagine,
        labelFogli,
        showQtaCustom,
        alertMassimo,
        viewRows,
        handleChangeViewTableRows,
        utenteData,
        setSenderComandargument,
        senderComandargument,
        handleCalcolaTuto,
        calcolaTuto,
        handleCarrello,
        handleHidden,
        setScadenza,
        handleSelectDate,
        textTipoCarta,
        idFormProd, IdTipoCarta, IdColoreStampa,
        setTablaDataPrezzi,
        qtaSelezinata,
        setQtaSelezinata,
        idFustella,
        openLoadingBackdrop,
        setOpenLoadingBackdrop,
        prezzoActive,
        idUt,
        handleLogin,
        handleImg,
        prodottoConsigliato,
        rencensioniP,
        recencioniC,
        descrizioneDinamica,
        opzInclusa,
        handleCompraloSubito,
        menuDateConsegna,
        formatoList,
        handleOptionOPZ,
        handleCarrelloData,
        handleDonwloadPDF,
        TotaleProvisorio,
        dimensionniStr,
        codeStart,
        numberPrezzo
    }
}

export default useRefactorProdotto