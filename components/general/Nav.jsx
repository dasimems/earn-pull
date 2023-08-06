import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { padding, screenNav, screenTextColors } from '../../data/general'
import { useNavigation, useRoute } from '@react-navigation/native'
import { blackColor, whiteColor } from '../../assets/colors'

const Nav = () => {

    const {name: screenName} = useRoute();
    const {navigate} = useNavigation()

    const activeIconColor = screenTextColors[screenName]?  screenTextColors[screenName].default : blackColor.default;
    const unActiveIconColor = screenTextColors[screenName]?  screenTextColors[screenName].opacity500 : blackColor.opacity500;

  return (
    <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        paddingVertical: 20,
        paddingHorizontal: padding,
        backgroundColor: "rgba(0, 0, 0, .05)"
    }}>
      {screenNav.map(({Icon, name}, index)=>(


        name === screenName? 
        
        <Pressable key={index}>
           {Icon && typeof(Icon) !== "" && <Icon size={25} color={activeIconColor}  />}
        </Pressable>
        :
        <TouchableOpacity onPress={() => {
            navigate(name);
        }} key={index}>
           {Icon && typeof(Icon) !== "" && <Icon size={25} color={unActiveIconColor}  />}
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Nav

const styles = StyleSheet.create({})