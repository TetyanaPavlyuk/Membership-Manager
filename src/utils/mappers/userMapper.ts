import { UserAPIResponse, User } from "../../types";

export const mapUserFromAPI = (apiUser: UserAPIResponse): User => ({
  id: apiUser.id,
  email: apiUser.email,
  isActive: apiUser.is_active,
  isSuperuser: apiUser.is_superuser,
  fullName: apiUser.full_name,
});
