import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import {
  blackColor,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../assets/colors";
import { loadingImage } from "../../assets/images";
import { poppins } from "../../assets/fonts";

const Button = ({
  loading,
  disabled,
  text,
  onPress,
  style,
  children,
  textColor,
  loadingStyle,
  loaderSize,
  fontSize,
  fontFamily,
  disabledStyle,
  innerStyle
}) => {
  return (
    <>
      {loading || disabled ? (
        <Pressable
          style={{
            ...style,
            ...styles.general,
            ...disabledStyle,
            ...loadingStyle,
          }}
        >
          <View
            style={{
              ...styles.buttonInnerStyle,
              ...innerStyle
            }}
          >
            {loading && (
              <Image
                source={loadingImage}
                style={{
                  width: loaderSize ? loaderSize : 25,
                  height: loaderSize ? loaderSize : 25,
                  resizeMode: "contain",
                  marginRight: 7,
                }}
              />
            )}

            {children ? (
              children
            ) : (
              <Text
                style={{
                  color: blackColor.opacity400,
                  fontSize: fontSize ? fontSize : 16,
                  fontFamily: fontFamily ? fontFamily : poppins.regular.default,
                }}
              >
                {text ? text : "Submitting"}
              </Text>
            )}
          </View>
        </Pressable>
      ) : (
        <TouchableOpacity
          style={{
            ...styles.general,
            ...style,
          }}
          onPress={onPress}
        >
          <View
            style={{
              ...styles.buttonInnerStyle,
              ...innerStyle
            }}
          >
            {children ? (
              children
            ) : (
              <Text
                style={{
                  color: textColor ? textColor : whiteColor.default,
                  fontSize: fontSize ? fontSize : 16,
                  fontFamily: fontFamily ? fontFamily : poppins.regular.default,
                }}
              >
                {text ? text : "Submit"}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  general: {
    width: "100%",
    backgroundColor: primaryColor.default,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },

  buttonInnerStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Button;
