import MasterService from "../../../services/MasterService";
import { conf } from "../../../../config";
// const CLIENTE_API_URL = "https://localhost:7143" + "/api";
const CLIENTE_API_URL = "http://localhost:5183" + "/api";

class OrdiniService {
  getOrdini() {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini`;
    
    return MasterService.getDataOrdini(CURRENT_API_URL);
  }

  getOrdiniById(id: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/GetById`;
    
    return MasterService.getDataOrdiniById(CURRENT_API_URL, id);
  }

  getOrdiniIndirizo(id: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Indirizo`;
    
    return MasterService.getDataOrdiniIndirizo(CURRENT_API_URL, id);
  }


  postOrdineEmail(data: any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/SendEmail`;
    
    return MasterService.postDataOrdineEmail(CURRENT_API_URL, data);
  }


  


}
export default new OrdiniService();
