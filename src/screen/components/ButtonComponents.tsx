import React from 'react'
import { Button, ButtonProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLOR_BUTTON } from '../../commomns/ConstantsColor';

export const ButtonComponents = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}
        </Text>

    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:COLOR_BUTTON,
        padding:5,
        borderRadius:5,
        color:'white',
        fontSize:24,
        textAlign:'center',
        marginVertical:5,

    }
})
