import { createSlice } from "@reduxjs/toolkit";

const jobGiverSlice = createSlice({
    name : "jobGiver",
    initialState:{
        id:null,
        userId:null,
        aboutCompany:null,
        companyName:null,
        contactEmail:null,
        description:null,
        fullName:null,
        jobTitle:null,
        location:null,
        specialization:null,
    },
    reducers:{
        setId:(state, action) => {
            state.id = action.payload;
        },

        setUserId:(state,action) => {
            state.userId = action.payload;
        },

        setAboutCompany:(state, action) =>{
            state.aboutCompany = action.payload;
        },

        setCompanyName:(state,action) => {
            state.companyName = action.payload;
        },

        setContactEmail:(state, action) => {
            state.contactEmail = action.payload;
        },

        setDescription:(state, action) => {
            state.description = action.payload;
        },

        setFullName:(state, action) => {
            state.fullName = action.payload;
        },

        setJobTitle:(state, action) => {
            state.jobTitle = action.payload;
        },

        setLocation:(state, action) => {
            state.location = action.payload;
        },

        setSpecialization:(state, action) => {
            state.specialization = action.payload;
        },

        clearProfile: (state) => {
            state.id = null;
            state.userId = null;
            state.aboutCompany = null;
            state.companyName = null;
            state.contactEmail = null;
            state.description = null;
            state.fullName = null;
            state.location = null;
            state.jobTitle = null;
            state.specialization = null;
        }
        
    }
})
export const {setAboutCompany,setContactEmail,setJobTitle,setDescription,setCompanyName,setFullName,setId,setLocation,setSpecialization,setUserId,clearProfile} = jobGiverSlice.actions;
export default jobGiverSlice.reducer;
export const jobGiverSliceReducer = jobGiverSlice.reducer;

