export interface HealthAPIResponse {
  status_code: number;
  detail: string;
  result: string;
}

export interface UserAPIResponse {
  id: number;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: string | null;
}

export interface LoginAPIResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface RegistrationAPIResponse {
  user: UserAPIResponse;
}
