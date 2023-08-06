import {
  RESET_USER_CONTEXT,
  SET_ACCOUNT_DETAILS,
  SET_ACCOUNT_ERROR,
  SET_BALANCE,
  SET_BANK,
  SET_PAYMENT_CONFIRMED,
  SET_PENDING_PAYMENT,
  SET_PHONE_NUMBER,
  SET_PROFILE_INFORMATION
} from "../data/_actions";

export const initialValue = {
  userDetails: {
    name: "",
    email: ""
  },
  bank: null,
  accountNumber: "",
  balance: 0,
  accountError: "",
  pendingPayment: null,
  paymentConfirmed: false,
  accountDetails: {
    accountNumber: "",
    accountName: "",
    bankName: "",
    amount: ""
  }
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BANK:
      return { ...state, bank: payload };
    case SET_ACCOUNT_ERROR:
      return { ...state, accountError: payload };
    case SET_PHONE_NUMBER:
      return { ...state, accountNumber: payload };
    case SET_PENDING_PAYMENT:
      return { ...state, pendingPayment: payload };
    case SET_PAYMENT_CONFIRMED:
      return { ...state, paymentConfirmed: true };
    case SET_ACCOUNT_DETAILS:
      return {
        ...state,
        accountDetails: { ...state.accountDetails, ...payload }
      };
    case SET_PROFILE_INFORMATION:
      return {
        ...state,
        userDetails: { ...state.userDetails, ...payload }
      };
    case SET_BALANCE:
      return { ...state, balance: payload };
    case RESET_USER_CONTEXT:
      return initialValue;

    default:
      return state;
  }
};
