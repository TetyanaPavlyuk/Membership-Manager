import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersAPI } from "../../api";
import { UsersListRequest, UsersListResponse } from "../../types";

export const getUsersThunk = createAsyncThunk<
  UsersListResponse,
  UsersListRequest,
  { rejectValue: string }
>("/users", async (usersData: UsersListRequest, { rejectWithValue }) => {
  try {
    return await getUsersAPI(usersData);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
