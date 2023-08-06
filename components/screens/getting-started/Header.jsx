import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { poppins } from "../../../assets/fonts";
import { successColor } from "../../../assets/colors";
import { CheckCircle } from "lucide-react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
      }}
    >
      <Text
        style={{
          fontFamily: poppins.bold.default,
          textAlign: "center",
        }}
      >
        Trust Adder
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontFamily: poppins.medium.default,
            textAlign: "center",
            color: successColor.default,
          }}
        >
          Connected
        </Text>

        <CheckCircle color={successColor.default} size={20} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
