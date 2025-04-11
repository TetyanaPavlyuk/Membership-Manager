import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginAPI } from "../../api";
import { RoutesEnum } from "../../enum";

export const loginThunk = createAsyncThunk(
  RoutesEnum.LOGIN,
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      return await loginAPI(email, password);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
