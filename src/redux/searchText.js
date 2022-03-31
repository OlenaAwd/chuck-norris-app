import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    searchText: "",
    textTooShort: false,
}

const searchTextSlice = createSlice({
    name: "searchText",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload
            if (action.payload.length > 0 && action.payload.length < 3) {
                state.textTooShort = true
            } else {
                state.textTooShort = false
            }
        },
    },
})

// Action generated from the slice
export const { setSearchText } = searchTextSlice.actions

// Selector
export const searchTextSelector = (state) => state.searchText

// Reducer
export default searchTextSlice.reducer