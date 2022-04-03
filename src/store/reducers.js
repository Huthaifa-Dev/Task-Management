import { configureStore } from "@reduxjs/toolkit";
import boardReducer from './board-reducer';

const store = configureStore({
    reducer: {
        board: boardReducer,

    }
});

export default store;