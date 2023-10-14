import {configureStore,combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
//import redux-persist to add to local storage
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer= combineReducers({
    user:userReducer
});
const persistConfig ={
    key:'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    //reducer:{user: userReducer},
    reducer:persistedReducer,
    //Add the middleware to prevent browser errors
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    

})

//Export the store persistor this gonna make the store to persist
export const persistor = persistStore(store)