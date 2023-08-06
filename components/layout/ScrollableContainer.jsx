import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { padding } from "../../data/general";

const ScrollableContainer = ({ style, children, ...props }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: "80%",
        gap: 10,
        paddingHorizontal: padding,
        ...style
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableContainer;

const styles = StyleSheet.create({});
