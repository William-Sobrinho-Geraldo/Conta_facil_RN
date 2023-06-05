import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Resultados = ({ pessoasQueBebem, pessoasQueNaoBebem }) => {
    return <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
            <Text style={estilos.texto}> Valor (Quem bebe) : </Text>
            <Text style={estilos.numero}>R${pessoasQueBebem}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={estilos.texto}> Valor (Quem NÃO bebe):</Text>
            <Text style={estilos.numero}>R${pessoasQueNaoBebem}</Text>
        </View>
    </>
};

export default Resultados;

const estilos = StyleSheet.create({
    texto: {
        fontSize: 18,
        lineHeight: 22,
        paddingTop: 24,
        fontWeight: "bold",
    },
    numero: {
        fontSize: 18,
        lineHeight: 22,
        paddingTop: 24,
        paddingEnd: 16,
        fontWeight: "bold",
    }
})