
const initialState = {
    valorTotalConta: "0.00"
}

const valorTotalContaReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_MY_VARIABLE": 
            return{
                ...state,
                valorTotalConta: action.payload
            };
            default:
                return state;
    }

}


export default valorTotalContaReducer;

