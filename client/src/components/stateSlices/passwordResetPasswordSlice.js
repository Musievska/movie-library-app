import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    passwordReset: null,
    error: null
}

export const sendNewPassword = createAsyncThunk(
    'passwordReset/sendNewPassword',
    async ({ password, token }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/account/password/reset/${token}`, { password })
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const passwordResetSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers: {},
    extraReducers: {
        [sendNewPassword.pending]: (state, action) => {
            state.status = 'loading';
        },
        [sendNewPassword.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.passwordReset = true;
        },
        [sendNewPassword.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
        }
    }
});

export default passwordResetSlice.reducer;