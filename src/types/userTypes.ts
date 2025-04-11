import { UserShortAPIResponse } from "./apiTypes.ts";

export interface User {
  id: string;
  email: string;
  isActive: boolean;
  isSuperuser: boolean;
  fullName: string | null;
}

export interface UsersListState {
  users: UserShortAPIResponse[];
  prevPage: string | null;
  nextPage: string | null;
  pagesCount: number;
  usersCount: number;
  isLoading: boolean;
  errorMessage: string | null;
}
