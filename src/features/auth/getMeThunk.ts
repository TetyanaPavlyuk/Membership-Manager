import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMeAPI } from "../../api";
import { User } from "../../types";

export const getMeThunk = createAsyncThunk<User, void, { rejectValue: string }>(
  "/getMe",
  async (_, { rejectWithValue }) => {
    try {
      return await getMeAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
