import { configureStore } from "@reduxjs/toolkit";
import tasks from '../Features/Tasks/tasksSlice';
const store = configureStore({
    reducer: {
        tasks
    }
});

export default store;