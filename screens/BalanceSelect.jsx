import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import BankDetails from "../components/screens/balance-select/BankDetails";
import Header from "../components/screens/general/Header";
import ContinueButton from "../components/screens/balance-select/ContinueButton";
import AmountList from "../components/screens/balance-select/AmountList";

const BalanceSelect = () => {
  return (
    <ScreenContainer
      style={{
        paddingHorizontal: 0,
      }}
    >
      <Header />
      <ScrollableContainer
        style={{
          gap: 20,
        }}
      >
        <BankDetails />
        <AmountList />
      </ScrollableContainer>
      <ContinueButton />
    </ScreenContainer>
  );
};

export default BalanceSelect;

const styles = StyleSheet.create({});
