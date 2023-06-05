const initialState = {
    valorBebidas: "101.67"
}

const valorBebidasReducer = (state = initialState, action) => {
    switch (action.type){
        case "ALTERA_VALOR_BEBIDAS": 
            return{
                ...state,
                valorBebidas: action.payload
            };
            default:
                return state;
    }
}

export default valorBebidasReducer;

