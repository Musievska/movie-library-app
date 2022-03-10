import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './components/stateSlices/registerSlice';
import loginReducer from './components/stateSlices/loginSlice';

const loggedinUserFromStorages = localStorage.getItem('loggedinUser')
    ? JSON.parse(localStorage.getItem('loggedinUser'))
    : null

const preloadedState = {
    login: {
        loggedinUser: loggedinUserFromStorages
    }
}

export default configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer

    },
    preloadedState
}); 