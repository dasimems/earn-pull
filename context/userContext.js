import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { userInitialValue, userReducer } from "../reducer";
import {
  SET_ACCOUNT_DETAILS,
  SET_ACCOUNT_ERROR,
  SET_BALANCE,
  SET_BANK,
  SET_PAYMENT_CONFIRMED,
  SET_PENDING_PAYMENT,
  SET_PHONE_NUMBER,
  SET_PROFILE_INFORMATION
} from "../data/_actions";
import {
  checkBalance,
  checkPaymentProcessing,
  checkPendingPayment,
  saveBalance,
  savePaymentProcessing,
  savePendingPayment
} from "../data/functions";

const UserContext = createContext({
  ...userInitialValue,
  setBank: () => {},
  setAccountNumber: () => {},
  setBalance: () => {},
  setAccountError: () => {},
  setAccountDetails: () => {},
  setPendingPayment: () => {},
  setPaymentConfirmed: () => {},
  setUserDetails: () => {}
});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialValue);
  const [shouldNotUpdate, setShouldNotUpdate] = useState(false);

  const setBank = useCallback(payload => {
    if (payload) {
      dispatch({
        type: SET_BANK,
        payload
      });
    }
  }, []);
  const setAccountNumber = useCallback(payload => {
    if (!payload) {
      payload = "";
    }
    dispatch({
      type: SET_PHONE_NUMBER,
      payload
    });
  }, []);
  const setBalance = useCallback(payload => {
    dispatch({
      type: SET_BALANCE,
      payload
    });
  }, []);

  const setAccountError = useCallback(payload => {
    dispatch({
      type: SET_ACCOUNT_ERROR,
      payload
    });
  }, []);

  const setAccountDetails = useCallback(payload => {
    if (!payload) {
      payload = {
        accountNumber: "",
        accountName: "",
        bankName: "",
        amount: ""
      };
    }
    dispatch({
      type: SET_ACCOUNT_DETAILS,
      payload
    });
  }, []);
  const setUserDetails = useCallback(payload => {
    if (!payload) {
      payload = {
        email: "",
        name: ""
      };
    }
    dispatch({
      type: SET_PROFILE_INFORMATION,
      payload
    });
  }, []);

  const setPaymentConfirmed = useCallback(() => {
    dispatch({
      type: SET_PAYMENT_CONFIRMED
    });
  }, []);

  const setPendingPayment = useCallback(payload => {
    if (payload) {
      dispatch({
        type: SET_PENDING_PAYMENT,
        payload
      });
    }
  }, []);

  // useEffect(() => {
  //   if (state.pendingPayment) {
  //     savePendingPayment(state.pendingPayment);
  //   }
  // }, [state.pendingPayment]);
  // useEffect(() => {
  //   if (state.balance) {
  //     saveBalance(state.balance);
  //   }
  // }, [state.balance]);
  // useEffect(() => {
  //   if (state.paymentConfirmed) {
  //     savePaymentProcessing();
  //   }
  // }, [state.paymentConfirmed]);

  // useEffect(() => {
  //   checkBalance()
  //     .then((response) => {
  //       const { value } = response;

  //       if (value) {
  //         const balance = JSON.parse(value);
  //         setBalance(balance);
  //       }
  //     })
  //     .catch(() => {});

  //   checkPendingPayment()
  //     .then((response) => {
  //       const { value } = response;

  //       if (value) {
  //         const pendingPayment = JSON.parse(value);
  //         setPendingPayment(pendingPayment);
  //       }
  //     })
  //     .catch(() => {});
  //   checkPaymentProcessing()
  //     .then((response) => {
  //       const { value } = response;

  //       if (value) {
  //         setPaymentConfirmed();
  //       }
  //     })
  //     .catch(() => {});
  // }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setAccountError,
        setBank,
        setAccountNumber,
        setBalance,
        setAccountDetails,
        setPendingPayment,
        setPaymentConfirmed,
        setUserDetails
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
