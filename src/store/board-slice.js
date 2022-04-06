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
            const NewTask = action.payload;
            state.changed = true;
            state.tasks.push({
                id: `t${state.tasks.length + 1}`,
                ...NewTask
            });

        },
        deleteTaskFromBoard(state, action) {
            const taskToBeDeleteID = action.payload;
            const existingItem = state.tasks.find(item => item.id === taskToBeDeleteID);
            state.changed = true;
            if (existingItem) {
                state.tasks = state.tasks.filter(item => item.id !== taskToBeDeleteID);
            }
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
