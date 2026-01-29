import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import jobGiverReducer from "./jobGiverSlice";

const store=configureStore({
    reducer:{
        auth: authReducer,
        jobSeeker: profileReducer,
        jobGiver: jobGiverReducer,
    }
})

export default store;