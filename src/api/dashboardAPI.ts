import { axiosInstance } from "./";
import { formatI18nError } from "../utils";
import { UserAPIResponse } from "../types";
import { mapUserFromAPI } from "../utils";

export const dashboardAPI = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get<UserAPIResponse>("/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return mapUserFromAPI(response.data);
  } catch (error) {
    throw formatI18nError("userInfoFailed", error);
  }
};
