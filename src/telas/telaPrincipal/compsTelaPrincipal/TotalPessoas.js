import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function TotalPessoas({ label, placeholder , action}) {
    const [totalPessoas, setTotalPessoas] = useState("");

    const totalPessoasInt = (newText) => {
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
        top: -22,
        fontWeight: 700,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        paddingStart:8,
        fontSize: 18,
        lineHeight: 22,
    },
    TextInput:{
        fontSize:15,
        paddingStart:12,
        height: 48,
        borderRadius: 10,
        backgroundColor: "#E1F0ED",
    },
})