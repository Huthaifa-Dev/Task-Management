import { createSlice } from "@reduxjs/toolkit";

const initialBoardState = {
    tasks: [],
    changed: false,
}

const boardSlice = createSlice({
    name: 'board',
    initialState: initialBoardState,
    reducers: {
        addTaskToBoard(state, action) {
            state.tasks.push(action.payload.task);
            state.changed = true;
        },
        updateTaskInsideBoard(state, action) {
            state.changed = true;
            const newTaskState = action.payload.state;
            const taskId = action.payload.id;
            const existingItem = state.tasks.find(item => item.id === taskId);
            if (existingItem) {
                existingItem.state = newTaskState;
            }
        },
        replaceBoard(state, action) {
            state.tasks = action.payload.tasks;
        }
    }
});

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
