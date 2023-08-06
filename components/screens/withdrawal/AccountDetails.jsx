import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FormInputField from "../../general/form/FormInputField";
import { blackColor, primaryColor, whiteColor } from "../../../assets/colors";
import { useUserContext } from "../../../context";
import { Dropdown } from "react-native-element-dropdown";
import bankList from "../../../data/banks.json";
import { useNavigation } from "@react-navigation/native";
import { poppins } from "../../../assets/fonts";

const AccountDetails = () => {
  const { balance, setAccountDetails, accountDetails } = useUserContext();

  const { navigate } = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{ gap: 20 }}>
      <FormInputField
        value={accountDetails.accountNumber}
        inputMode="numeric"
        keyboardType="number-pad"
        placeholderTextColor={whiteColor.opacity400}
        placeholder="Account Number"
        error={
          accountDetails.accountNumber &&
          accountDetails.accountNumber.length !== 10
            ? "Please input a valid account number"
            : ""
        }
        onChangeText={accountNumber => {
          setAccountDetails({ ...accountDetails, accountNumber });
        }}
        style={{ ...styles.formStyle }}
        labelStyle={{ ...styles.labelStyle }}
        inputStyle={{ ...styles.inputStyle }}
      />
      <FormInputField
        value={accountDetails.accountName}
        placeholderTextColor={whiteColor.opacity400}
        placeholder="Account Name"
        onChangeText={accountName => {
          setAccountDetails({ ...accountDetails, accountName });
        }}
        style={{ ...styles.formStyle }}
        labelStyle={{ ...styles.labelStyle }}
        inputStyle={{ ...styles.inputStyle }}
      />
      <Dropdown
        style={{
          borderColor: primaryColor.default,
          borderWidth: 1,
          paddingVertical: 7,
          paddingHorizontal: 15,
          borderRadius: 10
        }}
        activeColor={whiteColor.opacity100}
        placeholderStyle={{
          color: whiteColor.opacity400,
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
            ? accountDetails.bankName ? accountDetails.bankName : "Select Bank"
            : "..."
        }
        searchPlaceholder="Search..."
        value={accountDetails.bankName}
        onChange={item => {
          setAccountDetails({ ...accountDetails, bankName: item.name });
        }}
      />
      <FormInputField
        value={accountDetails.amount}
        placeholderTextColor={whiteColor.opacity400}
        inputMode="numeric"
        keyboardType="number-pad"
        placeholder="Input Amount"
        error={
          accountDetails.amount &&
          parseInt(accountDetails.amount) > parseInt(balance)
            ? "Withdrawal amount can't be more than your balance"
            : ""
        }
        onChangeText={amount => {
          if (isFinite(amount)) {
            setAccountDetails({ ...accountDetails, amount });
          }
        }}
        style={{ ...styles.formStyle }}
        labelStyle={{ ...styles.labelStyle }}
        inputStyle={{ ...styles.inputStyle }}
      />

      <Text style={{ color: primaryColor.opacity700 }}>
        Avalable Balance: {balance}
      </Text>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: primaryColor.default,
    color: whiteColor.default
  },
  labelStyle: {
    fontSize: 13
  },
  formStyle: {
    gap: 10
  }
});
