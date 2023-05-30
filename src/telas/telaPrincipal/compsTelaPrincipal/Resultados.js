import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Resultados = () => {
    const valorTotalConta = useSelector(state => state.valorTotalContaStore.valorTotalConta);
    console.log("\n\n\nO valorTotalContaStore é:  ", valorTotalConta )

    const valorBebidas = useSelector(state => state.valorBebidasStore.valorBebidas)
    console.log("O valorBebidas é:  ", valorBebidas)

    const TotalPessoas = useSelector(state => state.totalPessoasStore.totalPessoas)
    console.log("O totalPessoasStore é:  ", TotalPessoas)

    const pessoasQueBebem = useSelector(state => state.pessoasQueBebemStore.pessoasQueBebem)
    console.log("O quantidade de pessoas que bebem é: ",pessoasQueBebem)


    const resultadoPessoasQueNaoBebem = ((valorTotalConta - valorBebidas) / TotalPessoas)
    const resultadoPessoasQueBebem = resultadoPessoasQueNaoBebem + (valorBebidas / pessoasQueBebem)

    return <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
            <Text style={estilos.texto}> Valor: quem Bebe </Text>
            <Text style={estilos.numero}>{ resultadoPessoasQueBebem }</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={estilos.texto}> Valor: quem NÃO BEBE </Text>
            <Text style={estilos.numero}>{ resultadoPessoasQueNaoBebem }</Text>
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