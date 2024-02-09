import * as React from 'react';
import { Screen1 } from '../Screen1';
import { Screen2 } from '../Screen2';
import { createStackNavigator } from '@react-navigation/stack';
import { home } from '../home';
import { MayorScreen3 } from '../MayorScreen3';
import { MenorScreen4 } from '../MenorScreen4';




export type RootStackPramList={
    Home: undefined;
    Screen1: undefined;
    Screen2: undefined;
    MayorScreen3: undefined;
    MenorScreen4: undefined;
    
    }
const Stack = createStackNavigator<RootStackPramList>();
export const StackNavigator =()=> {
  return (
    
      <Stack.Navigator >
        <Stack.Screen name="Home" component={home } />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="MayorScreen3" component={MayorScreen3} />
        <Stack.Screen name="MenorScreen4" component={MenorScreen4} />
        </Stack.Navigator>
   
  );
}
