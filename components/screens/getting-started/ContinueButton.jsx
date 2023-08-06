import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../general/Button";
import { primaryColor, whiteColor } from "../../../assets/colors";
import { NavNames, padding } from "../../../data/general";
import { useUserContext } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import useName from "../../../hooks/useName";

const ContinueButton = () => {
  const { bank, balance } = useUserContext();
  const { navigate } = useNavigation();
  const { name } = useName();
  return (
    <View style={{ paddingHorizontal: padding, paddingVertical: 10 }}>
      <Button
        onPress={() => {
          // if (balance) {
          //   navigate(name);
          // } else {
          navigate(NavNames.BalanceSelect.name);
          // }
        }}
        disabledStyle={{ backgroundColor: primaryColor.opacity300 }}
        disabled={!bank || bank.length < 1}
        style={{ backgroundColor: primaryColor.default, borderRadius: 30 }}
      >
        <Text style={{ color: whiteColor.default }}>Continue</Text>
      </Button>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({});
