import { createAsyncThunk } from "@reduxjs/toolkit";

import { dashboardAPI } from "../../api";
import { formatI18nError } from "../../utils";
import { RoutesEnum } from "../../enum";

export const dashboardThunk = createAsyncThunk(
  RoutesEnum.DASHBOARD,
  async (accessToken: string) => {
    try {
      return await dashboardAPI(accessToken);
    } catch (error) {
      throw formatI18nError("wrong", error);
    }
  },
);
