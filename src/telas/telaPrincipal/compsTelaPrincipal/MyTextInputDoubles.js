import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";


export default function MyTextInputValores({ label, placeholder, }) {
    const [valorTotalConta, setValorTotalConta] = useState("");


    const LimitandoCasasDecimaisValorTotalConta = (novoValorTotalConta) => {
        const valorTotalContaLimpo = novoValorTotalConta.replace(/[^0-9,','.]/g, '');
        const decimalText = limitarCasasDecimaisValorTotalConta(valorTotalContaLimpo, 2);
        setValorTotalConta(decimalText);
    }
    const limitarCasasDecimaisValorTotalConta = (valorTotalConta, casasDecimais) => {
        const regexValorTotalConta = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
        return valorTotalConta.replace(regexValorTotalConta, '$1');
    };


    // const totalPessoasInt = (newText) => {
    //     // Remover caracteres inválidos (ponto e vírgula)
    //     const totalPessoasLimpo = newText.replace(/[.,]/g, '');
    //     setTotalPessoas(totalPessoasLimpo);
    // };


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

const estilos = StyleSheet.create({
    container: {
        position: 'relative',
        marginTop: 40,
    },
    label: {
        position: 'absolute',
        top: -20,
        left: 15,
        fontWeight: "bold",
        backgroundColor: 'white',
        paddingHorizontal: 4,
        fontSize: 15,
        lineHeight: 18,
    },
    TextInput: {
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius:10,
    },
})