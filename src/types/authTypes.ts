import { User } from "./";

export interface AuthState {
  user: User | null;
  authInitialize: boolean;
  isLoading: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface RegistrationRequest extends LoginRequest {
  full_name: string | null;
}
