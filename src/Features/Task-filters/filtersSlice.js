import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isImportant: false
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersSet: (state, action) => {state.isImportant = action.payload}
    }
})

export const {filtersSet} = filterSlice.actions;
export default filterSlice.reducer;