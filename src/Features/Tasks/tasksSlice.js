import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    tasks: [
        {id: nanoid(), value: 'Task 1'},
        {id: nanoid(), value: 'Task 2'},
        {id: nanoid(), value: 'Task 3'},
    ]
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasksCreated: (state, action) => {
            state.tasks.push(action.payload);
        },
        tasksDeleted: (state, action) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        }
    }   
});

export const { tasksCreated, tasksDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;