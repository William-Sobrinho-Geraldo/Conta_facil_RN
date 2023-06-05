const initialState = {
    valorNaoAlcoolicos: "101.67"
}

const valorNaoAlcoolicosReducer = (state = initialState, action) => {
    switch (action.type){
        case "ALTERA_VALOR_NAO_ALCOOLICOS": 
            return{
                ...state,
                valorNaoAlcoolicos: action.payload
            };
            default:
                return state;
    }
}

export default valorNaoAlcoolicosReducer;