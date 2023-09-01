import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    tasks: [
        { id: nanoid(), value: 'Task 1', important: false },
        { id: nanoid(), value: 'Task 2', important: false },
        { id: nanoid(), value: 'Task 3', important: false },
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
        },
        taskSetImportant: (state, action) => {
            const index = state.tasks.findIndex(item => item.id === action.payload);
            const old = state.tasks[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...state.tasks.slice(0, index), newItem, ...state.tasks.slice(index + 1)];
            state.tasks = newArr;
        }
    }
});

export const { tasksCreated, tasksDeleted, taskSetImportant } = tasksSlice.actions;
export default tasksSlice.reducer;