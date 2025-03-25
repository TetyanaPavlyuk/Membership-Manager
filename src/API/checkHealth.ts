import { axiosInstance } from "./axiosInstance.ts";

export interface HealthResponse {
  status_code: number;
  detail: string;
  result: string;
}

export const checkHealth = async (): Promise<HealthResponse> => {
  try {
    const response = await axiosInstance.get<HealthResponse>("/check-health");
    return response.data;
  } catch (error) {
    throw error;
  }
};
