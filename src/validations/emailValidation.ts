import { TFunction } from "i18next";

export interface EmailValidationErrors {
  email?: string;
}

export const emailValidation = (
  email: string,
  t: TFunction,
): EmailValidationErrors => {
  const errors: EmailValidationErrors = {};

  if (!email) {
    errors.email = t("validation.emailRequired");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = t("validation.emailInvalid");
  }

  return errors;
};
