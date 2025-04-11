import { axiosInstance } from "../axios";
import { APIRoutesEnum } from "../../enum";
import { formatI18nError } from "../../utils";
import { UsersAPIResponse } from "../../types";

export const getUsersAPI = async (page: number, size: number) => {
  try {
    const response = await axiosInstance.get<UsersAPIResponse>(
      APIRoutesEnum.USERS,
      { params: { page, size } },
    );
    return response.data;
  } catch (error) {
    throw formatI18nError("user.listFailed", error);
  }
};
