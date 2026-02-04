import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "jobSeeker",

    initialState:{
        id:null,
        firstname:null,
        lastname:null,
        userid:null,
        languagechosen:null,
        resume:null,
        skills:null,
        bio:null,
        highesteduinfo:null,
        experienceinfo:null,
        phonenum:null,
    },

    reducers:{
        setid:(state, action) => {
            state.id = action.payload;
        },

        setfirstname:(state, action) => {
            state.firstname = action.payload;
        },

        setlastname:(state, action) => {
            state.lastname = action.payload;
        },

        setuserid:(state, action) => {
            state.userid = action.payload;
        },

        setlanguagechosen:(state, action) => {
            state.languagechosen = action.payload;
        },

        setresume:(state, action) => {
            state.resume = action.payload;
        },

        setskills:(state, action) => {
            state.skills = action.payload;
        },

        setbio:(state, action) => {
            state.bio = action.payload;
        },

        sethighesteduinfo:(state, action) => {
            state.highesteduinfo = action.payload;
        },

        setexperienceinfo:(state, action) => {
            state.experienceinfo = action.payload;
        },

        setphonenum:(state, action) => {
            state.phonenum = action.payload;
        },

        clearProfile: (state) => {
            state.bio = null;
            state.experienceinfo = null;
            state.firstname = null;
            state.highesteduinfo = null;
            state.id = null;
            state.languagechosen = null;
            state.phonenum = null;
            state.lastname = null;
            state.resume = null;
            state.skills = null;
            state.userid = null;
        }
    }
});

export const {setbio, setexperienceinfo, setfirstname, sethighesteduinfo, setid,setlanguagechosen, setlastname, setphonenum, setresume, setskills, setuserid, clearProfile} = profileSlice.actions;
export default profileSlice.reducer;
export const profileSliceReducer = profileSlice.reducer;