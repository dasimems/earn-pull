import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LoaderImage } from "../../../assets/images";

const ModalContent = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={LoaderImage}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({});
