import {createSlice} from '@reduxjs/toolkit';
import { addSplit } from './splitSlice';


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
    },

    // extraReducers : (builders) => {
    //     builders.addCase(addSplit , (state , action) => {
    //         const {subject , totalAmount , seletedUsers , loggedInUser} = action.payload;

    //         const amountToPayPerUser = Math.floor(totalAmount / (seletedUsers.length + 1))

    //         // Updating balance for each selectedUser
    //         seletedUsers.forEach((user) => {
    //             const exisitngUserIndex = state.userCollection.findIndex(
    //                 (collectionUser) => collectionUser.email === user.email
    //             );

    //             if(exisitngUserIndex !== -1){
    //                 state.userCollection[exisitngUserIndex].balance += amountToPayPerUser
    //             }
    //         })

    //     })
    // }
});

export const {addToCollection} = collectionSlice.actions;
export default collectionSlice.reducer;