import { TFunction } from "i18next";

export const emailValidation = (email: string, t: TFunction) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return t("validation.emailInvalid");
  }
};
