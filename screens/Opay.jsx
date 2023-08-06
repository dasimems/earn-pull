import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import Header from "../components/screens/opay/Header";
import Balance from "../components/screens/opay/Balance";
import { blackColor } from "../assets/colors";
import Actions from "../components/screens/opay/Actions";

const Opay = () => {
  return (
    <ScreenContainer
      style={{
        paddingHorizontal: 0,
        backgroundColor: "rgba(0,0,0,.001)",
      }}
    >
      <Header />
      <ScrollableContainer
        style={{
          gap: 20,
        }}
      >
        <Balance />
        <Actions />
      </ScrollableContainer>
    </ScreenContainer>
  );
};

export default Opay;

const styles = StyleSheet.create({});
