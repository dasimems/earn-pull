import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { whiteColor } from "../../../assets/colors";
import { NavNames, palmpayTransferActions } from "../../../data/general";
import { PalmpayLogo } from "../../../assets/images";
import { poppins } from "../../../assets/fonts";
import { useNavigation } from "@react-navigation/native";

const TransferActions = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: whiteColor.default,
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          fontFamily: poppins.regular.default,
        }}
      >
        Money Transfer
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {palmpayTransferActions.map(({ Icon, name }, index) => (
          <Pressable
            onPress={() => {
              if (name && name.toLowerCase() === "withdraw") {
                navigate(NavNames.Withdrawal.name);
              }
            }}
            style={{
              alignItems: "center",
              gap: 5,
            }}
            key={index}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 1000,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Icon && typeof Icon !== "string" ? (
                <Icon />
              ) : (
                <Image
                  source={PalmpayLogo}
                  style={{
                    width: "60%",
                    height: "60%",
                    resizeMode: "contain",
                  }}
                />
              )}
            </View>

            <Text
              style={{
                fontSize: 11,
                fontFamily: poppins.regular.default,
              }}
            >
              {name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default TransferActions;

const styles = StyleSheet.create({});
