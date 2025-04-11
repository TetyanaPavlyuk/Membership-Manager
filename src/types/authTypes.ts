import { User } from "./";

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  errorMessage: string | null;
}
