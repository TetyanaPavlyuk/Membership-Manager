import { axiosInstance } from "./";
import { formatI18nError } from "../utils";

export const logoutAPI = async (accessToken: string) => {
  try {
    const response = await axiosInstance.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw formatI18nError("logoutFailed", error);
  }
};
