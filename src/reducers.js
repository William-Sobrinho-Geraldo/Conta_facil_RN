import { SET_VALUE } from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const estadoInicialValorTotalConta = {
    value: '',
};

const valorTotalContaSlice = createSlice({
    name: 'valorTotalConta',
    initialState: 12,
})
// const reducer = (state = inicitalState, action) => {
//     switch(action.type){
//         case SET_VALUE:
//             return{
//                 ...state,
//                 value:action.payload,
//             };
//             default:
//                 return state;
//     }
// };

export default valorTotalContaSlice.reducer;

