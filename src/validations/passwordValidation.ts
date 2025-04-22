import { TFunction } from "i18next";

export const passwordValidation = (password: string, t: TFunction) => {
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
  ) {
    return t("validation.passwordRequirements");
  }
};
