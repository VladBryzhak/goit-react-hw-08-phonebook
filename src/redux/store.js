import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/contactsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authSlice";
import persistStore from "redux-persist/es/persistStore";

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    contactsGroup: contactsReducer,
    auth: persistReducer(authConfig, authReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);