import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import { ArrowRight } from "../assets/icons";
import Button from "../components/general/Button";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { poppins } from "../assets/fonts";
import { GettingStartedImage } from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import { NavNames, measurements } from "../data/general";

const GettingStarted = () => {
  const { navigate } = useNavigation();
  return (
    <ScreenContainer removeSafeAreaView style={{ paddingHorizontal: 0 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            gap: 20,
            paddingVertical: 60,
            justifyContent: "flex-end"
          }}
        >
          <Text
            style={{
              color: whiteColor.default,
              fontSize: measurements.windowWidth * 0.15,
              fontFamily: poppins.regular.default,
              paddingHorizontal: 20
            }}
          >
            Earning Just Got Easier
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 15,
              fontFamily: poppins.regular.default,
              color: whiteColor.opacity700
            }}
          >
            Welcome To The best Earning Site 2Pay , We Are Trusted And Fast In
            Crediting we Are Here to Help And Support The Interested Once?.
          </Text>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: whiteColor.opacity300,
            marginHorizontal: 20
          }}
        ></View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20
        }}
      >
        <Button
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            borderColor: primaryColor.default,
            borderRadius: 100,
            borderWidth: 1
          }}
          onPress={() => {
            navigate(NavNames.AccountDetails.name);
          }}
          innerStyle={{
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <Text
            style={{
              color: whiteColor.opacity700,
              fontFamily: poppins.bold.default
            }}
          >
            Start
          </Text>

          <ArrowRight color={whiteColor.opacity700} />
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({});
