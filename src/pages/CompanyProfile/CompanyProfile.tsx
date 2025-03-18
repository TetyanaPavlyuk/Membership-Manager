import { useTranslation } from "react-i18next";

export const CompanyProfile = () => {
  const { t } = useTranslation();
  return <h1>{t("company_profile")}</h1>;
};
