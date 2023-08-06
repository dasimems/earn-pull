import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AnimatedCarousel from "react-native-reanimated-carousel";
import { measurements, padding } from "../../../data/general";
import {
  GettingStartedImageOne,
  GettingStartedImageThree,
  GettingStartedImageTwo,
} from "../../../assets/images";
import { blackColor, primaryColor, whiteColor } from "../../../assets/colors";
import { poppins } from "../../../assets/fonts";

const Carousel = () => {
  const imageData = [
    { image: GettingStartedImageOne, title: "Input your bank Details" },
    { image: GettingStartedImageTwo, title: "Select Balance" },
    { image: GettingStartedImageThree, title: "Withdraw cash" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View
      style={{
        width: "100%",
        gap: 10,
      }}
    >
      <AnimatedCarousel
        loop
        width={measurements.windowWidth - padding * 2}
        height={(measurements.windowWidth - padding * 2) / 2}
        autoPlay={true}
        data={[...imageData]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                borderRadius: 15,
                overflow: "hidden",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Image
                source={item.image}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  opacity: 0.5,
                }}
              />
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  backgroundColor: primaryColor.opacity300,
                  top: 0,
                  left: 0,
                  zIndex: 9,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: poppins.bold.default,
                    textAlign: "center",
                    color: whiteColor.default,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {imageData.map((_, index) => (
          <View
            key={index}
            style={{
              width: 20,
              height: 7,
              backgroundColor:
                activeIndex === index
                  ? primaryColor.opacity600
                  : blackColor.opacity100,
              borderRadius: 100,
            }}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
