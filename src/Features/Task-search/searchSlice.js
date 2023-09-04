import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchSetValue: (state, action) => { state.value = action.payload }
    }
});

export const { searchSetValue } = searchSlice.actions;
export default searchSlice.reducer;