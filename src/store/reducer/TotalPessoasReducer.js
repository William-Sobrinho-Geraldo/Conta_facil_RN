
const initialState = {
    totalPessoas: "5"
}

const totalPessoasReducer = (state = initialState, action) => {
    switch (action.type){
        case "ALTERA_QUANT_TOTAL_PESSOAS": 
            return{
                ...state,
                totalPessoas: action.payload
            };
            default:
                return state;
    }
}

export default totalPessoasReducer;



