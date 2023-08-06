import { Pressable, View, StyleSheet, Text } from "react-native";
import { padding, screenTextColors } from "../../data/general";
import { blackColor, whiteColor } from "../../assets/colors";
import { useRoute } from "@react-navigation/native";
import { poppins } from "../../assets/fonts";

const ScreenHeader = ({
  contentOne,
  contentOneAction,
  contentTwo,
  contentTwoAction,
}) => {
  const { name: screenName } = useRoute();
  const textColor = screenTextColors[screenName]
    ? screenTextColors[screenName].default
    : blackColor.default;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding,
      }}
    >
      {contentOne && (
        <Pressable
          onPress={() => {
            if (contentOneAction) {
              contentOneAction();
            }
          }}
        >
          {typeof contentOne === "string" ? (
            <Text
              style={{
                ...styles.textStyle,
                color: textColor,
              }}
            >
              {contentOne}
            </Text>
          ) : (
            contentOne
          )}
        </Pressable>
      )}

      {contentTwo && (
        <Pressable
          onPress={() => {
            if (contentTwoAction) {
              contentTwoAction();
            }
          }}
        >
          {typeof contentTwo === "string" ? (
            <Text
              style={{
                ...styles.textStyle,
                color: textColor,
              }}
            >
              {contentTwo}
            </Text>
          ) : (
            contentTwo
          )}
        </Pressable>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  textStyle: {
    color: whiteColor.default,
    fontFamily: poppins.bold.default,
    fontSize: 23,
  },
});
