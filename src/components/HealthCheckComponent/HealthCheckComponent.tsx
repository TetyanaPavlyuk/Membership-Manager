import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { checkHealth, HealthResponse } from "../../API";
import { UniversalModal } from "../";

export const HealthCheckComponent = () => {
  const { t } = useTranslation();
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalText, setModalText] = useState<string>("");

  useEffect(() => {
    setModalTitle(t("checkHealth"));
    setModalText(t("checkingState"));

    const checkServerHealth = async () => {
      try {
        const healthResponse: HealthResponse = await checkHealth();
        setModalTitle(t("serverUp"));
        setModalText(healthResponse.result || t("serverUpText"));
      } catch (error) {
        setModalTitle(t("serverDown"));
        setModalText(t("serverDownText"));
      }
    };
    checkServerHealth();
  }, [t]);

  return (
    <UniversalModal
      buttonText={t("checkHealth")}
      modalTitle={modalTitle}
      modalText={modalText}
    />
  );
};
