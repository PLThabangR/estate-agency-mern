import {createSlice} from '@reduxjs/toolkit';

//initial state 
const initialState ={
    currentUser:null,
    error:null,
    loading:false

};
//user slice 
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signStart:(state)=>{
            state.loading = true;
        }
    ,
    signInSuccess: (state,action)=>{
        //PayLaod the data 
        state.currentUser = action.payload;
        state.loading=false;
        state.error=null;
    },
    signInFailure: (state,action)=>{
        state.error = action.payload;
        state.loading=false;
      
    },
    },
})

export const {signStart,signInSuccess,signInFailure}= userSlice.actions;

export default userSlice.reducer;