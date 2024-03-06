export interface RootObject {
    data:    Data;
    message: string;
    status:  number;
   }
   
   export interface Data {
    aggiornaReview:            any[];
    caricaProdottoConsigliato: CaricaProdottoConsigliato[];
    coloreStampa:              ColoreStampa[];
    descrizioneDinamica:       DescrizioneDinamica;
    disabledProfundita:        DisabledProfundita;
    formatoDinamic:            FormatoDinamic;
    formatoProdotto:           FormatoProdotto[];
    listDateTable:             ListDateTable;
    opzioni:                   Opzioni[];
    recensioni:                Recensioni;
    showBloccoMisure:          boolean;
    showColumTabellaPrezzi:    ShowColumTabellaPrezzi;
    showOpzioni:               number;
    showOrientamento:          boolean;
    showQtaCustom:             boolean;
    showSVG:                   boolean;
    stampaCaldoPlatificacione: StampaCaldoPlatificacione[];
    tipoCarta:                 TipoCarta[];
   }
   
   export interface CaricaProdottoConsigliato {
    aggregateRatingStr: string;
    carta:              string;
    categoria:          string;
    colori:             string;
    dataFineValidita:   null;
    descrSito:          string;
    existPromo:         boolean;
    formato:            string;
    getImgFormato:      string;
    percentualePromo:   null;
    recesioni:          number;
    stars:              string;
    url:                string;
   }
   
   export interface ColoreStampa {
    descrizione:    string;
    fr:             boolean;
    idColoreStampa: number;
    imgrif:         string;
    isChanged:      boolean;
    nLastre:        number;
    nomeInUrl:      string;
    sigla:          string;
   }
   
   export interface DescrizioneDinamica {
    descrizioneEstesa:   string;
    descrizioneEstesaEx: string;
    idReparto:           number;
    nombe:               string;
    showTemplate:        boolean;
    showTemplate2D:      boolean;
    showTemplate3D:      boolean;
    tipoCarta:           string;
   }
   
   export interface DisabledProfundita {
    disabled:       boolean;
    txt_Profundita: null;
   }
   
   export interface FormatoDinamic {
    anima:         number;
    categoria:     string;
    descrizione:   string;
    idCatFustella: number;
    imgRif:        string;
    isChanged:     boolean;
    larghezzaMax:  number;
    nomeInUrl:     string;
    tipoForma:     number;
   }
   
   export interface FormatoProdotto {
    areaCmQuadrati:           number;
    descrizioneEstesa:        string;
    descrizioneHTML:          string;
    dimensioniCartaStr:       string;
    fc:                       Fc;
    formato:                  string;
    formatoCartaStr:          string;
    idCatFormatoProdotto:     number;
    idFormCarta:              number;
    idFormProd:               number;
    imgRif:                   string;
    isChanged:                boolean;
    isLastra:                 number;
    isRotolo:                 number;
    larghezza:                number;
    larghezzaCm:              number;
    lunghezza:                number;
    lunghezzaCm:              number;
    nomeAlbero:               NomeAlbero;
    nomeAlberoRif:            string;
    nomeInUrl:                string;
    numfacc:                  number;
    ordinamentoByListinoBase: number;
    orientabile:              number;
    orientamento:             number;
    orientamentoStr:          OrientamentoStr;
    pdfTemplate:              string;
    pdfTemplate3d:            PDFTemplate3D;
    prodottoFinito:           boolean;
    sigla:                    string;
   }
   
   export interface Fc {
    altezza:           number;
    altezzaMM:         number;
    area:              number;
    formatoCarta:      string;
    idFormCarta:       number;
    isChanged:         boolean;
    larghezza:         number;
    larghezzaMM:       number;
    latoCorto:         number;
    latoCortoMM:       number;
    latoLungo:         number;
    latoLungoMM:       number;
    tolleranzaDifetto: number;
    tolleranzaEccesso: number;
   }
   
   export enum NomeAlbero {
    CartellinoBottiglia19X56 = "Cartellino bottiglia 19 x 5,6",
    Empty = "",
   }
   
   export enum OrientamentoStr {
    Orizzontale = "Orizzontale",
    Verticale = "Verticale",
   }
   
   export enum PDFTemplate3D {
    Empty = "",
    The201552713183731731PDF = "201552713183731731.pdf",
    The20160427194801424853PDF = "20160427194801424853.pdf",
   }
   
   export interface ListDateTable {
    dataFast:              Date;
    dataFastProduzione:    Date;
    dataNormale:           Date;
    dataNormaleProduzione: Date;
    dataSlow:              Date;
    dataSlowProduzione:    Date;
    giornoIntF:            string;
    giornoIntFP:           string;
    giornoIntN:            string;
    giornoIntNP:           string;
    giornoIntS:            string;
    giornoIntSP:           string;
    giornoStrF:            string;
    giornoStrFP:           string;
    giornoStrN:            string;
    giornoStrNP:           string;
    giornoStrS:            string;
    giornoStrSP:           string;
    meseF:                 string;
    meseN:                 string;
    meseS:                 string;
   }
   
   export interface Opzioni {
    accorpabile:                 number;
    catLav:                      Cat;
    categoriaLavB:               Cat;
    costoSingCopia:              number;
    descrizione:                 string;
    descrizioneCat:              string;
    descrizioneEstesa:           string;
    descrizioneEstesaEx:         string;
    dimensMaxH:                  number;
    dimensMaxW:                  number;
    dimensMedieMaxH:             number;
    dimensMedieMaxW:             number;
    dimensMedieMinH:             number;
    dimensMedieMinW:             number;
    dimensMinH:                  number;
    dimensMinW:                  number;
    extraData:                   string;
    extraDataB:                  string;
    formatoRiferimento:          string;
    ggRealiz:                    number;
    grammiMax:                   number;
    grammiMin:                   number;
    idCatLav:                    number;
    idLavoro:                    number;
    idMacchinario:               number;
    idMacchinario2:              number;
    idTipoLav:                   number;
    imgRif:                      string;
    imgZoom:                     string;
    isChanged:                   boolean;
    lavorazioneInterna:          number;
    listExtraData:               any[];
    macchinario:                 string;
    macchinarioB:                Macchinario;
    macchinarioB2:               Macchinario;
    macchinarioRif:              Macchinario;
    macchinarioRif2:             Macchinario;
    preTaglio:                   number;
    premio:                      number;
    prezzi:                      Prezzi[];
    prezziB:                     Prezzi[];
    prezzo:                      number;
    pubblica:                    boolean;
    sePresenteCalcolaSuSoggetti: number;
    selezionata:                 boolean;
    sigla:                       string;
    stato:                       number;
    suCommessa:                  boolean;
    suProdotto:                  boolean;
    tempoRif:                    number;
    tipoControlloWeb:            number;
   }
   
   export interface Cat {
    descrizione:           string;
    fileLavNonSelezionata: string;
    idCatLav:              number;
    isChanged:             boolean;
    ordineEsecuzione:      number;
    repartoAppartenenza:   number;
    sovrascriviImgScheda:  number;
    tipoCaratteristica:    number;
    tipoCaratteristicaB:   number;
    tipoControllo:         number;
    tipoControlloB:        number;
    visibilePreventivo:    number;
   }
   
   export interface Macchinario {
    alertCommesse:         number;
    altezzaCaricoCm:       number;
    caricoPrevistoMensile: number;
    copieOra:              number;
    costoMensile:          number;
    costoMinAvv:           number;
    costoSingCopia:        number;
    descrizione:           string;
    descrizioneEstesa:     string;
    descrizioneEx:         string;
    descrizioneOnline:     string;
    hotFolderFlusso:       string;
    idMacchinario:         number;
    idRepartoDefault:      number;
    imgBig:                string;
    imgRif:                string;
    isChanged:             boolean;
    minutiAvv:             number;
    ordinamento:           number;
    tipo:                  number;
    visibileOnline:        number;
   }
   
   export interface Prezzi {
    formatoCarta:           Fc | null;
    formatoProdotto:        FormatoProdotto | null;
    idFormCarta:            number;
    idFormProd:             number;
    idLavPrezzo:            number;
    idLavoro:               number;
    isChanged:              boolean;
    prezzo:                 number;
    prezzo2:                number;
    prezzoMin:              number;
    prezzoMin2:             number;
    prezzoOltre:            number;
    prezzoOltre2:           number;
    prezzoSuProdottoFinito: boolean;
    qtaRif:                 number;
    tipoGrandezza:          number;
    tipoGrandezzaPrezzo:    number;
   }
   
   export interface Recensioni {
    recesioni: number;
    stars:     string;
    voto:      string;
   }
   
   export interface ShowColumTabellaPrezzi {
    descrizione: string;
    prezzoFazt:  number;
    prezzoNorm:  number;
    prezzoSlow:  number;
   }
   
   export interface StampaCaldoPlatificacione {
    descrizione:         string;
    idCatLav:            number;
    optionsSelect:       OptionsSelect[];
    tipoCaratteristicaB: number;
    tipoControllo:       number;
    tipoControlloB:      number;
   }
   
   export interface OptionsSelect {
    descrizione:       string;
    descrizioneEstesa: string;
    idCatLav:          number;
    idLavoro:          number;
    idMacchinario:     number;
    imgRif:            string;
    macchinario:       string;
    prezzo:            number;
    sigla:             string;
   }
   
   export interface TipoCarta {
    altezza:             number;
    composizioniCarta:   any[];
    composizioniCartaB:  any[];
    costoCartaKg:        number;
    costoRiferimento:    number;
    descrizioneEstesa:   string;
    descrizioneEstesaEx: string;
    descrizioneHTML:     string;
    finitura:            string;
    grammi:              number;
    hotFolder:           string;
    idTipoCarta:         number;
    imgRif:              string;
    isChanged:           boolean;
    larghezza:           number;
    nomeInUrl:           string;
    riassuntoCarrello:   string;
    sigla:               string;
    spessore:            number;
    tipoCarta:           number;
    tipoCosto:           number;
    tipologia:           string;
   }
   