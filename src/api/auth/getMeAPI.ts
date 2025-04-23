import { axiosInstance } from "../index.ts";
import { formatI18nError } from "../../utils";
import { User } from "../../types";

export const getMeAPI = async () => {
  try {
    const response = await axiosInstance.get<User>("/me");
    return response.data;
  } catch (error) {
    throw new Error(formatI18nError("user.getFailed", error));
  }
};
