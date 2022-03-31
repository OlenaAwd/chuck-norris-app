import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    loading: false,
    error: false,
    joke: null,
}

const jokesSlice = createSlice({
    name: "jokes",
    initialState,
    reducers: {
        setJokesLoading: (state) => {
            state.loading = true
        },
        setJokesSuccess: (state, { payload }) => {
            state.joke = payload
            state.loading = false
            state.hasErrors = false
        },
        setJokesError: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

// Actions generated from the slice
export const {
    setJokesLoading,
    setJokesSuccess,
    setJokesError,
} = jokesSlice.actions

// Selector
export const jokesSelector = (state) => state.joke

// Reducer
export default jokesSlice.reducer

// Asynchronous thunk action
export const getRandomJoke = (fetchJoke, params) => {
    return async (dispatch) => {
        dispatch(setJokesLoading())

        try {
            const data = await fetchJoke(params)
            dispatch(setJokesSuccess(data))
        } catch (error) {
            dispatch(setJokesError())
        }
    }
}