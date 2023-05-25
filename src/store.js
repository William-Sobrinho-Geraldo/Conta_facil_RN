
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import valorTotalContaSlice from './reducers';

const store = configureStore({
    reducer: {
        valorTotalConta: valorTotalContaSlice
    },
});

export default store;

