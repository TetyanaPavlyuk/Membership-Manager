import { axiosInstance } from "./";
import { formatI18nError } from "../utils";
import { LoginAPIResponse } from "../types";
import { mapLoginResponseFromAPI } from "../utils";
import { RoutesEnum } from "../enum";

export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post<LoginAPIResponse>(
      RoutesEnum.LOGIN,
      {
        email,
        password,
      },
    );
    return mapLoginResponseFromAPI(response.data);
  } catch (error) {
    throw formatI18nError("loginFailed", error);
  }
};
