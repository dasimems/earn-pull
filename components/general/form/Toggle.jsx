import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { blackColor, primaryColor, whiteColor } from '../../assets/colors'

const Toggle = ({width, height, bg, padding, buttonBg, activeBg, activeButtonBg, onChange,
    checked}) => {

    const initialValue = {
        bg: bg? bg : blackColor.opacity100,
        buttonBg: buttonBg? buttonBg : whiteColor.default
    }

    if(typeof(checked) !== "boolean"){
        checked = false
    }

    if(!onChange){
        onChange = () => {}
    }

    if(!padding){
        padding = 2;
    }
    if(!height){
        height = 20;
    }
    if(!width){
        width = 40;
    }

    const buttonHeight = (height - (padding * 2))

    const [colors, setColor] = useState(initialValue),
      [active, setActive] = useState(false);

    useEffect(()=>{

        onChange(active)
        checked = active;

        if(active){
            setColor(prevState => ({
                ...prevState,
                buttonBg: activeButtonBg? activeButtonBg :  whiteColor.default,
                bg: activeBg? activeBg : primaryColor.default
            }))
        }else{

            setColor(prevState => ({
                ...prevState,
                ...initialValue
            }))

        }
    },[active])

    useEffect(()=>{

        if(checked !== active){
            setActive(checked)
        }

    }, [checked, active])

  return (
    <Pressable onPress={()=>{
        setActive(prevState => !prevState)
    }} style={{
        width: width,
        height: height,
        backgroundColor: colors.bg,
        borderRadius: 100,
        alignItems: active? 'flex-end' : 'flex-start',
        padding: padding
    }}>
        <View style={{
            width: buttonHeight,
            height: buttonHeight,
            backgroundColor: colors.buttonBg,
            borderRadius: 100
        }}></View>
    </Pressable>
  )
}

export default Toggle

const styles = StyleSheet.create({})