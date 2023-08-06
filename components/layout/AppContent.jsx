import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { measurements } from "../../data/general";
import Modal from "../general/Modal";
import Toast from "../general/Toast";
import { blackColor } from "../../assets/colors";

const AppContent = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: blackColor.default
      }}
    >
      {children}
      <Modal />
    </View>
  );
};

export default AppContent;

const styles = StyleSheet.create({});
