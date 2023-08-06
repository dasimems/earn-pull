import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Add, AngleRight } from "../../../assets/icons";
import { poppins } from "../../../assets/fonts";
import { whiteColor } from "../../../assets/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavNames } from "../../../data/general";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../../context";

const Balance = () => {
  const { navigate } = useNavigation();
  const { balance } = useUserContext();
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#00B876",
        borderRadius: 20,
        gap: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: poppins.regular.default,
              color: whiteColor.default,
              fontSize: 12,
            }}
          >
            Available Balance
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontFamily: poppins.regular.default,
              color: whiteColor.default,
              fontSize: 12,
            }}
          >
            Transaction History
          </Text>
          <AngleRight color={whiteColor.default} />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            color: whiteColor.default,
            fontFamily: poppins.bold.default,
          }}
        >
          ₦{balance?.formatedAmount}
        </Text>
        <Text
          style={{
            color: whiteColor.default,
            fontFamily: poppins.regular.default,
            fontSize: 11,
          }}
        >
          & cashback ₦0.00
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              backgroundColor: whiteColor.default,
              borderRadius: 10,
              padding: 7,
            }}
          >
            <Add color={"#00B876"} />
          </View>
          <Text
            style={{
              fontFamily: poppins.regular.default,
              fontSize: 11,
              color: whiteColor.default,
            }}
          >
            Add Money
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              backgroundColor: whiteColor.default,
              borderRadius: 10,
              padding: 7,
            }}
          >
            <AntDesign name="swap" size={20} color="#00B876" />
          </View>
          <Text
            style={{
              fontFamily: poppins.regular.default,
              fontSize: 11,
              color: whiteColor.default,
            }}
          >
            Transfer
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigate(NavNames.Withdrawal.name);
          }}
          style={{
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              backgroundColor: whiteColor.default,
              borderRadius: 10,
              padding: 7,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-collapse"
              size={24}
              color="#00B876"
            />
          </View>
          <Text
            style={{
              fontFamily: poppins.regular.default,
              fontSize: 11,
              color: whiteColor.default,
            }}
          >
            Withdraw
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});
