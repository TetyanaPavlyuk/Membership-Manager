export interface UserAPIResponse {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: string | null;
}

export interface UserShortAPIResponse {
  email: string;
  full_name: string;
}

export interface LoginAPIResponse {
  access_token: string;
  token_type: string;
}

export interface RegistrationAPIResponse {
  user: UserAPIResponse;
}

export interface UsersAPIResponse {
  prev_page: string | null;
  next_page: string | null;
  pages_count: number;
  users_count: number;
  users: UserShortAPIResponse[];
}
