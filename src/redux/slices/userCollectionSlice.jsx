import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userCollection : []
}

const collectionSlice = createSlice({

    name : 'userCollection',
    initialState,

    reducers : {

        addToCollection : (state , action) => {
            state.userCollection.push(action.payload);
        },
    }
});

export const {addToCollection} = collectionSlice.actions;
export default collectionSlice.reducer;