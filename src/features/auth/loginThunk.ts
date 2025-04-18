import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginAPI } from "../../api";
import { LoginRequest, LoginResponse } from "../../types";

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("/login", async (loginData, { rejectWithValue }) => {
  try {
    return await loginAPI(loginData);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
