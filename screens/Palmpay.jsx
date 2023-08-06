import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/screens/palmpay/Header";
import ScreenContainer from "../components/layout/ScreenContainer";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import Balance from "../components/screens/palmpay/Balance";
import { PalmpayBannerOne } from "../assets/images";
import Actions from "../components/screens/palmpay/Actions";
import TransferActions from "../components/screens/palmpay/TransferActions";

const Palmpay = () => {
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
        <Image
          source={PalmpayBannerOne}
          style={{
            width: "100%",
            resizeMode: "cover",
            height: 100,
            borderRadius: 20,
          }}
        />
        <Balance />
        <TransferActions />
        <Actions />
      </ScrollableContainer>
    </ScreenContainer>
  );
};

export default Palmpay;

const styles = StyleSheet.create({});
