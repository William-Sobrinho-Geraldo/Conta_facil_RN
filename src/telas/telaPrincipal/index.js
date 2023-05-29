import React from "react"
import TextInputValorConta from "./compsTelaPrincipal/TextInputValorConta"
import TextInputValorBebidas, { valorTotalBebidas } from "./compsTelaPrincipal/TextInputValorBebidas"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import MyTextInputInteiros from "./compsTelaPrincipal/MyTextInputInteiros"
import Resultados from "./compsTelaPrincipal/Resultados"
import { useDispatch } from "react-redux"
import { alteraValorInputText , alteraValorBebidas} from "../../actions"


export default function TelaPrincipal() {
    const dispatch = useDispatch();

    return <SafeAreaView style={estilos.primeiroComponente}>
        <TextInputValorConta label="Valor total da conta" placeholder="  R$ 0,00" action={(decimalText) => {dispatch(alteraValorInputText(decimalText))}} />
        <TextInputValorBebidas label="Valor das bebidas" placeholder="  R$0,00" action={(decimalText) => {dispatch(alteraValorBebidas(decimalText))}} />
        <MyTextInputInteiros label="Total pessoas" placeholder="  Quantas pessoas dividirão a conta?" />
        <MyTextInputInteiros label="Total de pessoas que bebem" placeholder="  Quantas pessoas consumiram bebidas alcoolicas?" />
        <TouchableOpacity style={estilos.TouchableOpacity}>
            <Text style={estilos.textoBotao}> CALCULAR </Text>
        </TouchableOpacity>
        <Resultados />
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