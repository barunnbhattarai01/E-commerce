import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./tosilces";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Key } from "lucide-react";


//persistCoonfig

const persistConfig ={
   key:'root',
   storage,
};

//creating the persistedd reducer
const persistedReducer =  persistReducer(persistConfig,Cartreducer);

//configure the stire with persisted reducer
export const store = configureStore({
   reducer:{
      card:persistedReducer, 
   }
})


export const presistor =persistStore(store);