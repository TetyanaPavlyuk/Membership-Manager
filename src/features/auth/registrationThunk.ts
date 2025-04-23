import { createAsyncThunk } from "@reduxjs/toolkit";

import { registrationAPI } from "../../api";
import { RegistrationRequest } from "../../types";

export const registrationThunk = createAsyncThunk<
  string,
  RegistrationRequest,
  { rejectValue: string }
>(
  "/registration",
  async (registrationData: RegistrationRequest, { rejectWithValue }) => {
    try {
      return await registrationAPI(registrationData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
