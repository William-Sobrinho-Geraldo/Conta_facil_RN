
import { configureStore } from '@reduxjs/toolkit';
import valorTotalContaReducer from './reducer/ValorTotalContaReducer';
import valorBebidasReducer from '../store/reducer/ValorBebidasReducer';
import totalPessoasReducer from './reducer/TotalPessoasReducer';
import pessoasQueBebemReducer from './reducer/PessoasQueBebem';
import valorNaoAlcoolicosReducer from './reducer/ValorNaoAlcoolicos';

const store = configureStore({
    reducer: {
        valorTotalContaStore: valorTotalContaReducer,
        valorBebidasStore: valorBebidasReducer,
        valorNaoAlcoolicosStore: valorNaoAlcoolicosReducer,
        totalPessoasStore: totalPessoasReducer,
        pessoasQueBebemStore: pessoasQueBebemReducer,
    
    },
});

export default store;

