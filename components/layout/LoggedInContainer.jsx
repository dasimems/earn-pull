import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { padding } from "../../data/general";
import Nav from "../general/Nav";
import { blackColor, primaryColor, whiteColor } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AngleLeft } from "../../assets/icons";
import { StatusBar } from "expo-status-bar";

const Header = ({ textColor }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding,
      }}
    >
      <TouchableOpacity>
        <AngleLeft color={textColor} />
      </TouchableOpacity>
    </View>
  );
};

const LoggedInContainer = ({
  header,
  children,
  headerHidden,
  navHidden,
  style,
  type,
  mainContainerStyle,
  statusBarStyle,
}) => {
  let backgroundColor = "#f5f5f5",
    textColor = blackColor.default;

  switch (type) {
    case "primary":
      backgroundColor = primaryColor.default;
      textColor = whiteColor.default;

    default:
      break;
  }
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        style={statusBarStyle ? statusBarStyle : "dark"}
      />
      <View
        style={{
          flex: 1,
          backgroundColor,
          ...mainContainerStyle,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          {!headerHidden && (
            <View>{header ? header : <Header textColor={textColor} />}</View>
          )}

          <View
            style={{
              flex: 1,
              padding,
              ...style,
            }}
          >
            {children}
          </View>

          {!navHidden && (
            <View>
              <Nav />
            </View>
          )}
        </SafeAreaView>
      </View>
    </>
  );
};

export default LoggedInContainer;

const styles = StyleSheet.create({});
