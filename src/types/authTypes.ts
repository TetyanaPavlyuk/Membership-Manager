export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface AuthState {
  user: any | null;
}
