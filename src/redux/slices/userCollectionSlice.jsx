import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userCollection : []
}

const collectionSlice = createSlice({

    name : 'collection',
    initialState,

    reducers : {

        addToCollection : (state , action) => {

            const newUser = action.payload;
            const existingUser = state.userCollection.some(user => user.email === newUser.email || user.mobile === newUser.mobile);

            if(!existingUser){
                state.userCollection.push(newUser);
            } else {
                console.log('Existing user');
            }
        },
    }
});

export const {addToCollection} = collectionSlice.actions;
export default collectionSlice.reducer;