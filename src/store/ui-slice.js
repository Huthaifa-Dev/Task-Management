import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    formIsVisible: false,
    notification: {
        status: null,
        title: null,
        message: null
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggleForm(state) {
            state.formIsVisible = !state.formIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

