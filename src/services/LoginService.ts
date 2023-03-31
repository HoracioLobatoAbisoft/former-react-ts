import MasterService from "./MasterService";
import { conf } from "../../config";
const CLIENTE_API_URL = "https://localhost:7143" + "/api";

class LoginService {
    getUtenti() {
        var CURRENT_API_URL = `${CLIENTE_API_URL}/utenti`;
        console.log(CURRENT_API_URL);
        return MasterService.getDataUtenti(CURRENT_API_URL);
    }


    postUser(data:any) {
        var CURRENT_API_URL = `${CLIENTE_API_URL}/Login`;
        console.log(CURRENT_API_URL);
        return MasterService.postUserLogin(CURRENT_API_URL, data);


    }







}
export default new LoginService();