import { useTranslation } from "react-i18next";

export const UserProfile = () => {
  const { t } = useTranslation();
  return <h1>{t("user_profile")}</h1>;
};
