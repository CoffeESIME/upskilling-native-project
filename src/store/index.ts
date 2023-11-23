import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth-slice';
import quotesSlice from './features/quotes-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { quoteApi } from './services/quotesApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], 
};

const rootReducer = combineReducers({
  auth: authSlice,
  quotes: quotesSlice,
  [quoteApi.reducerPath]: quoteApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(quoteApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
