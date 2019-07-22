import {
  SEND_QR_BILL_PENDING,
  SEND_QR_BILL_FULFILLED,
  SEND_QR_BILL_REJECTED
} from "../actions/sendQrBillAction";

import { combineReducers } from "redux";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case SEND_QR_BILL_REJECTED:
    case SEND_QR_BILL_FULFILLED:
      return false;
    case SEND_QR_BILL_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case SEND_QR_BILL_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const qrBill = (state = false, action) => {
  switch (action.type) {
    case SEND_QR_BILL_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  qrBill
});

export default reducer;
