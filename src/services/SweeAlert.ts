import Swal from "sweetalert2";

class SweeAlerts {
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-blue",
      cancelButton: "btn btn-red",
    },
    buttonsStyling: true,
  });

  confirmAlert = (title: string, message: string, type: any) => {
    this.swalWithBootstrapButtons.fire(title, message, type);
  };

}
export default new SweeAlerts();
