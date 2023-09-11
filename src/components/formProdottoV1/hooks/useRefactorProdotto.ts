import { useEffect, useState } from 'react'
import { InitialValuesProdotto, OptionsSelect } from '../../formProdotto/interfaces/prodotto';
import { useNavigate, useParams } from 'react-router-dom';
import { getSvgImageService, httpGetAggiornaReview, httpGetCalcolaTuto, httpGetColoreStampa, httpGetDescrizioniDinamica, httpGetDisabledProfundita, httpGetFormatoArray, httpGetFormatoParams, httpGetFormatoStr, httpGetHelperData, httpGetOpzioni, httpGetOpzioniCarrello, httpGetProdottoConsigliato, httpGetRecensioni, httpGetShowAlertMassimo, httpGetShowBloccoMisure, httpGetShowColumTable, httpGetShowFogliPagine, httpGetShowOpzioni, httpGetShowOrientmiento, httpGetShowQtaCustom, httpGetShowSVG, httpGetShowTabellaPrezzi, httpGetStampaCaldo, httpGetTableDate, httpGetTablePrezzi, httpGetTipoCarta } from '../services';
import { ResponseApi, TipoDiCarta } from '../interface/tipoCarta';
import { ColoreStampa } from '../interface/coloreStampa';
import { Opzioni } from '../interface/opzioni';
import { OptionsSelectS, StaCalOpz } from '../interface/stampaCaldo';
import { DateConsegna, TableDate } from '../interface/tableDate';
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
import { DateFormatDDMM, DateFormatItWDMY } from '../../../Helpers/formatDates';
import { DataGgetCorriereSelezionata } from '../../carrello/Interfaces/Corriere';

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

    const [showTablePreez, setShowTablePreez] = useState<boolean>(false);
    const [orientamiento, setOrientamiento] = useState<boolean>();
    const [showBloccoMisure, setShowBloccoMisure] = useState<boolean>()
    const [showProfundita, setShowProfundita] = useState<boolean>();
    const [showSvg, setShowSvg] = useState<boolean>()
    const [showFaciatePagine, setShowFaciatePagine] = useState<boolean>()
    const [showQtaCustom, setShowQtaCustom] = useState<boolean>()
    const [viewRows, setViewRows] = useState<Boolean>(true)
    const [openLoadingBackdrop, setOpenLoadingBackdrop] = useState<boolean>(false)

    const [textMetrics, setTextMetrics] = useState<string>('')
    const [formatoDinamico, setFormatoDinamico] = useState<string>('')
    const [imgAcoppiati, setimgAcoppiati] = useState<string | undefined>()
    const [labelFogli, setLabelFogli] = useState<string>('');
    const [alertMassimo, setAlertMassimo] = useState<string>("")
    const [codeStart, setCodeStart] = useState<string>("N")
    const [textTipoCarta, setTextTipoCarta] = useState<string>('')

    const [dateConsegna, setDateConsegna] = useState<DateConsegna>();
    const [menuDateConsegna, setMenuDateConsegna] = useState<string>()

    const [qtaSelezinata, setQtaSelezinata] = useState<number>(0)
    const [heplerFormProd, setHeplerFormProd] = useState<number>(0)

    const [showCoperatina, setShowCoperatina] = useState<number>()
    const [showSotoblocco, setShowSotoblocco] = useState<number>();
    const [prezzoActive, setPrezzoActive] = useState<number>(0);


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
            const responseUtente = await getUtente(Number(idUt))
            setUtenteData(responseUtente);

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
            setDateConsegna({ ...dateConsegna, date1: responseDateTable.data.dataNormale, date2: responseDateTable.data.dataNormaleProduzione })

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

            // const responseTablePrezzi = await getTablePrezzi(
            //     Number(idPrev),
            //     initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
            //     initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,
            //     initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
            //     initialState.base === null ? 0 : initialState.base,
            //     initialState.depth === null ? 0 : initialState.depth,
            //     initialState.height === null ? 0 : initialState.height,
            //     initialState.quantity === null ? 0 : initialState.quantity,
            //     initialState.facciatePagine === null ? Number(idFogli) : initialState.facciatePagine,
            //     initialState.iva === null ? 0 : initialState.iva,
            //     valuesStampaCaldoOpz
            // )
            // setTablaDataPrezzi(responseTablePrezzi.data);
            await effectTablePrezzi()
            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev),
                initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS,
                initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta,
                initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,)
            setOrientamiento(responseShowOrientamiento.data)

            const responseFormatoList = await getFormatoList(Number(idPrev));
            setFormatoList(responseFormatoList.data)

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
            setPrezzoActive(responseCalcolaTuto.data.prezzoCalcolatoNetto)
            await handleOpzionisStatic();
            if (initialState.base != null && initialState.height != null) {

                await handleShowAlertMassimo();
            }

            setOpenLoadingBackdrop(false)

            const responseProdottoCOnsigliato = await geProdottoConsigliato(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setProdottoConsigliato(responseProdottoCOnsigliato.data);

            const responseRecensioniP = await getRecensioni(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setRencensioniP(responseRecensioniP.data);

            const responseAggiornaReview = await getAggiornaReview(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa, GLOBAL_CONFIG.IMG_IP)

            setRecencioniC(responseAggiornaReview.data);

            const responseDescrizioniDinamica = await getDescrizioniDinammica(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : initialState.formatoS, initialState.tipoCarta === null ? Number(IdTipoCarta) : initialState.tipoCarta, initialState.coloreStampa === null ? Number(IdColoreStampa) : initialState.coloreStampa,)

            setDescrizioneDinamica(responseDescrizioniDinamica.data);

            handleOpzioneInclusa(responseStampaCaldo.data);

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



    /* 
    * <===================handleChange | eventos de cambios=======================>
    */
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        //console.log('stampaOzp\n', evt.target.name, evt.target.value);
        const { name, value } = evt.target;

        if (name !== "Format" && name !== "base" && name !== "coloreStampa" && name !== "depth" && name !== "height" && name !== "quantity" && name !== "tipoCarta" && name !== "formatoS" && name !== "facciatePagine" && name !== 'nome' && name !== 'note') {
            ////console.log('NO esta ',name,value);
            // valuesStampaCaldoOpz[name] = Number(value);

            // effectTablePrezzi()
            // if (valuesStampaCaldoOpz) {
            //     effectTablePrezzi()
            // }
            //valuesStampaCaldoOpz.name = Number(value);

            setValuesStampaCaldoOpz({
                ...valuesStampaCaldoOpz,
                [name]: Number(value)
            });
        }
        if (name === "base" || name === "depth" || name === "height") {
            if (parseInt(value) > 0) {
                setMMValue({
                    ...mmValue,
                    [name]: false
                })
            }
        }
        // if (name == "tipoCarta") setValuesStampaCaldoOpz({})
        // if (name == "formatoS") { setValuesStampaCaldoOpz({}) };

        switch (name) {
            case 'base':
                //console.log("aquiiii")
                let newBase: number;
                if (disableProfundita?.disabled === true) {
                    //console.log("aquiiii")
                    newBase = parseInt(value) < 70 ? 70 : parseInt(value);
                } else if (showProfundita === false) {
                    newBase = parseInt(value) < 1 ? 1 : parseInt(value);
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
                break;
            case 'depth':
                const newdepth = parseInt(value) < 14 ? 14 : parseInt(value);
                setInitialState({
                    ...initialState,
                    [name]: newdepth,
                });
                evt.target.value = newdepth.toString();
                break;
            case 'height':
                let newheight: number;
                if (disableProfundita?.disabled === true) {
                    newheight = parseInt(value) < 100 ? 100 : parseInt(value);
                } else if (showProfundita === false) {
                    newheight = parseInt(value) < 1 ? 1 : parseInt(value);
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
                break;
            default:
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
                image: elem.imgrif
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
        //setValueMapStampaOpz({...valueMapStampaOpz,options})
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

    const hanldeFormatoList = () => {
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
        setQtaSelezinata(QtaSelezionata)
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

        ////console.log("Calcola", code, " ", responseCalcolaTuto.data.boxLavoracioni)

        setCalcolaTuto(responseCalcolaTuto.data)
        setOpenLoadingBackdrop(false)

    }

    const handleSelectDate = (code: string, date1: Date | undefined, date2: Date | undefined) => {
        //console.log('Code: ', code, "Date1", date1, "Date2", date2)

        if (date1 != undefined && date2 != undefined) {
            setDateConsegna({ date1: date1, date2: date2 })
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

        setAlertMassimo(responseGetShowAlertMassimo.data)
        if (responseGetShowAlertMassimo.data != '') {
            setShowTablePreez(false)
            setTablaDataPrezzi([])
        }
    }

    const handleCarrello = async () => {

        //const arrayCarrello = [];

        const responseHandFormato = hanldeFormatoList();
        const responseHandTipoCarta = handleOptionsTipoCarta();
        const responseHandColoreStampa = handleOptionsColoreStampa();
        const responseHandOrientamiento = handleOrientamiento();
        const responseHandFacPagine = handleFogliPagine();

        const arrayStampa: OptionsSelect[] = [];
        const _stampaOpzId: number[] = []
        Object.keys(valuesStampaCaldoOpz).forEach((key) => {
            const value = valuesStampaCaldoOpz[key];
            const objVaStampa: OptionsSelect = {
                label: key,
                value: value,
            }
            arrayStampa.push(objVaStampa);
            ////console.log("ValuyeOpz\n", key, value);
        })
        const _stampaOpz: string[] = []
        const _stampaOpzAllString: string[] = []
        if (arrayStampa.length > 0) {

            stampaCalOpz?.map((elem, i) => {
                const responseHandStampaOpz = handleStampaCaldoOpz(elem.optionsSelect);
                arrayStampa.map((item, j) => {
                    if (item.value != 0) {
                        const dataPush = responseHandStampaOpz.find(x => x.value == item.value);
                        ////console.log("dataPush", dataPush);
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

        //console.log('StampaLstss \n', noExistentes, '\n', opzioniList, "\n", arrayStampa, valuesStampaCaldoOpz)
        const objDataProdotto: ObjCarrello = {
            idUt: idUt,
            idPrev: idPrev,
            IdFormProd: initialState.formatoS == null ? idFormProd : initialState.formatoS,
            IdTipoCarta: initialState.tipoCarta == null ? IdTipoCarta : initialState.tipoCarta,
            IdColoreStampa: initialState.coloreStampa == null ? IdColoreStampa : initialState.coloreStampa,
            nome: initialState.nome,
            note: initialState.note,
            qta: qtaSelezinata,
            img: showSvg ? imageSvg : helperDataProdotto?.imgRif,
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
            stampaOPZ: _stampaOpz,
            _stampaOpzId: _stampaOpzId,
            nomeUrl: helperDataProdotto?.url,
            scadenza: dateConsegna,
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
        handleHidden();

    }

    const handleHidden = async () => {
        ////console.log('mando 1')
        window.parent.postMessage({ color: 'bg_hidden', operation: enOperationFrame.hidden }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleCarrelloData = (Id: number | null | undefined, options: OptionsSelect[]) => {
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
        return img == undefined ? hanldeFormatoList()[0]?.image : img.image
    }

    const handleOpzioneInclusa = (responseStampaCaldo: StaCalOpz[]) => {
        const valStampaCaldo0 = responseStampaCaldo.filter(x => x.optionsSelect[0].idLavoro != 0);



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

            console.log(item.label)

        })
        console.log('valueOpz', opzH)
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
            //console.log('cambio formato')
            ////console.log("cambio formatoS",)
            // initialState.tipoCarta = null;
            // initialState.coloreStampa = null; 
            initialState.base = null;
            initialState.depth = null;
            initialState.height = null;
            initialState.quantity = null;
            idFormProd = String(initialState.formatoS);
            const responseTipoCarta = await getTipoCartaList(Number(idPrev), initialState.formatoS)
            initialState.tipoCarta = responseTipoCarta.data[0].idTipoCarta;
            IdTipoCarta = String(responseTipoCarta.data[0].idTipoCarta)
            setTipoCartaList(responseTipoCarta.data)
            const responseColoreStampa = await getColoreStampa(Number(idPrev), initialState.formatoS, initialState.tipoCarta);
            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa)
            setColoreStampaList(responseColoreStampa.data)
            //debugger
            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS, responseTipoCarta.data[0].idTipoCarta, initialState.coloreStampa)
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
            initialState.facciatePagine = responseShowFoliPagine.data.data[0].valoreRif;
            idFogli = String(responseShowFoliPagine.data.data[0].valoreRif);

            responseStampaCaldo.data.map((item, i) => {
                //valuesStampaCaldoOpz[item.descrizione] = item.optionsSelect[0].idLavoro;
                setValuesStampaCaldoOpz({ [item.descrizione]: item.optionsSelect[0].idLavoro })
            })
            await effectTablePrezzi()
        } else {
            //console.log('cambio formato else')
            initialState.formatoS = null;
            initialState.tipoCarta = null;
            initialState.coloreStampa = null;
            initialState.base = null;
            initialState.depth = null;
            initialState.height = null;
            initialState.quantity = null;

            handleData();
        }
    }

    const efectTipoCarta = async () => {
        if (initialState.tipoCarta != null && initialState.tipoCarta != Number(IdTipoCarta)) {
            //console.log("cambio TipoCarta")
            setValuesStampaCaldoOpz({})
            initialState.coloreStampa = null;
            initialState.base = null;
            initialState.depth = null;
            initialState.height = null;
            initialState.quantity = null;

            const responseColoreStampa = await getColoreStampa(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta);
            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa)
            setColoreStampaList(responseColoreStampa.data)
            //debugger
            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta, responseColoreStampa.data[0].idColoreStampa)
            setStampaCalOpz(responseStampaCaldo.data);

            responseStampaCaldo.data.map((item, i) => {
                //valuesStampaCaldoOpz[item.descrizione] = item.optionsSelect[0].idLavoro;
                setValuesStampaCaldoOpz({ [item.descrizione]: item.optionsSelect[0].idLavoro })
            })

            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta, responseColoreStampa.data[0].idColoreStampa)
            setOrientamiento(responseShowOrientamiento.data)
            await effectTablePrezzi()

        } else {
            ////console.log('cambio tipo carta else')
            //initialState.tipoCarta = null;
            initialState.coloreStampa = null;
            initialState.base = null;
            initialState.depth = null;
            initialState.height = null;
            initialState.quantity = null;

            const responseColoreStampa = await httpGetColoreStampa(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta))
            setColoreStampaList(responseColoreStampa.data)
            initialState.coloreStampa = responseColoreStampa.data[0].idColoreStampa;
            IdColoreStampa = String(responseColoreStampa.data[0].idColoreStampa)

            const responseStampaCaldo = await getStampaCaldoPlaz(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta), responseColoreStampa.data[0].idColoreStampa);

            setStampaCalOpz(responseStampaCaldo.data);

            const responseShowOrientamiento = await getShowOrientamiento(Number(idPrev), initialState.formatoS === null ? Number(idFormProd) : Number(initialState.formatoS), initialState.tipoCarta != null ? Number(IdTipoCarta) : Number(initialState.tipoCarta), responseColoreStampa.data[0].idColoreStampa)
            setOrientamiento(responseShowOrientamiento.data)
            await effectTablePrezzi()

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



    useEffect(() => {
        efectFormato();
    }, [initialState.formatoS])

    useEffect(() => {
        efectTipoCarta();
    }, [initialState.tipoCarta])

    // useEffect(() => {
    //     effectTablePrezzi();
    // }, [valuesStampaCaldoOpz])

    useEffect(() => {
        const c = localStorage.getItem('c')
        if (c === undefined) {
            const arrayObj: any = []
            localStorage.setItem('c', JSON.stringify(arrayObj))
        }
        handleData();
        effectSvg();
        handleDimensioniStr();
    }, [initialState.base, initialState.depth, initialState.height, initialState.quantity, initialState.iva, initialState.coloreStampa, initialState.facciatePagine, valuesStampaCaldoOpz])

    ////console.log("setSenderComandargument" ,tablaDataPrezzi)
    ////console.log("opcioniList", valuesStampaCaldoOpz)
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
    }
}

export default useRefactorProdotto