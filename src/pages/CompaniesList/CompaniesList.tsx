import { useTranslation } from "react-i18next";

export const CompaniesList = () => {
  const { t } = useTranslation();
  return <h1>{t("companies_list")}</h1>;
};
