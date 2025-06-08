import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    card:[{id:1,product:"shoes"}]
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
   }



})

export const {addtochart,removetochart}=slice.actions
export default slice.reducer;

