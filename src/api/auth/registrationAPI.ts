import { axiosInstance } from "../index.ts";
import { formatI18nError } from "../../utils";
import { RegistrationRequest } from "../../types";

export const registrationAPI = async (
  registrationData: RegistrationRequest,
) => {
  try {
    const response = await axiosInstance.post(
      "/registration",
      registrationData,
    );
    return response.data;
  } catch (error) {
    throw new Error(formatI18nError("registration.failed", error));
  }
};
