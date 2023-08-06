import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../general/Button";
import { primaryColor, whiteColor } from "../../../assets/colors";
import { NavNames, padding } from "../../../data/general";
import { useUserContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import useName from "../../../hooks/useName";
import useLoader from "../../../hooks/useLoader";

const ContinueButton = () => {
  const { bank, balance, accountNumber } = useUserContext();
  const { navigate } = useNavigation();
  const { name } = useName();
  const { openLoader } = useLoader();
  return (
    <View
      style={{
        paddingHorizontal: padding,
        paddingVertical: 10
      }}
    >
      <Button
        onPress={() => {
          openLoader(() => {
            navigate(name);
          });
        }}
        disabledStyle={{
          backgroundColor: primaryColor.opacity300
        }}
        disabled={
          !bank ||
          !balance ||
          !balance.status ||
          (balance &&
            balance.status &&
            balance.status.toLowerCase() === "banned") ||
          !accountNumber ||
          (accountNumber && accountNumber.length !== 10)
        }
        style={{
          backgroundColor: primaryColor.default,
          borderRadius: 30
        }}
      >
        <Text
          style={{
            color: whiteColor.default
          }}
        >
          Fund Wallet
        </Text>
      </Button>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({});
