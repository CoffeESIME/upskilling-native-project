import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import questionsSlice from "./slices/questions-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        questions: questionsSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = ()=> useDispatch<AppDispatch>();

export const  useAppSelector : TypedUseSelectorHook<RootState> = useSelector