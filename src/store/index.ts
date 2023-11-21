import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import quotesSlice from "./features/quotes-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { quoteApi } from "./services/quotesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
    reducer:{
        auth: authSlice,
        quotes: quotesSlice,
        [quoteApi.reducerPath] : quoteApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quoteApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = ()=> useDispatch<AppDispatch>();

export const  useAppSelector : TypedUseSelectorHook<RootState> = useSelector