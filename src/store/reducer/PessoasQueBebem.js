
const initialState = {
    pessoasQueBebem: "0.00"
}

const pessoasQueBebemReducer = (state = initialState, action) => {
    switch (action.type){
        case "ALTERA_QUANT_PESSOAS_QUE_BEBEM": 
            return{
                ...state,
                pessoasQueBebem: action.payload
            };
            default:
                return state;
    }
}

export default pessoasQueBebemReducer;
