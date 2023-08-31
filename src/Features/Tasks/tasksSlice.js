import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {id: nanoid(), value: 'Task 1'},
    {id: nanoid(), value: 'Task 2'},
    {id: nanoid(), value: 'Task 3'},
]

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        tasksCreated: (state, action) => {
            state.tasks.push(action.payload);
        },
        tasksDeleted: (state, action) => {
            state.tasks.filter(tasks => tasks.id !== action.payload);
        }
    }
});
const {actions, reducer} = tasksSlice;
export default reducer;
export const { tasksCreated, tasksDeleted } = actions;
export const tasks = tasksSlice.getInitialState();