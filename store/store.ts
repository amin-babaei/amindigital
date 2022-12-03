import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'basket',
  storage,
};
const persistedReducer = persistReducer(persistConfig, basketReducer);
export const store = configureStore({
  reducer: {
    basket: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;