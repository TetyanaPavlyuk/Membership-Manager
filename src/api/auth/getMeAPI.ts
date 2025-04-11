import { axiosInstance } from "../index.ts";
import { formatI18nError, userMapper } from "../../utils";
import { UserAPIResponse } from "../../types";
import { APIRoutesEnum } from "../../enum";

export const getMeAPI = async () => {
  try {
    const response = await axiosInstance.get<UserAPIResponse>(APIRoutesEnum.ME);
    return userMapper(response.data);
  } catch (error) {
    throw formatI18nError("user.getFailed", error);
  }
};
