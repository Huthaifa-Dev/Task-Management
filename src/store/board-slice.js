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
        },
        updateTaskInsideBoard(state, action) {
            const newTaskState = action.payload.state;
            const taskId = action.payload.id;
            console.log(taskId, newTaskState)
            const existingItem = state.tasks.find(item => item.id === taskId);
            console.log(existingItem)
            if (existingItem) {
                console.log(newTaskState)
                existingItem.state = newTaskState;
            }
            // console.log(state.tasks)
        },
        replaceBoard(state, action) {
            state.tasks = action.payload.tasks;
            state.changed = true;
        }
    }
});

export const boardActions = boardSlice.actions;
export default boardSlice.reducer;
