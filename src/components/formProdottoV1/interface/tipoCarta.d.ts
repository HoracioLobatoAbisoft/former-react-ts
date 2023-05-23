export interface ResponseApi<T> {
 data:    T;
 message: string;
 status:  number;
}

export interface TipoDiCarta {
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