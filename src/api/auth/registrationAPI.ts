import { axiosInstance } from "../index.ts";
import { RegistrationAPIResponse } from "../../types";
import { APIRoutesEnum } from "../../enum";
import { formatI18nError, userMapper } from "../../utils";

export const registrationAPI = async (
  email: string,
  password: string,
  fullName: string | null = null,
) => {
  try {
    const response = await axiosInstance.post<RegistrationAPIResponse>(
      APIRoutesEnum.REGISTRATION,
      { email, password, full_name: fullName },
    );
    return userMapper(response.data.user);
  } catch (error) {
    throw formatI18nError("registration.failed", error);
  }
};
