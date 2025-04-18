export interface UserUpdate {
  full_name: string;
}

export interface UserShort extends UserUpdate {
  email: string;
}

export interface User extends UserShort {
  id: string;
  is_active: boolean;
  is_superuser: boolean;
}

export interface UsersListResponse {
  users: UserShort[];
  pages_count: number;
  users_count: number;
}

export interface UsersListRequest {
  page: number;
  limit: number;
}
