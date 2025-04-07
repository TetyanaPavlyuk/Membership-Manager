import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginAPI, loginSocialAPI } from "../../api";
import { formatI18nError } from "../../utils";
import { RoutesEnum } from "../../enum";

export const loginThunk = createAsyncThunk(
  RoutesEnum.LOGIN,
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { accessToken } = await loginAPI(email, password);
      localStorage.setItem("access_token", accessToken);
      return accessToken;
    } catch (error) {
      throw formatI18nError("wrong", error);
    }
  },
);

export const loginSocialThunk = createAsyncThunk(
  RoutesEnum.LOGIN_SOCIAL,
  async ({ auth0Token }: { auth0Token: string }) => {
    try {
      const { accessToken } = await loginSocialAPI(auth0Token);
      localStorage.setItem("access_token", accessToken);
      return accessToken;
    } catch (error) {
      throw formatI18nError("wrong", error);
    }
  },
);
