import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";


export default function PessoasQueBebem({ label, placeholder , action}) {
    const [pessoasQueBebem, setPessoasQueBebem] = useState("");
    console.log(pessoasQueBebem)

    const pessoasQueBebemInt = (newText) => {
        // Remover caracteres inválidos (ponto e vírgula)
        const pessoasQueBebemLimpo = newText.replace(/[.,]/g, '');
        setPessoasQueBebem(pessoasQueBebemLimpo);
        action(pessoasQueBebemLimpo);
    };

    return (
        <View style={estilos.container} >
            <Text style={estilos.label}>{label}</Text>
            <TextInput style={estilos.TextInput}
                onChangeText={pessoasQueBebemInt}
                value={pessoasQueBebem}
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