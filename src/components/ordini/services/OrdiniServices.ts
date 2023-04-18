import MasterService from "../../../services/MasterService";
import { conf } from "../../../../config";
// const CLIENTE_API_URL = "https://localhost:7143" + "/api";
const CLIENTE_API_URL = "http://localhost:5183" + "/api";

class OrdiniService {
  

  getOrdini() {
      var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini`;
      console.log(CURRENT_API_URL);
      return MasterService.getDataOrdini(CURRENT_API_URL);
  }

  getOrdiniById(id:any) {
    var CURRENT_API_URL = `${CLIENTE_API_URL}/Ordini/GetById`;
    console.log(CURRENT_API_URL);
    return MasterService.getDataOrdiniById(CURRENT_API_URL, id);
}


}
export default new OrdiniService();