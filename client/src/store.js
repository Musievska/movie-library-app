import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './components/stateSlices/registerSlice';

export default configureStore({
    reducer: {
        register: registerReducer,

    }
}); 