import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useUserContext } from "../../../context";
import {
  blackColor,
  primaryColor,
  warningColor,
  whiteColor,
} from "../../../assets/colors";
import { Clock } from "lucide-react-native";
import { poppins } from "../../../assets/fonts";
import { useNavigation } from "@react-navigation/native";
import { NavNames } from "../../../data/general";
import { Pending } from "../../../assets/icons";

const PendingPayment = () => {
  const { pendingPayment } = useUserContext();
  const { navigate } = useNavigation();
  return (
    pendingPayment && (
      <TouchableOpacity
        onPress={() => {
          navigate(NavNames.Activation.name);
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
            <View
              style={{
                backgroundColor: warningColor.opacity200,
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 1000,
              }}
            >
              <Pending color={warningColor.default} />
            </View>

            <View
              style={{
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: poppins.bold.default,
                  color: warningColor.default,
                }}
              >
                Pending Payment
              </Text>
              <Text
                style={{
                  fontFamily: poppins.regular.default,
                  color: blackColor.opacity600,
                }}
              >
                Pending payment to {pendingPayment?.bankName}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};

export default PendingPayment;

const styles = StyleSheet.create({});
