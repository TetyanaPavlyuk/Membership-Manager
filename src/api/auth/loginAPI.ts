import { axiosInstance } from "../index.ts";
import { formatI18nError } from "../../utils";
import { LoginResponse, LoginRequest } from "../../types";

export const loginAPI = async (loginData: LoginRequest) => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/login",
      loginData,
    );
    return response.data;
  } catch (error) {
    throw new Error(formatI18nError("login.failed", error));
  }
};
