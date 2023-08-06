import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackColor, whiteColor } from "../../assets/colors";
import { measurements, padding } from "../../data/general";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenContainer = ({ children, style, removeSafeAreaView }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: blackColor.default,
        paddingHorizontal: padding,
        ...style
      }}
    >
      {!removeSafeAreaView?

      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        {children}
      </SafeAreaView>
      
      : children}
      
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({});
