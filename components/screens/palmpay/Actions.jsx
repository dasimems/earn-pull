import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { whiteColor } from "../../../assets/colors";
import { palmpayActions } from "../../../data/general";
import { PalmpayLogo } from "../../../assets/images";
import { poppins } from "../../../assets/fonts";

const Actions = () => {
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
        Services
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {palmpayActions.map(({ Icon, name }, index) => (
          <View
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
          </View>
        ))}
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({});
