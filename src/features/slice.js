import { createSlice } from "@reduxjs/toolkit";

export const RocketSlice = createSlice({
    name: 'data',
    initialState: {
        rockets: [],
        missions: []
    },
    reducers: {
        addRockets: (state,action)=>{
            state.rockets= [...state.rockets, action.payload]
        },
        addMissions: (state,action)=>{
            state.missions= [...state.missions, action.payload]
        }
    }
})

export const { addRockets,addMissions} = RocketSlice.actions;
export default RocketSlice.reducer;