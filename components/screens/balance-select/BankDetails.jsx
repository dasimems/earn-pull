import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../context";
import { bankList } from "../../../data/general";
import RoundedImage from "../../general/RoundedImage";
import { blackColor, whiteColor } from "../../../assets/colors";
import { poppins } from "../../../assets/fonts";
import FormInputField from "../../general/form/FormInputField";

const BankDetails = () => {
  const { bank, setAccountNumber, accountNumber, setAccountError, setBalance } =
    useUserContext();
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const bankDet = bankList.find((bankD) => bankD.name === bank);
    setBankDetails(bankDet);
  }, [bank]);
  return (
    <View
      style={{
        gap: 15,
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
          image={bankDetails?.logo}
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
            {bankDetails?.name}
          </Text>
          {/* <Text
            style={{
              fontFamily: poppins.regular.default,
              color: blackColor.opacity600,
            }}
          >
            {bankDetails?.description}
          </Text> */}
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <FormInputField
          onChangeText={(text) => {
            if (text.length !== 10) {
              setBalance(null);
            }
            setAccountNumber(text);
            setAccountError("");
          }}
          value={accountNumber}
          placeholder="Account Number"
          inputMode="numeric"
          keyboardType="number-pad"
          inputStyle={{
            backgroundColor: blackColor.opacity100,
            borderRadius: 100,
            borderWidth: 0,
          }}
        />
      </View>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({});
