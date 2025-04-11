import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UsersAPIResponse, UsersListState } from "../../types";
import { getUsersThunk } from "./getUsersThunk.ts";

const initialState: UsersListState = {
  users: [],
  prevPage: null,
  nextPage: null,
  pagesCount: 0,
  usersCount: 0,
  isLoading: false,
  errorMessage: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersAPIResponse>) => {
      state.users = action.payload.users;
    },
    setUsersLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUsersError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (state, action: PayloadAction<UsersAPIResponse>) => {
          state.users = action.payload.users;
          state.prevPage = action.payload.prev_page;
          state.nextPage = action.payload.next_page;
          state.pagesCount = action.payload.pages_count;
          state.isLoading = false;
        },
      )
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const { setUsers, setUsersLoading, setUsersError } = userSlice.actions;
export const userReducer = userSlice.reducer;
