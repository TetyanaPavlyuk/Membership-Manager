import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUsersAPI } from "../../api";
import { RoutesEnum } from "../../enum";

export const getUsersThunk = createAsyncThunk(
  RoutesEnum.USERS,
  async (
    { page, size }: { page: number; size: number },
    { rejectWithValue },
  ) => {
    try {
      return await getUsersAPI(page, size);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
