import React from "react";
//import { valorTotalConta } from "./TextInputValorConta";
import { valorTotalBebidas } from "./TextInputValorBebidas";
import { getValue } from "../../../selectors";

import { connect, useSelector } from "react-redux";

import { minhaVariavel } from "./TextInputValorConta";

const valorTotalConta = useSelector(state => state.valorTotalConta);
console.log(valorTotalConta)

const mapStateToProps = (state) => {
    return {
      value: getValue(state),
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setValue: (value) => dispatch(setValue(value)),
    };
  };
  

console.log("O valor da conta em CALCULOS é :", valorTotalConta);

export const exemplo = valorTotalConta*2 
console.log(exemplo)

// export const Calculos = {

// }


