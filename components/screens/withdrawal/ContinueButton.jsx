import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React from "react";
import Button from "../../general/Button";
import { primaryColor, whiteColor } from "../../../assets/colors";
import { NavNames, padding } from "../../../data/general";
import { useUserContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import useName from "../../../hooks/useName";
import useLoader from "../../../hooks/useLoader";

const ContinueButton = () => {
  const {
    bank,
    balance,
    accountNumber,
    accountDetails,
    setPendingPayment,
    pendingPayment
  } = useUserContext();
  const { navigate } = useNavigation();
  const { name } = useName();
  const { amount } = balance || {};
  const { openLoader } = useLoader();
  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };
  return (
    <View style={{ paddingHorizontal: padding, paddingVertical: 10 }}>
      <Button
        onPress={() => {
          setPendingPayment({ ...accountDetails, date: new Date() });
          openLoader(() => {
            navigate(NavNames.PendingPayment.name);
          });
        }}
        disabledStyle={{ backgroundColor: primaryColor.opacity300 }}
        disabled={
          !accountDetails ||
          !accountDetails.accountName ||
          !accountDetails.accountNumber ||
          !accountDetails.amount ||
          !accountDetails.bankName ||
          parseInt(accountDetails.amount) > parseInt(balance) ||
          accountDetails.accountNumber.length !== 10 ||
          !isFinite(accountDetails.amount)
        }
        style={{ backgroundColor: primaryColor.default, borderRadius: 30 }}
      >
        <Text style={{ color: whiteColor.default }}>Withdraw</Text>
      </Button>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({});
