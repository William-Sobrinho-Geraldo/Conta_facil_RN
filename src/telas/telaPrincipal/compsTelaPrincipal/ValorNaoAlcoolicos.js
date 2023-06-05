import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function ValorNaoAlcoolicos({ label, placeholder, action}) {
    const [valorNaoAlcoolicos, setValorNaoAlcoolicos] = useState("");
    const LimitandoCasasDecimaisValorNaoAlcoolicos = (novoValorTotalConta) => {
        const valorTotalContaLimpo = novoValorTotalConta.replace(/[^0-9,','.]/g, '');
        const decimalText = limitarCasasDecimaisValorTotalConta(valorTotalContaLimpo, 2);
        setValorNaoAlcoolicos(decimalText);
        action(decimalText);
    }
    const limitarCasasDecimaisValorTotalConta = (valorNaoAlcoolicos, casasDecimais) => {
        const regexValorNaoAlcoolicos = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
        return valorNaoAlcoolicos.replace(regexValorNaoAlcoolicos, '$1');
    };

    return (
        <View style={estilos.container} >
            <Text style={estilos.label}>{label}</Text>
            <TextInput style={estilos.TextInput}
                onChangeText={LimitandoCasasDecimaisValorNaoAlcoolicos}
                value={valorNaoAlcoolicos}
                inputMode="numeric"
                keyboardType="numeric"
                placeholder={placeholder}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        //position: 'relative',
        marginTop: 40,
        marginBottom: 45,
    },
    label: {
        position: 'absolute',
        top: -22,
        fontWeight: 700,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        paddingStart:8,
        fontSize: 18,
        lineHeight: 22,
    },
    TextInput: {
        fontSize:15,
        paddingStart:12,
        height: 48,
        borderRadius: 10,
        backgroundColor: "#E1F0ED",
    },
})


