import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';


export const store = configureStore({
    reducer:{user: userReducer},
    //Add the middleware to prevent browser errors
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    

})