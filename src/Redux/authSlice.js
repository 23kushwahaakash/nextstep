import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        userId:null,
        userName:null,
        userEmail:null,
        userRole:null,
        accessToken:null,
        refreshToken:null
    },
    reducers:{
        setUserId:(state, action)=>{
            state.userId=action.payload;
        },
        setUserName:(state, action)=>{
            state.userName=action.payload;
        },
        setUserEmail:(state, action)=>{
            state.userEmail=action.payload;
        },
        setUserRole:(state, action)=>{
            state.userRole=action.payload;
        },
        setAccessToken:(state, action)=>{
            state.accessToken=action.payload;
        },
        setRefreshToken:(state, action)=>{
            state.refreshToken=action.payload;
        },
    }
});

export const {setUserId,setUserName,setUserEmail,setUserRole,setAccessToken,setRefreshToken} = authSlice.actions;
export default authSlice.reducer;
export const authSliceReducer = authSlice.reducer;