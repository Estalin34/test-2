import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from './theme/AppTheme';
import { ButtonComponents } from './components/ButtonComponents';
import { RootStackPramList } from './navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackPramList,'Home'>{
    
}
export const home = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.globalMargin}>INICIO</Text>
        <ButtonComponents title="Ir a pantalla 1" onPress={() => navigation.navigate('Screen1')} />
        <ButtonComponents title="Ir a pantalla 2" onPress={() => navigation.navigate('Screen2')} />
        <ButtonComponents title="Ir a pantalla 3" onPress={() => navigation.navigate('MayorScreen3')} />
        <ButtonComponents title="Ir a pantalla 4" onPress={() => navigation.navigate('MenorScreen4')} />
                 </View>
  )
}


