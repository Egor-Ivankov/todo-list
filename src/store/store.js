import { configureStore } from "@reduxjs/toolkit";
import tasks from '../Features/Tasks/tasksSlice';
import filters from '../Features/Task-filters/filtersSlice';
const store = configureStore({
    reducer: {
        tasks,
        filters
    }
});

export default store;