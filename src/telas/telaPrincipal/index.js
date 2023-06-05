import React, { useState } from "react"
import ValorConta from "./compsTelaPrincipal/ValorConta"
import ValorAlcoolicos from "./compsTelaPrincipal/ValorAlcoolicos"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import TotalPessoas from "./compsTelaPrincipal/TotalPessoas"
import PessoasQueBebem from "./compsTelaPrincipal/PessoasQueBebem"
import ValorNaoAlcoolicos from "./compsTelaPrincipal/ValorNaoAlcoolicos"
import Resultados from "./compsTelaPrincipal/Resultados"
import { useDispatch, useSelector } from "react-redux"
import { alteraValorInputText, alteraValorBebidas, alteraQuantTotalPessoas, alteraQuantPessoasQueBebem, alteraValorNaoAlcoolicos } from "../../actions"
import LinearGradient from 'react-native-linear-gradient';

const gradiente1 = "#B2E4AC"
const gradiente2 = "#97C9E7"
const gradiente3 = "#605AF2"

export default function TelaPrincipal() {
    const dispatch = useDispatch();
    const [displayQuemBebe, setDisplayQuemBebe] = useState(0.00);
    const [displayQuemNaoBebe, setDisplayQuemNaoBebe] = useState(0.00);

    const valorTotalConta = useSelector(state => state.valorTotalContaStore.valorTotalConta);
    const valorAlcoolicos = useSelector(state => state.valorBebidasStore.valorBebidas);
    const valorNaoAlcoolicos = useSelector(state => state.valorNaoAlcoolicosStore.valorNaoAlcoolicos)
    const quantTotalPessoas = useSelector(state => state.totalPessoasStore.totalPessoas);
    const quantAlcoolicos = useSelector(state => state.pessoasQueBebemStore.pessoasQueBebem);

    function calcularQuemNaoBebe() {
        const resultadoPessoasQueNaoBebem = ((valorTotalConta - valorNaoAlcoolicos - valorAlcoolicos) / quantTotalPessoas) + (valorNaoAlcoolicos / (quantTotalPessoas - quantAlcoolicos))
        return resultadoPessoasQueNaoBebem;
    }
    function calcularQuemBebe() {
        const resultadoPessoasQueBebem = ((valorTotalConta - valorNaoAlcoolicos - valorAlcoolicos) / quantTotalPessoas) + (valorAlcoolicos / quantAlcoolicos)
        return resultadoPessoasQueBebem;
    }

    const mostraResultados = () => {
        setDisplayQuemBebe(calcularQuemBebe);
        setDisplayQuemNaoBebe(calcularQuemNaoBebe);
    };

    return <SafeAreaView style={estilos.primeiroComponente}>
        <ValorConta
            label="Valor total da conta"
            placeholder="  R$ 0,00"
            action={(decimalText) => { dispatch(alteraValorInputText(decimalText)) }} />
        <ValorAlcoolicos
            label="Valor das bebidas alcoólicas"
            placeholder="  R$0,00"
            action={(decimalText) => { dispatch(alteraValorBebidas(decimalText)) }} />
        <ValorNaoAlcoolicos 
            label="Valor das bebidas NÃO alcoólicas"
            placeholder="  R$ 0,00"
            action={(valorNaoAlcoolicos) => { dispatch(alteraValorNaoAlcoolicos(valorNaoAlcoolicos)) }}/>
        <TotalPessoas
            label="Total pessoas"
            placeholder="  Quantas pessoas dividirão a conta?"
            action={(totalPessoas) => { dispatch(alteraQuantTotalPessoas(totalPessoas)) }} />
        <PessoasQueBebem
            label="Total de pessoas que bebem alcoólicos"
            placeholder="  Quantas pessoas consumiram bebidas alcoolicas?"
            action={(pessoasQueBebem) => { dispatch(alteraQuantPessoasQueBebem(pessoasQueBebem)) }} />

        <TouchableOpacity style={estilos.botao} onPress={mostraResultados}>
            <LinearGradient
                colors={[gradiente1, gradiente2, gradiente3]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ borderRadius: 5 }} >
                <Text style={estilos.textoBotao}> CALCULAR </Text>
            </LinearGradient>
        </TouchableOpacity>

        <Resultados pessoasQueBebem={displayQuemBebe.toFixed(2)} pessoasQueNaoBebem={displayQuemNaoBebe.toFixed(2)} />
    </SafeAreaView >
};

const estilos = StyleSheet.create({
    primeiroComponente: {
        position: 'relative',
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20,
    },
    botao: {
        marginTop: 50,
        paddingVertical: 16,
        borderRadius: 10,
    },
    textoBotao: {
        height: 50,
        fontSize: 26,
        lineHeight: 32,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
    },

})