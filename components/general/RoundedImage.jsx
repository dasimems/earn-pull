import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackColor, whiteColor } from "../../assets/colors";

const RoundedImage = ({
  size,
  url,
  imagePadding,
  image,
  style,
  imageContainerBackground,
  imageParentBackground,
  imageStyle,
  ...props
}) => {
  return (
    <View
      style={{
        width: size ? size : 48,
        height: size ? size : 48,
        backgroundColor: imageParentBackground
          ? imageParentBackground
          : blackColor.opacity200,
        padding: imagePadding ? imagePadding : 3,
        ...style,
        borderRadius: 10000,
      }}
      {...props}
    >
      <View
        style={{
          backgroundColor: imageContainerBackground
            ? imageContainerBackground
            : whiteColor.default,
          width: "100%",
          height: "100%",
          borderRadius: 10000,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={url ? { uri: image } : image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10000,
            resizeMode: "cover",
            ...imageStyle,
          }}
        />
      </View>
    </View>
  );
};

export default RoundedImage;

const styles = StyleSheet.create({});
