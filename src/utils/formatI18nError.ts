import i18next from "i18next";
import { isAxiosError } from "axios";

export const formatI18nError = (key: string, error: unknown): string => {
  if (isAxiosError(error)) {
    const detail = error.response?.data?.detail;
    return `${i18next.t(key)}: ${detail}`;
  } else if (error instanceof Error) {
    return `${i18next.t(key)}: ${error.message}`;
  } else {
    return `${i18next.t(key)}: ${i18next.t("unknownError")}`;
  }
};
