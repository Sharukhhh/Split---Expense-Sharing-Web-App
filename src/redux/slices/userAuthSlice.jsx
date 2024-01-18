import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userData : null
}

const userAuthSlice = createSlice({

    name : 'login',
    initialState,

    reducers : {
        setUserDataToStore : (state , action) => {
            state.userData = action.payload;
        },

        logout : (state) => {
            state.userData = null
        }
    }
}) 

export const {setUserDataToStore , logout} = userAuthSlice.actions;
export default userAuthSlice.reducer