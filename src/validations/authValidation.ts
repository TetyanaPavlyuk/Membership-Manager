import { TFunction } from "i18next";

export interface AuthValidationErrors {
  email?: string;
  password?: string;
}

export const authValidation = (
  email: string,
  password: string,
  t: TFunction,
): AuthValidationErrors => {
  const errors: AuthValidationErrors = {};

  if (!email) {
    errors.email = t("validation.emailRequired");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = t("validation.emailInvalid");
  }

  if (!password) {
    errors.password = t("validation.passwordRequired");
  } else {
    if (password.length < 8) {
      errors.password = t("validation.passwordTooShort");
    } else if (!/[A-Z]/.test(password)) {
      errors.password = t("validation.passwordUppercase");
    } else if (!/[a-z]/.test(password)) {
      errors.password = t("validation.passwordLowercase");
    } else if (!/[0-9]/.test(password)) {
      errors.password = t("validation.passwordDigit");
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      errors.password = t("validation.passwordSpecialChar");
    }
  }

  return errors;
};
