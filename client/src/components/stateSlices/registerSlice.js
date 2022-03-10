import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    userRegistered: null,
    error: null,
}

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (registrationFormData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                '/api/users/register',
                registrationFormData
            )
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [registerUser.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.userRegistered = true;
            state.user = action.payload;

        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
        },
    },
});

export default registerSlice.reducer;