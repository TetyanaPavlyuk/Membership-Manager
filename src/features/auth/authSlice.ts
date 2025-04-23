import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState, User } from "../../types";
import { getMeThunk } from "./";

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export const { clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
