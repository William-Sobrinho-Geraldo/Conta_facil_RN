export const alteraValorInputText = (value) => {
    return {
      type: 'SET_MY_VARIABLE',
      payload: value
    };
  };

  export const alteraValorBebidas = (value) => {
    return {
      type: 'ALTERA_VALOR_BEBIDAS',
      payload: value
    };
  };

  export const alteraValorNaoAlcoolicos = (value) => {
    return {
      type: 'ALTERA_VALOR_NAO_ALCOOLICOS',
      payload: value
    };
  };

  export const alteraQuantTotalPessoas = (value) => {
    return {
      type: "ALTERA_QUANT_TOTAL_PESSOAS",
      payload: value
    }
  }

  export const alteraQuantPessoasQueBebem = (value) => {
    return {
      type: "ALTERA_QUANT_PESSOAS_QUE_BEBEM",
      payload: value
    }
  }
  