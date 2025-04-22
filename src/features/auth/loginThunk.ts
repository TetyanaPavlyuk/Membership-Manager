import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginAPI } from "../../api";
import { LoginRequest, LoginResponse } from "../../types";

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("/login", async (loginData, { rejectWithValue }) => {
  try {
    const response = await loginAPI(loginData);
    localStorage.setItem("access_token", response.access_token);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
