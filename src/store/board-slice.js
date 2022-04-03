import { createSlice } from "@reduxjs/toolkit";

const initialBoardState = {

}

const boardSlice = createSlice({
    name: 'board',
    initialState: initialBoardState,
    reducers: {
        addTaskToBoard(state, action) {

        },
        updateTaskInsideBoard(state, action) {

        },
        replaceBoard(state, action) {

        }
    }
});

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
