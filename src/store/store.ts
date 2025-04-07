import { configureStore } from "@reduxjs/toolkit";
import { userReducer, authReducer } from "../features";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
