import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    emailSent: null,
    error: null
}

export const sendPasswordResetEmail = createAsyncThunk(
    'passwordReset/sendPasswordResetEmail',
    async (passwordResetEmail, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                '/account/password/forgot',
                passwordResetEmail
            )
            return data
        } catch (err) {
            return rejectWithValue(err.response.data);
        
        }
    }
);

export const passwordResetSlice = createSlice({
    name: 'passwordResetSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [sendPasswordResetEmail.pending]: (state, action) => {
            state.status = 'loading';
        },
        [sendPasswordResetEmail.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.emailSent = action.payload;
            state.error = null;
        },
        [sendPasswordResetEmail.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
            state.emailSent = null;
        }
    }
});

export default passwordResetSlice.reducer;