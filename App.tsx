import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/screen/navigator/StackNavigator';



export const App = () => {
  return (
   <NavigationContainer>
    < StackNavigator/>
    
   </NavigationContainer>
  )
}

export default App;
