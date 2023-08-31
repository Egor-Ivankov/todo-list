import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../Features/Tasks/tasksSlice';
const store = configureStore({
    reducer: {taskReducer}
});

export default store;