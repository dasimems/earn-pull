import { Image, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import { ArrowRight } from "../assets/icons";
import Button from "../components/general/Button";
import { blackColor, primaryColor, whiteColor } from "../assets/colors";
import { poppins } from "../assets/fonts";
import FormInputField from "../components/general/form/FormInputField";
import { NavNames, padding } from "../data/general";
import { Dropdown } from "react-native-element-dropdown";
import bankList from "../data/banks.json";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../context";
import ScrollableContainer from "../components/layout/ScrollableContainer";

const AccountDetails = () => {
  const { navigate } = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const {
    balance,
    setAccountDetails,
    accountDetails,
    userDetails,
    setUserDetails
  } = useUserContext();
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <ScreenContainer style={{ paddingHorizontal: 0 }}>
      <ScrollableContainer
        style={{
          flex: 1,
          paddingHorizontal: padding,
          gap: 30,
          paddingVertical: 20
        }}
      >
        <Text
          style={{
            fontFamily: poppins.bold.default,
            color: whiteColor.default
          }}
        >
          Fill in your Information
        </Text>
        <FormInputField
          placeholderTextColor={whiteColor.opacity600}
          value={userDetails.name}
          onChangeText={(name) => {
            setUserDetails({ ...userDetails, name });
          }}
          placeholder="Your name"
          inputStyle={{
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: primaryColor.default,
            color: whiteColor.default
          }}
        />
        <FormInputField
          value={userDetails.email}
          inputMode="email"
          keyboardType="email-address"
          onChangeText={(email) => {
            setUserDetails({ ...userDetails, email });
          }}
          placeholderTextColor={whiteColor.opacity600}
          placeholder="Your email"
          inputStyle={{
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: primaryColor.default,
            color: whiteColor.default
          }}
        />

        <FormInputField
          value={accountDetails.accountName}
          onChangeText={(accountName) => {
            setAccountDetails({ ...accountDetails, accountName });
          }}
          placeholderTextColor={whiteColor.opacity600}
          placeholder="Account Name"
          inputStyle={{
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: primaryColor.default,
            color: whiteColor.default
          }}
        />
        <FormInputField
          value={accountDetails.accountNumber}
          inputMode="numeric"
          keyboardType="number-pad"
          onChangeText={(accountNumber) => {
            setAccountDetails({ ...accountDetails, accountNumber });
          }}
          placeholderTextColor={whiteColor.opacity600}
          error={
            accountDetails.accountNumber &&
            accountDetails.accountNumber.length !== 10
              ? "Please input a valid account number"
              : ""
          }
          placeholder="Account Number"
          inputStyle={{
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: primaryColor.default,
            color: whiteColor.default
          }}
        />
        <Dropdown
          style={{
            borderColor: primaryColor.default,
            borderWidth: 0,
            borderBottomWidth: 1,
            paddingVertical: 7,
            paddingHorizontal: 15,
            borderRadius: 10
          }}
          activeColor={whiteColor.opacity100}
          placeholderStyle={{
            color: whiteColor.opacity600,
            fontFamily: poppins.regular.default
          }}
          selectedTextStyle={{
            color: whiteColor.default,
            fontFamily: poppins.regular.default
          }}
          itemTextStyle={{
            color: whiteColor.opacity600,
            fontFamily: poppins.regular.default
          }}
          inputSearchStyle={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            color: whiteColor.default,
            borderColor: primaryColor.default,
            borderRadius: 10
          }}
          data={bankList}
          maxHeight={
            300 //   search
          }
          labelField="name"
          valueField="id"
          containerStyle={{
            backgroundColor: blackColor.default,
            borderColor: primaryColor.default,
            borderRadius: 15
          }}
          placeholder={
            !isFocus
              ? accountDetails.bankName
                ? accountDetails.bankName
                : "Select Bank"
              : "..."
          }
          searchPlaceholder="Search..."
          value={accountDetails.bankName}
          name={accountDetails.bankName}
          onChange={(item) => {
            setAccountDetails({ ...accountDetails, bankName: item.name });
          }}
        />
      </ScrollableContainer>
      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <Button
          onPress={() => {
            if (
              accountDetails.accountName &&
              accountDetails.bankName &&
              accountDetails.accountNumber &&
              userDetails.name &&
              userDetails.email
            ) {
              navigate(NavNames.Home.name);
            } else {
              showToast("Please fill in all details");
            }
          }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            borderColor: primaryColor.default,
            borderRadius: 100,
            borderWidth: 1
          }}
          innerStyle={{
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <Text
            style={{
              color: whiteColor.opacity700,
              fontFamily: poppins.bold.default
            }}
          >
            Continue
          </Text>

          <ArrowRight color={whiteColor.opacity700} />
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({});
