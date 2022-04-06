import { configureStore } from "@reduxjs/toolkit";
import boardReducer from './board-slice';
import uiReducer from './ui-slice';

const store = configureStore({
    reducer: {
        board: boardReducer,
        ui: uiReducer
    }
});

export default store;