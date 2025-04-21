import { TFunction } from "i18next";

export interface PasswordValidationErrors {
  password?: string;
}

export const passwordValidation = (
  password: string,
  t: TFunction,
): PasswordValidationErrors => {
  const errors: PasswordValidationErrors = {};

  if (!password) {
    errors.password = t("validation.passwordRequired");
  } else {
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[^A-Za-z0-9]/.test(password)
    ) {
      errors.password = t("validation.passwordRequirements");
    }
  }

  return errors;
};
