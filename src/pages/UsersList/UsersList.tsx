import { useTranslation } from "react-i18next";

export const UsersList = () => {
  const { t } = useTranslation();
  return <h1>{t("users_list")}</h1>;
};
