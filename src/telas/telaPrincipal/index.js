import React, { useState } from "react"
import TextInputValorConta from "./compsTelaPrincipal/TextInputValorConta"
import TextInputValorBebidas, { valorTotalBebidas } from "./compsTelaPrincipal/TextInputValorBebidas"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import TotalPessoas from "./compsTelaPrincipal/TotalPessoas"
import PessoasQueBebem from "./compsTelaPrincipal/PessoasQueBebem"
import Resultados from "./compsTelaPrincipal/Resultados"
import { useDispatch, useSelector } from "react-redux"
import { alteraValorInputText, alteraValorBebidas, alteraQuantTotalPessoas, alteraQuantPessoasQueBebem } from "../../actions"


export default function TelaPrincipal() {
    const dispatch = useDispatch();
    const [displayQuemBebe, setDisplayQuemBebe] = useState("0,00");
    const [displayQuemNaoBebe, setDisplayQuemNaoBebe] = useState("0,00");
    
    const valorTotalConta = useSelector(state => state.valorTotalContaStore.valorTotalConta);
    const valorBebidas = useSelector(state => state.valorBebidasStore.valorBebidas)
    const quantTotalPessoas = useSelector(state => state.totalPessoasStore.totalPessoas)
    const pessoasQueBebem = useSelector(state => state.pessoasQueBebemStore.pessoasQueBebem)

    function calcularQuemNaoBebe() {
        const resultadoPessoasQueNaoBebem = ((valorTotalConta - valorBebidas) / quantTotalPessoas)
        return resultadoPessoasQueNaoBebem;
    }
    function calcularQuemBebe() {
        const resultadoPessoasQueNaoBebem = ((valorTotalConta - valorBebidas) / quantTotalPessoas)
        const resultadoPessoasQueBebem = resultadoPessoasQueNaoBebem + (valorBebidas / pessoasQueBebem)
        return resultadoPessoasQueBebem;
    }

    const mostraResultados = () => {
        setDisplayQuemBebe(calcularQuemBebe);
        setDisplayQuemNaoBebe(calcularQuemNaoBebe);
    };

    const pessoasQueBebemFormated = displayQuemBebe.toFixed(2);
    const pessoasQueNaoBebemFormated = displayQuemNaoBebe.toFixed(2);

    return <SafeAreaView style={estilos.primeiroComponente}>
        <TextInputValorConta
            label="Valor total da conta"
            placeholder="  R$ 0,00"
            action={(decimalText) => { dispatch(alteraValorInputText(decimalText)) }} />
        <TextInputValorBebidas
            label="Valor das bebidas"
            placeholder="  R$0,00"
            action={(decimalText) => { dispatch(alteraValorBebidas(decimalText)) }} />
        <TotalPessoas
            label="Total pessoas"
            placeholder="  Quantas pessoas dividirão a conta?"
            action={(totalPessoas) => { dispatch(alteraQuantTotalPessoas(totalPessoas)) }} />
        <PessoasQueBebem
            label="Total de pessoas que bebem"
            placeholder="  Quantas pessoas consumiram bebidas alcoolicas?"
            action={(pessoasQueBebem) => { dispatch(alteraQuantPessoasQueBebem(pessoasQueBebem)) }} />

        <TouchableOpacity style={estilos.TouchableOpacity} onPress={mostraResultados}>
            <Text style={estilos.textoBotao}> CALCULAR </Text>
        </TouchableOpacity>
       

        <Resultados pessoasQueBebem={pessoasQueBebemFormated} pessoasQueNaoBebem={pessoasQueNaoBebemFormated} />
    </SafeAreaView>
};


const estilos = StyleSheet.create({
    primeiroComponente: {
        position: 'relative',
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20,

    },
    TouchableOpacity: {
        marginTop: 80,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 8,
    },
    textoBotao: {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
})