
const initialState = {
    valorBebidas: "0.00"
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

