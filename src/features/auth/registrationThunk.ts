import { createAsyncThunk } from "@reduxjs/toolkit";

import { registrationAPI } from "../../api";
import { RoutesEnum } from "../../enum";

export const registrationThunk = createAsyncThunk(
  RoutesEnum.REGISTRATION,
  async (
    {
      email,
      password,
      fullName,
    }: { email: string; password: string; fullName: string | null },
    { rejectWithValue },
  ) => {
    try {
      return await registrationAPI(email, password, fullName);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
