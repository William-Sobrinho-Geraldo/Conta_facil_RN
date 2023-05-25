import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { exemplo } from "./Calculos";
import { useSelector } from "react-redux";

export default function Resultados() {
    const valorTotalConta = useSelector(state => state.valorTotalConta);
    console.log("O valorTotalConta é:  ", valorTotalConta)

    return <>
        <View style={{ flexDirection: "row" , justifyContent: "space-between"}} >
            <Text style={estilos.texto}> Valor: quem Bebe </Text>
                <Text style={estilos.numero}> { valorTotalConta } </Text>
        </View>
        <View style={{ flexDirection: "row" , justifyContent: "space-between"}}>
        <Text style={estilos.texto}> Valor: quem NÃO BEBE </Text>
        <Text style={estilos.numero}>R$15,00</Text>
        </View>
    </>
};

const estilos = StyleSheet.create({
    texto: {
        fontSize: 16,
        lineHeight: 20,
        paddingTop: 24,
        fontWeight: "bold",
    },
    numero: {
        fontSize: 16,
        lineHeight: 20,
        paddingTop: 24,
        paddingEnd:16,
        fontWeight: "bold",
    }
})