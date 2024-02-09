import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackPramList } from './navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackPramList, 'MayorScreen3'> {}

 export const MayorScreen3 = ({ navigation }: Props) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleComparar = () => {
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);
    
    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      const resultado = parsedNum1 >= parsedNum2 ? parsedNum1 : parsedNum2;
      Alert.alert('El mayor o igual es:', resultado.toString());
    } else {
      Alert.alert('Error', 'Por favor ingresa números válidos en ambos campos.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          placeholder="Número 1"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          placeholder="Número 2"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Calcular" onPress={handleComparar} />
        <Button title="Borrar" onPress={() => { setNum1(''); setNum2(''); }} />
        <Button title="Menor o Igual" onPress={() => navigation.navigate('MenorScreen4')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


