import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    card:[]
}

export const slice=createSlice({
   name:"card",
   initialState,
   reducers:{
         addtochart:(state,action)=>{
            const card={
                id:nanoid(),
                text:action.payload  //payload is the actual data we send to reducer
            }

            state.card.push(card)
         },
         removetochart:(state,action)=>{
            state.card=state.card.filter((remove)=>remove.id!==action.payload)


         },
         loadFromlocalStorage:(state,action)=>{
            state.card= action.payload;
         }
   }



})

export const {addtochart,removetochart,loadFromlocalStorage}=slice.actions
export default slice.reducer;

