import React from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export const MenorScreen4 = () => {
    const [formulario, setFormulario] = React.useState({
        num1: '',
        num2: '',
    });

    const handleNumero1Change = (valor: string) => {
        setFormulario({ ...formulario, num1: valor });
    };

    const handleNumero2Change = (valor: string) => {
        setFormulario({ ...formulario, num2: valor });
    };

    const handleComparar = () => {
        const { num1, num2 } = formulario;
        const parsedNum1 = parseInt(num1) || 0;
        const parsedNum2 = parseInt(num2) || 0;
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
                    onChangeText={handleNumero1Change}
                    value={formulario.num1}
                    placeholder="Número 1"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleNumero2Change}
                    value={formulario.num2}
                    placeholder="Número 2"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Calcular" onPress={handleComparar} />
                <Button title="Borrar" onPress={() => setFormulario({ num1: '', num2: '' })} />
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

