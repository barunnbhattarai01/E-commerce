import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./tosilces";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Key } from "lucide-react";


//persistCoonfig

const persistConfig ={
   key:'root',    // a name for storage
   storage,
};

//creating the persistedd reducer
const persistedReducer =  persistReducer(persistConfig,Cartreducer);   //persistReducer help to wrap with catalog with auto-save/load funcatonality

//configure the stire with persisted reducer
export const store = configureStore({
  reducer: {
    card: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>         //redux only want simple data so when you give non serizalble value you have to say ingore them
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register'],
      },
    }),
});



export const presistor =persistStore(store); 







//serizable value is like simple number ,string ,object ,array
//non serizalble value is like function,class,promise 