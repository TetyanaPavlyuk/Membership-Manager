import { RoutesEnum } from "../routes/RoutesEnum.ts";
import "i18next";
import i18next from "i18next";

export const getNavLinks = () => [
  { to: RoutesEnum.HOME, text: i18next.t("home") },
  { to: RoutesEnum.ABOUT, text: i18next.t("about") },
  { to: RoutesEnum.USERS, text: i18next.t("users") },
  { to: RoutesEnum.COMPANIES, text: i18next.t("companies") },
];
