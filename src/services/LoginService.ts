import MasterService from "./MasterService";
import { conf } from "../../config";
// const CLIENTE_API_URL = "https://localhost:7143" + "/api";
const CLIENTE_API_URL = "http://localhost:5183" + "/api";

class LoginService {
    getUtenti() {
        var CURRENT_API_URL = `${CLIENTE_API_URL}/Ricerca`;
        console.log(CURRENT_API_URL);
        return MasterService.getDataUtenti(CURRENT_API_URL);
    }


    getLavori(idUdt:string) {
        var CURRENT_API_URL = `${CLIENTE_API_URL}/Lavori`;
        console.log(CURRENT_API_URL);
        return MasterService.getDataLavori(CURRENT_API_URL, idUdt);
    }


    postUser(data:any) {
        var CURRENT_API_URL = `${CLIENTE_API_URL}/Login`;
        console.log(CURRENT_API_URL);
        return MasterService.postUserLogin(CURRENT_API_URL, data);


    }







}
export default new LoginService();