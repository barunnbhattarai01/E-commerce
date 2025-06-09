import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./tosilces";

export const store =configureStore({
    reducer:Cartreducer
});