type AdditionalFields = Record<string, any> ;


export interface InitialValuesProdotto extends AdditionalFields {
  base: null | number;
  depth: null | number;
  height: null | number;
  quantity: null | number;
  tipoCarta: null | number;
  coloreStampa: null | number;
  // stampaCaldo: null | number;
  // plastificazione: null | number;
  facciatePagine: null | number;
  Format: string;
  formatoS: null | number;
  iva: null | number;
  orientamiento: null | number;
  nome: null | string;
  note: null | string;
  qtaSelezinata: null | number;
}

export interface OptionsSelect {
  label: string
  value: string | number
  description?: string
  image?: string
  formatoCartaStr?: string
  dimensioni? : string,
  pdf?:string,
}
