import { configureStore } from '@reduxjs/toolkit';

import useReducer from './reducer/useReducer';

export const Store = configureStore({
    reducer: {
        user:useReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>