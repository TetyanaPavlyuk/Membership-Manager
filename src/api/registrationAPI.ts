import { axiosInstance } from "./";
import { formatI18nError } from "../utils";
import { RegistrationAPIResponse } from "../types";

export const registrationAPI = async (
  email: string,
  password: string,
  full_name: string | null = null,
) => {
  try {
    const response = await axiosInstance.post<RegistrationAPIResponse>(
      "/registration",
      { email, password, full_name },
    );
    return response.data;
  } catch (error) {
    throw formatI18nError("registrationFailed", error);
  }
};
