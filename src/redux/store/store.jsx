import {configureStore} from '@reduxjs/toolkit';
import userAuthReducer from '../slices/userAuthSlice';
import userCollectionReducer from '../slices/userCollectionSlice';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userAuthPersistConfig = {
    key : 'login',
    storage
}

const userCollectionConfig = {
    key: 'userCollection',
    storage
}

const authPersistedReducer = persistReducer(userAuthPersistConfig , userAuthReducer);

const collectionPersistReducer = persistReducer(userCollectionConfig , userCollectionReducer);


export const store = configureStore({
    reducer : {
        login : authPersistedReducer,
        userCollection : collectionPersistReducer
    }
})

export const persistableStore = persistStore(store);