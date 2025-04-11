import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMeAPI } from "../../api";
import { RoutesEnum } from "../../enum";

export const getMeThunk = createAsyncThunk(
  RoutesEnum.ME,
  async (_, { rejectWithValue }) => {
    try {
      return await getMeAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
