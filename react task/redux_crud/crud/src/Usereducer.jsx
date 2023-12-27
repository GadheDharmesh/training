
import mydata from './Data'
import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice(
    {
        name:"users",
        initialState:mydata,
        reducers:{
            adduser:(state,action)=>{
                console.log(state)
                console.log(action)
                console.log(action.payload)
            }
        }
    }
) 

export default userslice.reducer;