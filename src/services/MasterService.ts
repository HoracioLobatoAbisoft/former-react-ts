import axios from "axios";
//import Tokenize from "./Tokenize";
//mport DataStore from "../data/DataStore";
class MasterService {
    
    decryptedToken = () => {
        return localStorage.getItem("token");
    };
    getDataUtenti(apiUrl:any) {
        return axios
            .get(apiUrl, {
                // headers: {
                //        Authorization: `Bearer ${this.decryptedToken()}` 
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                //console.log(err);
            });
    }
    getDataOrdini(apiUrl:any) {
        return axios
            .get(apiUrl+"?idUtn=14", {
                // headers: {
                //        Authorization: `Bearer ${this.decryptedToken()}` 
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                //console.log(err);
            });
    }

    getDataOrdiniById(apiUrl:any, id:any) {
        return axios
            .get(apiUrl+`?idConsegna=${id}&idUtn=1684`, {
                // headers: {
                //        Authorization: `Bearer ${this.decryptedToken()}` 
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                //console.log(err);
            });
    }

    postDataOrdineEmail(apiUrl:any, data:any) {
        
        return axios
            .post(apiUrl, data, {
                // headers: {
                //      Authorization: `Bearer ${this.decryptedToken()}` ,
                //     "Content-Type": "application/json; charset=utf-8",
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
                
            });
    }



    getDataLavori(apiUrl:any) {
        return axios
            .get(apiUrl+"?idUt=1684", {
                // headers: {
                //        Authorization: `Bearer ${this.decryptedToken()}` 
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                //console.log(err);
            });
    }

    postUserLogin(apiUrl:any, data:any) {
        
        return axios
            .post(apiUrl, data, {
                // headers: {
                //      Authorization: `Bearer ${this.decryptedToken()}` ,
                //     "Content-Type": "application/json; charset=utf-8",
                // },
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
                
            });
    }




    postDataService(...args:any) {
        let uri = args[0];
        let payload = args[1];
        let contentType = args[2];
        return axios
            .post(uri, payload, {
                headers: {
                    "Content-Type": contentType ? contentType : "application/json; charset=utf-8",
                },
            })
            .then((response) => {
                if (response.data && !response.data.success) {
                    console.error("Error:", uri, ", log:", response.data.log);
                }
                return response;
            })
            .catch((err) => {
                //console.log(err);
                console.error("Error:", uri, ", log: ", err);
                if (args[2] !== undefined) {
                    args[2](err);
                }
            });
    }
    
   
    
    
}
export default new MasterService();
