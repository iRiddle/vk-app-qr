import { AXIOS } from "../api";

export const SEND_QR_BILL_PENDING = "QR_BILL::SEND_QR_BILL_PENDING";
export const SEND_QR_BILL_FULFILLED = "QR_BILL::SEND_QR_BILL_FULFILLED";
export const SEND_QR_BILL_REJECTED = "QR_BILL::SEND_QR_BILL_REJECTED";

const sendQrBill = () => dispatch => {
  dispatch(sendQrBillPending());

  return AXIOS.get(`SendQRBill`).then(
    response => {
      console.log(response.data);
    },
    error => {
      console.log(error);
    }
  );
};

export const sendQrBillPending = () => ({
  type: SEND_QR_BILL_PENDING
});

export const sendQrBillFulfilled = data => ({
  type: SEND_QR_BILL_FULFILLED,
  payload: data
});

export const sendQrBillRejected = error => ({
  type: SEND_QR_BILL_REJECTED,
  payload: error
});

export default sendQrBill;
