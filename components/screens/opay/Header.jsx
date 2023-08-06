import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedImage from "../../general/RoundedImage";
import { Bell, ScanLine } from "lucide-react-native";
import { blackColor } from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import { padding } from "../../../data/general";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: padding,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
        }}
      >
        <RoundedImage />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
        }}
      >
        <AntDesign
          name="customerservice"
          size={25}
          color={blackColor.default}
        />
        <ScanLine color={blackColor.default} size={25} />
        <Bell color={blackColor.default} size={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
