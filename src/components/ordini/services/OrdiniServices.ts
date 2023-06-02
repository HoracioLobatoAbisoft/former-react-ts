import MasterService from "../../../services/MasterService";
import { conf } from "../../../../config";
//const CLIENTE_API_URL = "https://localhost:7143" + "/api";
//const CLIENTE_API_URL = "http://localhost:5183" + "/api";
const CLIENTE_API_URL = "http://95.110.133.251:5050" + "/api";

class OrdiniService {
  getOrdini(idUdt:string) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini`;
    
    return MasterService.getDataOrdini(CURRENT_API_URL, idUdt);
  }

  getOrdiniById(id: any, idUdt:string) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/GetById`;
    
    return MasterService.getDataOrdiniById(CURRENT_API_URL, id, idUdt);
  }

  getOrdiniIndirizo(id: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Indirizo`;
    
    return MasterService.getDataOrdiniIndirizo(CURRENT_API_URL, id);
  }


  postOrdineEmail(data: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/SendEmail`;
    
    return MasterService.postDataOrdineEmail(CURRENT_API_URL, data);
  }

  putIndirizo(data: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/ModificaOrdiniIndirizzo`;
    
    return MasterService.putIndirizoData(CURRENT_API_URL, data);
  }


  getNacioni() {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Indirizo/GetCaricaNazioni`;
    
    return MasterService.getNacioniData(CURRENT_API_URL);
  }

  getCaricaLocalita(Cap:string) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Indirizo/GetCaricaLocalita`;
    
    return MasterService.getDataCaricaLocalita(CURRENT_API_URL, Cap);
  }

  postNewIndirizzo(data:any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Indirizo`;
    
    return MasterService.postNewIndirizoData(CURRENT_API_URL, data);
  }



}
export default new OrdiniService();
