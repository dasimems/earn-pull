import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedImage from "../../general/RoundedImage";
import { Bell, ScanLine } from "lucide-react-native";
import { blackColor, primaryColor } from "../../../assets/colors";
import { padding } from "../../../data/general";
import { Profile } from "../../../assets/icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: padding,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(99,6,178,.1)",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1000,
          }}
        >
          <Profile color={"#6306B2"} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
        }}
      >
        <ScanLine color={blackColor.default} size={25} />
        <Bell color={blackColor.default} size={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
