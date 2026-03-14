import Swal from "sweetalert2";

export const showAlert = (title, text, icon = "error", targetRef = null) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "#3085d6",
    didClose: () => {
      if (targetRef && targetRef.current) {
        targetRef.current.focus();
      }
    }
  });
};