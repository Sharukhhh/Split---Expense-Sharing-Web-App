import {createSlice} from '@reduxjs/toolkit';
import { formatDate } from '../../form-valdiation/validateSchema';

const initialState = {
    notifications : [
        {
            message: '',
            subMessage : '',
            createdAt : null,
            recievers: [],
        }
    ]
}

const notificationslice = createSlice({

    name : 'messages',
    initialState,

    reducers : {
        addNotification : (state , action) => {
            const newNotification = action.payload;

            state.notifications.push({
                message : newNotification.message,
                subMessage : newNotification.subMessage,
                createdAt : formatDate(Date.now()),
                recievers: newNotification.recievers,
            })
        }
    }
});


export const {addNotification} = notificationslice.actions;
export default notificationslice.reducer;