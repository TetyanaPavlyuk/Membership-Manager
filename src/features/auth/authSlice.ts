import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState, LoginResponse, User } from "../../types";
import { loginThunk, getMeThunk } from "./";

const initialState: AuthState = {
  user: null,
  authInitialize: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.isLoading = false;
      state.authInitialize = false;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        loginThunk.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          localStorage.setItem("access_token", action.payload.access_token);
          state.isLoading = false;
        },
      )
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      });

    builder
      .addCase(getMeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.authInitialize = true;
        state.isLoading = false;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.authInitialize = true;
      });
  },
});

export const { clearUser, setAuthLoading } = authSlice.actions;
export const authReducer = authSlice.reducer;
