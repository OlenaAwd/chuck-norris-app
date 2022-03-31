import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    category: null,
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
    },
})

// Action generated from the slice
export const { setCategory } = categorySlice.actions

// Selector
export const categorySelector = (state) => state.category

// Reducer
export default categorySlice.reducer