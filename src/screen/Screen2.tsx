import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Screen2 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.home2}>
            PELICULAS DE TERROR
        </Text>
        <Image
        source={{uri: 'https://img.freepik.com/foto-gratis/fondo-pantalla-halloween-mano-zombie_23-2149122586.jpg?w=360&t=st=1707503386~exp=1707503986~hmac=dca1087dfa7d143cb7039eb92d1131f0eac91510fb789b78932bdef646271f96'}}
        style={styles.imageestilos2}/>
       
    </View>
  )
}
const styles=StyleSheet.create({
     imageestilos2:{
        width: '80%',
        height: '50%',
        borderRadius: 50,
        marginBottom: 20,
        top:-150,

     },
     home2:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        top:-190,

     },
     container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    
     }

})
