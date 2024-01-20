import {createSlice} from '@reduxjs/toolkit';
import { formatDate } from '../../form-valdiation/validateSchema';

const initialState = {
    history : [{
        info : '',
        amount : 0,
        createdAt : null,
        createdBy : ''
    }]
}

const historySlice = createSlice ({
    name : 'history',
    initialState,

    reducers : {
        addToHistory : (state , action) => {
            const newHistory = action.payload;

            state.history.push({
                createdBy : newHistory.createdBy,
                info : newHistory.info,
                amount : newHistory.amount,
                createdAt : formatDate(Date.now())
            })
        }
    }
});

export const {addToHistory} = historySlice.actions;
export default historySlice.reducer;