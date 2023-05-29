
import { configureStore } from '@reduxjs/toolkit';
import valorTotalContaReducer from './reducer/ValorTotalContaReducer';
import valorBebidasReducer from '../store/reducer/ValorBebidasReducer';

const store = configureStore({
    reducer: {
        valorTotalContaStore: valorTotalContaReducer,
        valorBebidasStore: valorBebidasReducer,
    },
});

export default store;

