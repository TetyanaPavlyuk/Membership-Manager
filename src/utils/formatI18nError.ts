import i18next from "i18next";

export const formatI18nError = (key: string, error: unknown): Error => {
  if (error instanceof Error) {
    throw new Error(`${i18next.t(key)}: ${error.message}`);
  } else {
    throw new Error(`${i18next.t(key)}: ${i18next.t("unknownError")}`);
  }
};
