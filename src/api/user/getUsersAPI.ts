import { axiosInstance } from "../axios";
import { formatI18nError } from "../../utils";
import { UsersListResponse, UsersListRequest } from "../../types";

export const getUsersAPI = async (usersData: UsersListRequest) => {
  try {
    const response = await axiosInstance.get<UsersListResponse>("/users", {
      params: usersData,
    });
    return response.data;
  } catch (error) {
    throw new Error(formatI18nError("user.listFailed", error));
  }
};
