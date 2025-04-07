import { LoginResponse, LoginAPIResponse } from "../../types";

export const mapLoginResponseFromAPI = (
  loginAPI: LoginAPIResponse,
): LoginResponse => ({
  accessToken: loginAPI.access_token,
  refreshToken: loginAPI.refresh_token,
  tokenType: loginAPI.token_type,
});
