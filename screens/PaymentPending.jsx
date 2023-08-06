import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import ScreenContainer from "../components/layout/ScreenContainer";
import Header from "../components/screens/general/Header";
import { poppins } from "../assets/fonts";
import { blackColor, whiteColor } from "../assets/colors";
import { useUserContext } from "../context";
import { formatDate } from "../functions";
import ContinueButton from "../components/screens/pending-payment/ContinueButton";
import { Pending } from "../assets/icons";
import { measurements } from "../data/general";

const PaymentPending = () => {
  const { pendingPayment, accountDetails } = useUserContext();
  const { amount, date } = pendingPayment || {};
  const { bankName } = accountDetails || {};
  return (
    <ScreenContainer
      style={{
        paddingHorizontal: 0
      }}
    >
      <Header headerText="Pending Withdrawal" />
      <ScrollableContainer
        style={{
          gap: 40,
          justifyContent: "center"
        }}
      >
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Pending
            color={whiteColor.opacity600}
            size={measurements.windowWidth * 0.4}
          />
        </View>
        <Text
          style={{
            fontFamily: poppins.regular.default,
            color: whiteColor.opacity600,
            textAlign: "center"
          }}
        >
          You have initiated a pending withdrawal of {amount} to {bankName}.
          Please proceed to activation to continue
        </Text>
      </ScrollableContainer>
      <ContinueButton />
    </ScreenContainer>
  );
};

export default PaymentPending;

const styles = StyleSheet.create({});
