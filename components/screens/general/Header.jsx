import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AngleLeft } from "../../../assets/icons";
import { poppins } from "../../../assets/fonts";
import { CheckCircle } from "lucide-react-native";
import { successColor, whiteColor } from "../../../assets/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { allNav, padding } from "../../../data/general";

const Header = ({ headerText, hideBackButton, style, headerTextStyle }) => {
  const { goBack } = useNavigation();
  const { name } = useRoute();
  const [screenLabel, setScreenLabel] = useState("");
  useEffect(
    () => {
      const navD = allNav.find(navDetails => navDetails.name === name);
      setScreenLabel(navD.label);
    },
    [name]
  );
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: padding,
        justifyContent: "space-between",
        ...style
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <AngleLeft size={25} color={whiteColor.default} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: poppins.bold.default,
            color: whiteColor.default,
            ...headerTextStyle
          }}
        >
          {headerText ? headerText : screenLabel}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
