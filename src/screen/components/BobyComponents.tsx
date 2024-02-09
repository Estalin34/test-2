import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'


export const BobyComponents = (Props:any) => {
    const {height}=useWindowDimensions();
  return (
    <View style={{...styles.container,...Props.style}}>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{ 
        flexDirection:'row',
        backgroundColor: 'red',
        flex:1,
        justifyContent:"space-around",
            
    }
    
})