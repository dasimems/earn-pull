import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import { ArrowRight } from "../assets/icons";
import Button from "../components/general/Button";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { poppins } from "../assets/fonts";
import { GettingStartedImage } from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import { NavNames } from "../data/general";

const GettingStarted = () => {
  const { navigate } = useNavigation();
  return (
    <ScreenContainer removeSafeAreaView style={{ paddingHorizontal: 0 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            // borderBottomWidth: 1,
            // borderBottomColor: primaryColor.default,
            // borderRightWidth: 1,
            // borderRightColor: primaryColor.default,
            borderBottomRightRadius: 300,
            overflow: "hidden"
          }}
        >
          <Image
            source={GettingStartedImage}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </View>
        <View
          style={{
            gap: 20,
            paddingVertical: 60
          }}
        >
          <Text
            style={{
              color: whiteColor.default,
              fontSize: 30,
              fontFamily: poppins.bold.default,
              paddingHorizontal: 20,
              textAlign: "center"
            }}
          >
            It is time to start earning big
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              textAlign: "center",
              fontSize: 15,
              fontFamily: poppins.regular.default,
              color: whiteColor.opacity700
            }}
          >
            Welcome to an exhilarating journey where the boundaries of your
            potential are shattered, and the path to earning big beckons you.
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
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
