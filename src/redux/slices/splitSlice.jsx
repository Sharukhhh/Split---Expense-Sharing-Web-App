import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    expenses :[
        {
            createdBy : '',
            subject : '',
            totalAmount : 0,
            selectedUsers : [{
                name : '', balance : 0
            }],
        }
    ]
}


const splitSlice = createSlice({
    initialState,

    name : 'split',

    reducers : {
        addSplit : (state , action) => {
            const newSplit = action.payload;
            let selectedUsers = state.expenses[state.expenses.length - 1].selectedUsers;

            const n = selectedUsers.length + 1;

            const amountToPayPerUser = newSplit.totalAmount / n;

            newSplit.selectedUsers.forEach((user) => {
                user.balance += amountToPayPerUser;
            })

            state.expenses.push({
                createdBy : newSplit.createdBy,
                subject : newSplit.subject,
                totalAmount : newSplit.totalAmount,
                selectedUsers : newSplit.selectedUsers
            });
        }
    }
})


export const {addSplit} = splitSlice.actions;
export default splitSlice.reducer