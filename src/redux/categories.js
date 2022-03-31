import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    error: false,
    categories: [],
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state) => {
            state.loading = true
        },
        setCategoriesSuccess: (state, { payload }) => {
            state.categories = payload
            state.loading = false
            state.error = false
        },
        setCategoriesError: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

// Actions generated from the slice
export const {
    setCategories,
    setCategoriesSuccess,
    setCategoriesError,
} = categoriesSlice.actions

// Selector
export const categoriesSelector = (state) => state.categories

// Reducer
export default categoriesSlice.reducer

// Asynchronous thunk action
export function getCategories(fetchCategories) {
    return async (dispatch) => {
        dispatch(setCategories())

        try {
            const data = await fetchCategories()
            dispatch(setCategoriesSuccess(data))
        } catch (error) {
            dispatch(setCategoriesError())
        }
    }
}