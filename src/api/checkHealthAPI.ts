import { axiosInstance } from "./";
import { formatI18nError } from "../utils";
import { HealthAPIResponse } from "../types";

export const checkHealthAPI = async (): Promise<HealthAPIResponse> => {
  try {
    const response =
      await axiosInstance.get<HealthAPIResponse>("/check-health");
    return response.data;
  } catch (error) {
    throw formatI18nError("checkHealthFailed", error);
  }
};
