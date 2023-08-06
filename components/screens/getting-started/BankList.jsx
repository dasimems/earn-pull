import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { bankList } from "../../../data/general";
import { poppins } from "../../../assets/fonts";
import RoundedImage from "../../general/RoundedImage";
import { blackColor, primaryColor, whiteColor } from "../../../assets/colors";
import { TouchableOpacity } from "react-native";
import { useUserContext } from "../../../context";

const BankCard = ({ name, logo, description }) => {
  const { setBank, bank } = useUserContext();

  return (
    <TouchableOpacity
      onPress={() => {
        setBank(name);
      }}
      style={{
        elevation: 2,
        shadowColor: blackColor.opacity300,
        shadowOffset: {
          width: 0,
          height: 1,
        },

        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 100,
        overflow: "hidden",
        padding: 2,
      }}
    >
      <View
        style={{
          backgroundColor: whiteColor.default,
          padding: 10,
          borderRadius: 100,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 1,
          }}
        >
          <RoundedImage
            image={logo}
            style={{
              backgroundColor: whiteColor.default,
            }}
            imageStyle={{
              width: "85%",
              height: "85%",
              resizeMode: "contain",
            }}
          />

          <View
            style={{
              gap: 5,
            }}
          >
            <Text
              style={{
                fontFamily: poppins.bold.default,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontFamily: poppins.regular.default,
                color: blackColor.opacity600,
              }}
            >
              {description}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: blackColor.opacity200,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {bank === name && (
            <View
              style={{
                width: "75%",
                height: "75%",
                backgroundColor: primaryColor.default,
                borderRadius: 100,
              }}
            ></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const BankList = () => {
  return (
    <View
      style={{
        gap: 20,
      }}
    >
      <Text
        style={{
          fontFamily: poppins.bold.default,
        }}
      >
        Select Bank
      </Text>

      <View
        style={{
          gap: 20,
        }}
      >
        {bankList.map((data, index) => (
          <BankCard key={index} {...data} />
        ))}
      </View>
    </View>
  );
};

export default BankList;

const styles = StyleSheet.create({});
