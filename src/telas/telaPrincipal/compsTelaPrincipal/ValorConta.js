import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

function TextInputValorConta({ label, placeholder, action }) {
    const [valorTotalConta, setValorTotalConta] = useState("");
    const LimitandoCasasDecimaisValorTotalConta = (novoValorTotalConta) => {
        const valorTotalContaLimpo = novoValorTotalConta.replace(/[^0-9,','.]/g, '');
        const decimalText = limitarCasasDecimaisValorTotalConta(valorTotalContaLimpo, 2);
        setValorTotalConta(decimalText);
        action(decimalText);
    }

    const limitarCasasDecimaisValorTotalConta = (valorTotalConta, casasDecimais) => {
        const regexValorTotalConta = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
        return valorTotalConta.replace(regexValorTotalConta, '$1');
    };

    return (
        <View style={estilos.container} >
            <Text style={estilos.label}>{label}</Text>
            <TextInput style={estilos.TextInput}
                onChangeText={LimitandoCasasDecimaisValorTotalConta}
                value={valorTotalConta}
                inputMode="numeric"
                keyboardType="numeric"
                placeholder={placeholder}
            />
        </View>
    );
};

export default TextInputValorConta;

const estilos = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 40,
    },
    label: {
        position: 'absolute',
        top: -22,
        fontWeight: 700,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        paddingStart: 8,
        fontSize: 18,
        lineHeight: 22,
    },
    TextInput: {
        fontSize: 15,
        paddingStart: 12,
        height: 48,
        borderRadius: 10,
        backgroundColor: "#E1F0ED",
    },
})