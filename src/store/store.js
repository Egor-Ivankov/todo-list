import { configureStore } from "@reduxjs/toolkit";
import tasks from '../Features/Tasks/tasksSlice';
import filters from '../Features/Task-filters/filtersSlice';
import search from '../Features/Task-search/searchSlice';

const store = configureStore({
    reducer: {
        tasks,
        filters,
        search
    }
});

export default store;