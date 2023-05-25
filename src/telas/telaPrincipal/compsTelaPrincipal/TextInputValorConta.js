import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { connect } from 'react-redux';
import { setValue } from '../../../actions';

function TextInputValorConta({ label, placeholder, value, setValue }) {
    const [valorTotalConta, setValorTotalConta] = useState("");
    console.log("o valor da conta é " + valorTotalConta)


    const LimitandoCasasDecimaisValorTotalConta = (novoValorTotalConta) => {
        const valorTotalContaLimpo = novoValorTotalConta.replace(/[^0-9,','.]/g, '');
        const decimalText = limitarCasasDecimaisValorTotalConta(valorTotalContaLimpo, 2);
        setValorTotalConta(decimalText);
    }
    const limitarCasasDecimaisValorTotalConta = (valorTotalConta, casasDecimais) => {
        const regexValorTotalConta = new RegExp(`^(\\d+\\.\\d{0,${casasDecimais}}).*$`);
        return valorTotalConta.replace(regexValorTotalConta, '$1');
    };


    // const totalPessoasInt = (newText) => {
    //     // Remover caracteres inválidos (ponto e vírgula)
    //     const totalPessoasLimpo = newText.replace(/[.,]/g, '');
    //     setTotalPessoas(totalPessoasLimpo);
    // };


    return (
        <View style={estilos.container} >
            <Text style={estilos.label}>{label}</Text>
            <TextInput style={estilos.TextInput}
                onChangeText={LimitandoCasasDecimaisValorTotalConta}
                value={valorTotalConta}
                inputMode="numeric"
                keyboardType="numeric"
                placeholder={placeholder}
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    value: state.value,
});
const mapDispatchToProps = {
    setValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(TextInputValorConta);




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
        borderRadius: 10,
    },
})