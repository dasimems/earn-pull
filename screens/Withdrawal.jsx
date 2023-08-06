import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import ScreenContainer from "../components/layout/ScreenContainer";
import Header from "../components/screens/general/Header";
import { Image } from "react-native";
import AccountDetails from "../components/screens/withdrawal/AccountDetails";
import ContinueButton from "../components/screens/withdrawal/ContinueButton";
import { WithdrawalImage } from "../assets/images";

const Withdrawal = () => {
  return (
    <ScreenContainer
      style={{
        paddingHorizontal: 0
      }}
    >
      <Header
        headerTextStyle={{
          fontSize: 13
        }}
        headerText="Withdraw to your bank"
      />
      <ScrollableContainer
        style={{
          gap: 40
        }}
      >
        <AccountDetails />
      </ScrollableContainer>

      <ContinueButton />
    </ScreenContainer>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({});
