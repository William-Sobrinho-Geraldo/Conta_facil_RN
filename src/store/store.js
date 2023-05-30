
import { configureStore } from '@reduxjs/toolkit';
import valorTotalContaReducer from './reducer/ValorTotalContaReducer';
import valorBebidasReducer from '../store/reducer/ValorBebidasReducer';
import totalPessoasReducer from './reducer/TotalPessoasReducer';
import pessoasQueBebemReducer from './reducer/PessoasQueBebem';

const store = configureStore({
    reducer: {
        valorTotalContaStore: valorTotalContaReducer,
        valorBebidasStore: valorBebidasReducer,
        totalPessoasStore: totalPessoasReducer,
        pessoasQueBebemStore: pessoasQueBebemReducer,
    },
});

export default store;

