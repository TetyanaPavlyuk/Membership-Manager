import { axiosInstance } from "../index.ts";
import { formatI18nError, loginResponseMapper } from "../../utils";
import { LoginAPIResponse } from "../../types";
import { APIRoutesEnum } from "../../enum";

export const loginAPI = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post<LoginAPIResponse>(
      APIRoutesEnum.LOGIN,
      { email, password },
    );
    return loginResponseMapper(response.data);
  } catch (error) {
    throw formatI18nError("login.failed", error);
  }
};
