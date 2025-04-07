import { axiosInstance } from "./";
import { formatI18nError } from "../utils";
import { LoginAPIResponse } from "../types";
import { mapLoginResponseFromAPI } from "../utils";
import { RoutesEnum } from "../enum";

export const loginSocialAPI = async (auth0Token: string) => {
  try {
    const response = await axiosInstance.post<LoginAPIResponse>(
      RoutesEnum.LOGIN_SOCIAL,
      { auth0_token: auth0Token },
    );
    return mapLoginResponseFromAPI(response.data);
  } catch (error) {
    throw formatI18nError("loginFailed", error);
  }
};
