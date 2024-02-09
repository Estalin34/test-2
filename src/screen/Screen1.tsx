import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'


export const Screen1 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.home1}> 
                PELICULAS DE ACCION</Text>  
        <Image source={{uri: 'https://as01.epimg.net/epik/imagenes/2019/06/03/portada/1559573314_873311_1559575720_noticia_normal_recorte1.jpg'}}
        style={styles.imageestilos}/>
              
    </View>
  )
}
const styles=StyleSheet.create({
     imageestilos:{
        width: '80%',
        height: '50%',
        borderRadius: 50,
        marginBottom: 20,
        top:-150,
        },
        home1:{
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