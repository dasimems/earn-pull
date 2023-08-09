import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollableContainer from "../components/layout/ScrollableContainer";
import ScreenContainer from "../components/layout/ScreenContainer";
import Header from "../components/screens/general/Header";
import { poppins } from "../assets/fonts";
import { blackColor, whiteColor } from "../assets/colors";
import ContinueButton from "../components/screens/activation/ContinueButton";
import { useUserContext } from "../context";
import { formatDate } from "../functions";

const ActivationDetails = ({ title, value, hideBorder }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: hideBorder ? 0 : 1,
        paddingVertical: 10,
        paddingBottom: 20,
        borderColor: whiteColor.opacity200
      }}
    >
      <Text
        style={{
          fontFamily: poppins.medium.default,
          color: whiteColor.opacity500
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: poppins.bold.default,
          color: whiteColor.default
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const Activation = () => {
  const { pendingPayment } = useUserContext();
  const { amount, date } = pendingPayment || {};
  return (
    <ScreenContainer
      style={{
        paddingHorizontal: 0
      }}
    >
      <Header headerText="Withdrawal" />
      <ScrollableContainer
        style={{
          gap: 40
        }}
      >
        <Text
          style={{
            fontFamily: poppins.medium.default,
            color: whiteColor.opacity600,
            textAlign: "center"
          }}
        >
          You have a pending withdrawal of{" "}
          <Text
            style={{
              fontFamily: poppins.bold.default,
              color: whiteColor.default
            }}
          >
            ₦{amount}
          </Text>{" "}
          which was made on{" "}
          {formatDate({ date, dateFormat: ["MM", "D", "YY"] }).fullDate}.
        </Text>
        <Text
          style={{
            fontFamily: poppins.medium.default,
            color: whiteColor.opacity600,
            textAlign: "center"
          }}
        >
          Your payment will be approved upon activation. To activate, pay the
          sum of{" "}
          <Text
            style={{
              fontFamily: poppins.bold.default,
              color: whiteColor.default
            }}
          >
            ₦5000
          </Text>{" "}
          to any of the below accounts and click confirm payment after the
          payment has been made
        </Text>

        <View
          style={{
            gap: 10,
            padding: 20,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: whiteColor.opacity200,
            paddingBottom: 0
          }}
        >
          <ActivationDetails title="Amount" value="₦5,000" />
          <ActivationDetails title="Account Number" value="1234567890" />
          <ActivationDetails title="Account Name" value="An account" />
          <ActivationDetails
            title="Bank Name"
            value="Game Changer"
            hideBorder
          />
        </View>
        <View
          style={{
            gap: 10,
            padding: 20,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: whiteColor.opacity200,
            paddingBottom: 0
          }}
        >
          <ActivationDetails title="Amount" value="₦5,000" />
          <ActivationDetails title="Account Number" value="0987654321" />
          <ActivationDetails title="Account Name" value="Marvelous Chen" />
          <ActivationDetails
            title="Bank Name"
            value="Test Account"
            hideBorder
          />
        </View>
      </ScrollableContainer>
      <ContinueButton />
    </ScreenContainer>
  );
};

export default Activation;

const styles = StyleSheet.create({});
