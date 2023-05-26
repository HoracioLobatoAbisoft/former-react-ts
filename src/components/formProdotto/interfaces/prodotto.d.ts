export interface InitialValuesProdotto {
  base: null | number;
  depth: null | number;
  height: null | number;
  quantity: null | number;
  tipoCarta: null | number;
  coloreStampa: null | number;
  stampaCaldo: null | number;
  plastificazione: null | number;
  Format:string
  
}

export interface OptionsSelect{
  label:string
  value:string | number
  description?:string
  image?:string
}
