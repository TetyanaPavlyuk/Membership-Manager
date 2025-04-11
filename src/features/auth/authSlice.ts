import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState, LoginResponse, User } from "../../types";
import { loginThunk, getMeThunk, registrationThunk } from "./";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.isLoading = false;
      state.errorMessage = null;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    },
    resetError(state) {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    // registration
    builder
      .addCase(registrationThunk.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(registrationThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
        state.isLoading = false;
      });

    // login
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(
        loginThunk.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          localStorage.setItem("access_token", action.payload.accessToken);
          state.isLoading = false;
        },
      )
      .addCase(loginThunk.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
        state.isLoading = false;
      });

    // getUser
    builder
      .addCase(getMeThunk.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getMeThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getMeThunk.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const { clearUser, setAuthLoading, setAuthError, resetError } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
