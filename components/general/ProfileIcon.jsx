import { View } from "react-native";
import { UserCircle } from "../../assets/icons";
import { headerIconSize, screenTextColors } from "../../data/general";
import { blackColor, dangerColor, whiteColor } from "../../assets/colors";
import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProfileIcon = () => {
    
    

    const { name: screenName } = useRoute();
    const textColor = screenTextColors[screenName] ? screenTextColors[screenName].default : blackColor.default;
  return (
    <View
      style={{
        position: "relative"
      }}
    >
      <UserCircle color={textColor} size={headerIconSize} />

      <Text
        style={{
          width: 18,
          height: 18,
          backgroundColor: dangerColor.default,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          color: textColor,
          textAlign: "center",
          position: "absolute",
          top: -9,
          right: 0,
          borderWidth: 2,
          borderColor: whiteColor.default,
          color: whiteColor.default
        }}
      >
        2
      </Text>
    </View>
  );
};


export default ProfileIcon