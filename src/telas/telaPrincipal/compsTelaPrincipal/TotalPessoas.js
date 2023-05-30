import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";


export default function TotalPessoas({ label, placeholder , action}) {
    const [totalPessoas, setTotalPessoas] = useState("");
    console.log(totalPessoas)

    const totalPessoasInt = (newText) => {
        // Remover caracteres inválidos (ponto e vírgula)
        const totalPessoasLimpo = newText.replace(/[.,]/g, '');
        setTotalPessoas(totalPessoasLimpo);
        action(totalPessoasLimpo);
    };

    return (
        <View style={estilos.container} >
            <Text style={estilos.label}>{label}</Text>
            <TextInput style={estilos.TextInput}
                onChangeText={totalPessoasInt}
                value={totalPessoas}
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