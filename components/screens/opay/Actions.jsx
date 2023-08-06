import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { whiteColor } from "../../../assets/colors";
import { opayActions } from "../../../data/general";
import { OpayLogo } from "../../../assets/images";
import { poppins } from "../../../assets/fonts";

const Actions = () => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: whiteColor.default,
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
        borderRadius: 15,
      }}
    >
      {opayActions.map(({ Icon, name }, index) => (
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
              backgroundColor: "rgba(0,184,118,.05)",
              borderRadius: 1000,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Icon && typeof Icon !== "string" ? (
              <Icon />
            ) : (
              <Image
                source={OpayLogo}
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
  );
};

export default Actions;

const styles = StyleSheet.create({});
