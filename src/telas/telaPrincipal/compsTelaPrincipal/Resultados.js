import React from "react";
import { StyleSheet, Text, View } from "react-native";

// function LimitandoCasasDecimaisPessoasQueBebem(pessoasQueBebemm) {
//     const valorTotalContaLimpo = pessoasQueBebemm.replace(/[^0-9,','.]/g, '');
//     const decimalText = limitarCasasDecimaisPessoasQueBebem(valorTotalContaLimpo, 2);
//     return decimalText  
// }

// function limitarCasasDecimaisPessoasQueBebem (valorTotalBebidas, casasDecimais) {
//     const regexValorTotalConta = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
//     return valorTotalBebidas.replace(regexValorTotalConta, '$1');
// }

const Resultados = ({ pessoasQueBebem , pessoasQueNaoBebem }) => {
        
    console.log("pessoas que bebem é : ", pessoasQueBebem);
    // const quemBebeLimpo = limitarCasasDecimaisPessoasQueBebem(pessoasQueBebem, 2);
    // console.log("pessoas que bebem limpo é : ", quemBebeLimpo);

    
    // const LimitandoCasasDecimaisPessoasQueBebem = (regexPessoasQueBebem) => {
        // const valorTotalContaLimpo = pessoasQueBebem.replace(/[^0-9,','.]/g, '');
        // const decimalText = limitarCasasDecimaisPessoasQueBebem(valorTotalContaLimpo, 2);
        // return decimalText  
    // };
    // const limitarCasasDecimaisPessoasQueBebem = (valorTotalBebidas, casasDecimais) => {
        // const regexValorTotalConta = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
        // return valorTotalBebidas.replace(regexValorTotalConta, '$1');
    // };



    return <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
            <Text style={estilos.texto}> Valor (Quem bebe) : </Text>
            <Text style={estilos.numero}>R${ pessoasQueBebem }</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={estilos.texto}> Valor (Quem NÃO bebe):</Text>
            <Text style={estilos.numero}>R${ pessoasQueNaoBebem }</Text>
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