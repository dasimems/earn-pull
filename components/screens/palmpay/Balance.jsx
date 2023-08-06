import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { whiteColor } from "../../../assets/colors";
import { poppins } from "../../../assets/fonts";
import { useUserContext } from "../../../context";

const Balance = () => {
  const { balance } = useUserContext();
  const { formatedAmount } = balance || {};
  return (
    <View
      style={{
        backgroundColor: whiteColor.default,
        padding: 15,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: poppins.regular.default,
            fontSize: 12,
          }}
        >
          Balance
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: poppins.bold.default,
          }}
        >
          ₦{formatedAmount}
        </Text>

        <View
          style={{
            paddingVertical: 3,
            paddingHorizontal: 15,
            backgroundColor: "#6306B2",
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontFamily: poppins.regular.default,
              fontSize: 11,
              color: whiteColor.default,
            }}
          >
            Fund
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});
