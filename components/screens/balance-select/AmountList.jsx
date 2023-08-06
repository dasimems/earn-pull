import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { poppins } from "../../../assets/fonts";
import {
  blackColor,
  dangerColor,
  primaryColor,
  whiteColor
} from "../../../assets/colors";
import { Check } from "lucide-react-native";
import { useActionContext, useUserContext } from "../../../context";

const AmountCard = props => {
  const {
    balance,
    setBalance,
    accountNumber,
    setAccountError
  } = useUserContext();
  let { formatedAmount, status, amount, onError } = props;

  if (!onError) {
    onError = () => {};
  }
  return (
    <TouchableOpacity
      onPress={() => {
        if (!accountNumber || accountNumber.length !== 10) {
          setAccountError("Please input a valid account number");
        } else {
          if (status.toLowerCase() === "banned") {
            setAccountError("Please this amount has been banned from using");
          } else {
            setAccountError("");
          }
          setBalance(props);
        }
      }}
      style={{
        flexDirection: "row",
        gap: 8
      }}
    >
      <View
        style={{
          width: 15,
          height: 15,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: primaryColor.default
        }}
      >
        {balance &&
          balance.amount === amount &&
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: primaryColor.default,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Check color={whiteColor.default} size={10} />
          </View>}
      </View>

      <Text
        style={{
          fontFamily: poppins.medium.default,
          color: blackColor.opacity600
        }}
      >
        {formatedAmount} ({status})
      </Text>
    </TouchableOpacity>
  );
};

const AmountList = () => {
  const [error, setError] = useState("");
  const { accountError } = useUserContext();
  const amountList = [
    {
      amount: "3000",
      formatedAmount: "3,000.00",
      status: "Working but slow"
    },
    {
      amount: "22000",
      formatedAmount: "22,000.00",
      status: "Unstable"
    },
    {
      amount: "50000",
      formatedAmount: "50,000.00",
      status: "Working"
    },
    {
      amount: "70000",
      formatedAmount: "70,000.00",
      status: "Working"
    },
    {
      amount: "100000",
      formatedAmount: "100,000.00",
      status: "Working"
    }
  ];
  return (
    <View
      style={{
        gap: 20
      }}
    >
      <Text
        style={{
          fontFamily: poppins.regular.default,
          color: dangerColor.opacity500
        }}
      >
        {accountError}
      </Text>
      <Text
        style={{
          fontFamily: poppins.medium.default
        }}
      >
        Select Amount
      </Text>

      {amountList.map((data, index) => <AmountCard {...data} key={index} />)}
    </View>
  );
};

export default AmountList;

const styles = StyleSheet.create({});
