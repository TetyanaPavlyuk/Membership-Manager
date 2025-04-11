import { LoginResponse, LoginAPIResponse } from "../../types";

export const loginResponseMapper = (
  loginAPI: LoginAPIResponse,
): LoginResponse => ({
  accessToken: loginAPI.access_token,
  tokenType: loginAPI.token_type,
});
