import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    loggedInUser: null,
    error: null,
}

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async (loginFormData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/api/users/login', loginFormData);
            return data
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout(state, action) {
            state.user = null;
        },
    },

    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.status = 'loading';

        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'succeeded';

        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload.message;
        }
    }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;