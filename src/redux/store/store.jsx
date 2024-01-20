import {configureStore} from '@reduxjs/toolkit';
import userAuthReducer from '../slices/userAuthSlice';
import userCollectionReducer from '../slices/userCollectionSlice';
import splitReducer from '../slices/splitSlice';
import notficationReducer from '../slices/notificationSlice';
import historyReducer from '../slices/historySlice';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userAuthPersistConfig = {
    key : 'login',
    storage
}

const userCollectionConfig = {
    key: 'collection',
    storage
}

const splitDataConfig = {
    key : 'split',
    storage
}

const notificationConfig = {
    key : 'messages',
    storage
}

const historyConfig = {
    key : 'history',
    storage
}

const authPersistedReducer = persistReducer(userAuthPersistConfig , userAuthReducer);

const collectionPersistReducer = persistReducer(userCollectionConfig , userCollectionReducer);

const splitPersistReducer = persistReducer(splitDataConfig , splitReducer);

const notificationPersistReducer = persistReducer(notificationConfig , notficationReducer);

const historyPersistReducer = persistReducer(historyConfig , historyReducer);


export const store = configureStore({
    reducer : {
        login : authPersistedReducer,
        collection : collectionPersistReducer,
        split : splitPersistReducer,
        messages : notificationPersistReducer,
        history : historyPersistReducer

        // login : userAuthReducer,
        // collection : userCollectionReducer,
        // split : splitReducer,
        // messages : notficationReducer,
        // history : historyReducer
    }
})

export const persistableStore = persistStore(store);