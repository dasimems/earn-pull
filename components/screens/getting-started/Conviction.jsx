import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackColor, successColor } from "../../../assets/colors";
import { poppins } from "../../../assets/fonts";

const Conviction = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          color: successColor.default,
          textAlign: "center",
          fontFamily: poppins.medium.default,
        }}
      >
        100% Legit
      </Text>

      <Text
        style={{
          fontFamily: poppins.medium.default,
          color: blackColor.opacity700,
          textAlign: "center",
        }}
      >
        No Scam Involved
      </Text>
      <Text
        style={{
          fontFamily: poppins.regular.default,
          color: blackColor.opacity500,
          textAlign: "center",
        }}
      >
        Start boosting your balance on Opay and palmpay and start earning 5000 -
        200, 000. The trick is now available at your fingerprint
      </Text>
    </View>
  );
};

export default Conviction;

const styles = StyleSheet.create({});
