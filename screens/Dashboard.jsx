import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React, { useEffect, useState } from "react";
import ScreenContainer from "../components/layout/ScreenContainer";
import {
  whiteColor,
  blackColor,
  primaryColor,
  successColor
} from "../assets/colors";
import RoundedImage from "../components/general/RoundedImage";
import { poppins } from "../assets/fonts";
import { padding, actions, NavNames } from "../data/general";
import Button from "../components/general/Button";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../context";
import { MaleAvatarOne } from "../assets/images";
import { formatPrice, formatSeconds } from "../functions";

const DashboardHeader = () => {
  const { userDetails, balance } = useUserContext();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <RoundedImage image={MaleAvatarOne} />
        <Text
          style={{
            fontFamily: poppins.medium.default,
            color: whiteColor.default
          }}
        >
          {userDetails.name.split(" ")[0]}
        </Text>
      </View>
    </View>
  );
};

const Dashboard = () => {
  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };
  const { navigate } = useNavigation();
  const { balance, setBalance } = useUserContext();
  const [earning, setEarning] = useState(false);
  const [earningReceived, setEarningReceived] = useState(false);
  const [defaultTimer, setDefaultTimer] = useState(5000);

  useEffect(
    () => {
      if (earning) {
        setTimeout(() => {
          if (defaultTimer > 0) {
            var newTimer = defaultTimer - 1000;

            if (newTimer < 0) {
              newTimer = 0;
            }

            setDefaultTimer(newTimer);
          }
        }, 1000);

        if (defaultTimer < 1) {
          setEarningReceived(true);
          setBalance(94000.07);
        }
      }
    },
    [defaultTimer, earning]
  );
  return (
    <ScreenContainer>
      <View style={{ gap: 20, paddingVertical: 20 }}>
        <DashboardHeader />

        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontFamily: poppins.bold.default,
            color: whiteColor.default
          }}
        >
          ₦{formatPrice(balance)}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20
          }}
        >
          <Button
            onPress={() => {
              if (!earningReceived) {
                setEarning(true);
              } else {
                showToast(
                  "You've have gotten your earning for today. Please come back tomorrow"
                );
              }
            }}
            style={{ flex: 1 / 2 }}
          >
            <Text
              style={{
                fontFamily: poppins.medium.default,
                color: whiteColor.default
              }}
            >
              Start Earning
            </Text>
          </Button>
          <Button
            onPress={() => {
              navigate(NavNames.Withdrawal.name);
            }}
            style={{ flex: 1 / 2, backgroundColor: whiteColor.opacity100 }}
          >
            <Text
              style={{
                fontFamily: poppins.medium.default,
                color: whiteColor.default
              }}
            >
              Withdraw
            </Text>
          </Button>
        </View>

        <View
          style={{
            backgroundColor: whiteColor.opacity100,
            padding: 20,
            borderRadius: 15
          }}
        >
          <Text style={{ color: whiteColor.opacity500, fontSize: 15 }}>
            Click on the start earning button to start receiving your daily
            bonus
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: whiteColor.default,
          borderRadius: 15,
          marginBottom: 10,
          padding
        }}
      >
        {earning &&
          <View
            style={{
              backgroundColor: successColor.opacity100,
              padding: 15,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontFamily: poppins.regular.default,
                color: blackColor.opacity500,
                fontSize: 13
              }}
            >
              Earning in the next
            </Text>

            <Text
              style={{
                fontFamily: poppins.medium.default,
                color: blackColor.opacity700
              }}
            >
              {formatSeconds(defaultTimer)}
            </Text>
          </View>}
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {actions.map(({ Icon, label, name }, index) =>
            <TouchableOpacity
              onPress={() => {
                if (!name) {
                  showToast("Coming soon");
                } else {
                  navigate(name);
                }
              }}
              key={index}
              style={{
                width: "30%",
                alignItems: "center",
                gap: 7,
                marginTop: 30
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: primaryColor.opacity100,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {Icon &&
                  typeof Icon !== "string" &&
                  <Icon color={primaryColor.default} />}
              </View>
              <Text
                style={{
                  fontFamily: poppins.regular.default,
                  color: blackColor.opacity500,
                  fontSize: 11
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
