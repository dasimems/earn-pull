import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkPendingPayment = () => {
  return new Promise((res, rej) => {
    AsyncStorage.getItem("pending-payment")
      .then((value) => {
        res({ type: "success", value });
      })
      .catch((err) => {
        rej({ type: "err" });
      });
  });
};

export const savePendingPayment = (keyData) => {
  return new Promise((res, rej) => {
    const data = JSON.stringify(keyData);
    AsyncStorage.setItem("pending-payment", data)
      .then(() => {
        res({ type: "success" });
      })
      .catch((err) => {
        rej({
          type: "err",
        });
      });
  });
};

export const checkBalance = () => {
  return new Promise((res, rej) => {
    AsyncStorage.getItem("balance")
      .then((value) => {
        res({ type: "success", value });
      })
      .catch((err) => {
        rej({ type: "err" });
      });
  });
};
export const saveBalance = (keyData) => {
  return new Promise((res, rej) => {
    const data = JSON.stringify(keyData);
    AsyncStorage.setItem("balance", data)
      .then(() => {
        res({ type: "success" });
      })
      .catch((err) => {
        rej({
          type: "err",
        });
      });
  });
};
export const savePaymentProcessing = () => {
  return new Promise((res, rej) => {
    AsyncStorage.setItem("payment-processing", "true")
      .then(() => {
        res({ type: "success" });
      })
      .catch((err) => {
        rej({
          type: "err",
        });
      });
  });
};

export const checkPaymentProcessing = () => {
  return new Promise((res, rej) => {
    AsyncStorage.getItem("payment-processing")
      .then((value) => {
        res({ type: "success", value });
      })
      .catch((err) => {
        rej({ type: "err" });
      });
  });
};
