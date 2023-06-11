import { createSlice } from '@reduxjs/toolkit'

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        value: null
    },
    reducers: {
        showToast: (state, action) => {
            state.value = action.payload
        },
        showSucess: (state, action) => {
            state.value = {
                severity: 'success',
                summary: 'Success',
                detail: action.payload,
            }
        },
        showError: (state, action) => {
            state.value = {
                severity: 'error',
                summary: '',
                detail: 'teste'
            }
        }
    }
})

export const { showToast, showSucess, showError } = toastSlice.actions

export default toastSlice.reducer