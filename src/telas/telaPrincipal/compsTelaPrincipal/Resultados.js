import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Resultados = () => {
    const valorTotalContaStore = useSelector(state => state.valorTotalContaStore.valorTotalConta);
    console.log("O valorTotalContaStore é:  ", valorTotalContaStore)


    const valorBebidasStore = useSelector(state => state.valorBebidasStore.valorBebidas)
    console.log("O valorBebidas é:  ", valorBebidasStore)

    return <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
            <Text style={estilos.texto}> Valor: quem Bebe </Text>
            <Text style={estilos.numero}>{valorTotalContaStore}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={estilos.texto}> Valor: quem NÃO BEBE </Text>
            <Text style={estilos.numero}>R$15,00</Text>
        </View>
    </>
};

export default Resultados;

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
        paddingEnd: 16,
        fontWeight: "bold",
    }
})