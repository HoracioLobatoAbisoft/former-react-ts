import axios from "axios";
//import Tokenize from "./Tokenize";
//mport DataStore from "../data/DataStore";
import Swal from "sweetalert2";
import SweeAlerts from "./SweeAlert";

import UserContext from "../context/UserContext";

class MasterService {
  decryptedToken = () => {
    return localStorage.getItem("token");
  };

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-blue",
      cancelButton: "btn btn-red",
    },
    buttonsStyling: true,
  });



  getDataUtenti(apiUrl: any) {
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
        ////console.log(err);
      });
  }

  getDataUser(apiUrl: any, idUdt:string) {
    return axios
      .get(apiUrl +`?idUt=${idUdt}` , {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }



  getDataOrdini(apiUrl: any, idUdt:string ) {
    return axios
      .get(apiUrl + `?idUtn=${idUdt}`, {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }

  getDataOrdiniById(apiUrl: any, id: any, idUdt:string) {
   
    return axios
      .get(apiUrl + `?idConsegna=${id}&idUtn=${idUdt}`, {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }


  getNacioniData(apiUrl: any) {
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
        ////console.log(err);
      });
  }

  getDataCaricaLocalita(apiUrl: any, cap: any) {
    return axios
      .get(apiUrl + `?Cap=${cap}`, {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }

  postNewIndirizoData(apiUrl: any, data: any) {
    return axios
      .post(apiUrl, data, {
        // headers: {
        //      Authorization: `Bearer ${this.decryptedToken()}` ,
        //     "Content-Type": "application/json; charset=utf-8",
        // },
      })
      .then((response) => {
        SweeAlerts.confirmAlert(
          "Inviato",
          "La mail è stata inviata correttamente",
          "success"
        );
        return response;
      })
      .catch((err) => {
        //console.log(err);
        SweeAlerts.confirmAlert(
          "Error",
          "Errore nell'invio della posta",
          "warning"
        );
        return err;
      });
  }



  getDataOrdiniIndirizo(apiUrl: any, id: any) {
    return axios
      .get(apiUrl + `?idUt=${id}`, {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }

  postDataOrdineEmail(apiUrl: any, data: any) {
    return axios
      .post(apiUrl, data, {
        // headers: {
        //      Authorization: `Bearer ${this.decryptedToken()}` ,
        //     "Content-Type": "application/json; charset=utf-8",
        // },
      })
      .then((response) => {
        SweeAlerts.confirmAlert(
          "Inviato",
          "La mail è stata inviata correttamente",
          "success"
        );
        return response;
      })
      .catch((err) => {
        //console.log(err);
        SweeAlerts.confirmAlert(
          "Error",
          "Errore nell'invio della posta",
          "warning"
        );
        return err;
      });
  }

  putIndirizoData(apiUrl: any, data: any) {
    //console.log(data);
    return axios
      .put(apiUrl, data, {
        // headers: {
        //      Authorization: `Bearer ${this.decryptedToken()}` ,
        //     "Content-Type": "application/json; charset=utf-8",
        // },
      })
      .then((response) => {
        // SweeAlerts.confirmAlert('Inviato', 'Put Conrrectamente hecho', 'success')
        return response;
      })
      .catch((err) => {
        //console.log(err);
        // SweeAlerts.confirmAlert('Error', "Error en el put", 'warning')
        return err;
      });
  }

  getDataLavori(apiUrl: any, idUdt:string) {
    return axios
      .get(`${apiUrl}?idUt=${idUdt}`, {
        // headers: {
        //        Authorization: `Bearer ${this.decryptedToken()}`
        // },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        ////console.log(err);
      });
  }

  postUserLogin(apiUrl: any, data: any) {
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
        //console.log(err);
      });
  }

  postDataService(...args: any) {
    let uri = args[0];
    let payload = args[1];
    let contentType = args[2];
    return axios
      .post(uri, payload, {
        headers: {
          "Content-Type": contentType
            ? contentType
            : "application/json; charset=utf-8",
        },
      })
      .then((response) => {
        if (response.data && !response.data.success) {
          console.error("Error:", uri, ", log:", response.data.log);
        }
        return response;
      })
      .catch((err) => {
        ////console.log(err);
        console.error("Error:", uri, ", log: ", err);
        if (args[2] !== undefined) {
          args[2](err);
        }
      });
  }
}
export default new MasterService();
