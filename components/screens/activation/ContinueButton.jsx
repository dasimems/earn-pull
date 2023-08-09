import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../../general/Button";
import {
  blackColor,
  dangerColor,
  primaryColor,
  whiteColor
} from "../../../assets/colors";
import { NavNames, padding } from "../../../data/general";
import { useActionContext, useUserContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import useName from "../../../hooks/useName";
import FormInputField from "../../general/form/FormInputField";
import { poppins } from "../../../assets/fonts";
import { X } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import useLoader from "../../../hooks/useLoader";

const showToast = message => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};

const ModalContent = ({ onComplete }) => {
  const { closeModal, openModal } = useActionContext();
  const { openLoader } = useLoader();
  const {
    setPaymentConfirmed,
    paymentConfirmed,
    userDetails
  } = useUserContext();
  const [account, setAccount] = useState("");
  const accounts = ["8160705552", "7041451734"];
  if (!onComplete || !typeof onComplete === "function") {
    onComplete = () => {};
  }
  return (
    <View style={{ flex: 1, gap: 20 }}>
      <View
        style={{
          alignItems: "flex-end",
          paddingRight: 20
        }}
      >
        <TouchableOpacity
          onPress={() => {
            closeModal();
          }}
        >
          <X color={dangerColor.default} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: poppins.medium.default,
          fontSize: 13,
          textAlign: "center"
        }}
      >
        Please Confirm the account you want to receive your payment.
      </Text>
      <View style={{ flex: 1 }}>
        <FormInputField
          placeholder="Your account number"
          inputMode="numeric"
          keyboardType="number-pad"
          value={account}
          onChangeText={text => {
            setAccount(text);
          }}
        />
      </View>
      <Button
        loaderSize={14}
        // loading={paymentConfirmed}
        onPress={() => {
          // if (accounts.includes(account)) {
          //   setPaymentConfirmed();
          //   setTimeout(() => {
          //     closeModal();
          //     onComplete();
          //   }, 2000);
          // } else {
          if (account.length != 10) {
            showToast("Invalid Account Details");
          } else {
            openLoader(()=>{openModal({ text: `sorry ${userDetails?.name}, No payment was found from your bank.` })});
          }
          // }
        }}
        disabledStyle={{ backgroundColor: primaryColor.opacity300 }}
        style={{ backgroundColor: primaryColor.default, borderRadius: 30 }}
      >
        <Text style={{ color: whiteColor.default }}>
          {paymentConfirmed ? "Confirming..." : "Confirm Payment"}
        </Text>
      </Button>
    </View>
  );
};

const ContinueButton = () => {
  const { setAccountDetails, paymentConfirmed } = useUserContext();
  const { openModal } = useActionContext();
  const { navigate } = useNavigation();

  const openConfirmModal = useCallback(() => {
    openModal({
      content: (
        <ModalContent
          onComplete={() => {
            navigate(NavNames.GettingStarted.name);
          }}
        />
      )
    });
  }, []);
  return (
    <View style={{ paddingHorizontal: padding, gap: 5, paddingVertical: 20 }}>
      <Button
        loaderSize={14}
        // loading={paymentConfirmed}
        onPress={() => {
          setAccountDetails();
          openConfirmModal();
        }}
        disabledStyle={{ backgroundColor: primaryColor.opacity300 }}
        style={{ backgroundColor: primaryColor.default, borderRadius: 30 }}
      >
        <Text style={{ color: whiteColor.default }}>
          {paymentConfirmed ? "Confirming..." : "Confirm Payment"}
        </Text>
      </Button>

      <Text
        style={{
          fontFamily: poppins.medium.default,
          color: blackColor.opacity600,
          textAlign: "center"
        }}
      >
        Contact Support: +2347019085739
      </Text>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({});
