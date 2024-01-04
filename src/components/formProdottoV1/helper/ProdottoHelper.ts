import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { IFormato } from "../interface/Formato";
import { ColoreStampa } from "../interface/coloreStampa";
import { ArraySotoblocco, Copertina, Datum, Sotoblocco } from "../interface/fogliPagine";
import { Opzioni } from "../interface/opzioni";
import { OptionsSelectS, StaCalOpz } from "../interface/stampaCaldo";
import { TipoDiCarta } from "../interface/tipoCarta";

export const handleFormatoList = (formatoList: IFormato[]) => {
  if (formatoList.length === 0) return [];
  const options: OptionsSelect[] = formatoList.map((elem) => {
    return {
      label: elem.formato,
      value: elem.idFormProd,
      description: elem.descrizioneHTML,
      image: elem.imgRif,
      formatoCartaStr: elem.formatoCartaStr,
      pdfTemplate: elem.pdfTemplate,
      pdfTemplate3d:elem.pdfTemplate3d,
    };
  });

  return options;
};
export const handleTipoCarta = (formatoList: TipoDiCarta[]) => {
  if (formatoList.length === 0) return [];
  const options: OptionsSelect[] = formatoList.map((elem) => {
    return {
      label: elem.tipologia,
      value: elem.idTipoCarta,
      description: elem.descrizioneEstesa,
      image: elem.imgRif,
    };
  });

  return options;
};

export const handleColoriStampa = (coloreStampaList: ColoreStampa[]) => {
  if (coloreStampaList.length === 0) return [];
  const options: OptionsSelect[] = coloreStampaList.map((elem) => {
    return {
      label: elem.descrizione,
      value: elem.idColoreStampa,
      description: elem.descrizione,
      image: elem.imgrif,
    };
  });
  return options;
};

export const handleStampaCaldoDesc = (stampa: StaCalOpz[]) => {
  if (stampa.length === 0) return [];
  const normalized = stampa.map((elem) => {
    const options = handleStampaCaldoOpz(elem.optionsSelect);
    return {
      label: elem.descrizione,
      options,
      value: "",
      tipoControllo: elem.tipoControllo,
    };
  });
  return normalized
};

const handleStampaCaldoOpz = (optionsSelect: OptionsSelectS[]) => {
  if (optionsSelect.length === 0) return [];
  const options: OptionsSelect[] = optionsSelect.map((elem) => {
    return {
      label: elem.descrizione,
      value: elem.idLavoro,
      description: elem.descrizioneEstesa,
      image: elem.imgRif,
    };
  });
  return options;
};

export const handleOrientamiento = () => {
  const options: OptionsSelect[] = [
    {
      label: "Orizzontale",
      value: 0,
    },
    {
      label: "Verticale",
      value: 1,
    },
  ];
  return options;
};

export const handleOptionSottoblocco = (sotoblocco: Sotoblocco) => {
  const optionSotoblocco: ArraySotoblocco[] = [{
    idTipoCartaD: sotoblocco.showSotoblocco,
    descrizioneEstesa: sotoblocco.dezcrzzione,
    imgRif: sotoblocco.imgRif,
    tipologia: sotoblocco.tipologia,
    text: sotoblocco.textSottoBlocco,
  }];

  if (optionSotoblocco.length === 0) return []
  if (sotoblocco.showSotoblocco == 0) return []
  
  const option: OptionsSelect[] = optionSotoblocco.map((elem) => {
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

export const handleOptionCopertina = (sotoblocco: Copertina) => {
  const optionSotoblocco: ArraySotoblocco[] = [{
    idTipoCartaD: sotoblocco.showCopertina,
    descrizioneEstesa: sotoblocco.dezcrzzione,
    imgRif: sotoblocco.imgRif,
    tipologia: sotoblocco.tipologia,
    text: sotoblocco.textCopertina,
  }];
  if (optionSotoblocco.length === 0) return []
  if (sotoblocco.showCopertina === 0) return []
  const option: OptionsSelect[] = optionSotoblocco.map((elem) => {
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

export const handleOptionsOpzioni = (opzioniList: Opzioni[]): OptionsSelect[] => {
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
export const handleFogliPagine = (showFlogliPagine: Datum[] ,fogliLabel:string,showFogli:boolean) => {
  if (!showFogli) return []
  if (showFlogliPagine.length === 0) return []
  const options: OptionsSelect[] = showFlogliPagine.map(elem => {
      return {
          label: elem.voceTxt,
          value: elem.valoreRif,
          description:fogliLabel,
      }
  })

  return options;
}