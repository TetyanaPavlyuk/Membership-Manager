import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { checkHealth, HealthResponse } from "../../API";
import { UniversalModal } from "../";

export const HealthCheckComponent = () => {
  const { t } = useTranslation();
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalText, setModalText] = useState<string>("");

  const checkHealthText = useMemo(() => t("checkHealth"), [t]);
  const checkingStateText = useMemo(() => t("checkingState"), [t]);
  const serverUpText = useMemo(() => t("serverUp"), [t]);
  const serverUpDetailText = useMemo(() => t("serverUpText"), [t]);
  const serverDownText = useMemo(() => t("serverDown"), [t]);
  const serverDownDetailText = useMemo(() => t("serverDownText"), [t]);

  useEffect(() => {
    setModalTitle(checkHealthText);
    setModalText(checkingStateText);

    const checkServerHealth = async () => {
      try {
        const healthResponse: HealthResponse = await checkHealth();
        setModalTitle(serverUpText);
        setModalText(healthResponse.result || serverUpDetailText);
      } catch (error) {
        setModalTitle(serverDownText);
        setModalText(serverDownDetailText);
      }
    };
    checkServerHealth();
  }, [
    checkHealthText,
    checkingStateText,
    serverUpText,
    serverUpDetailText,
    serverDownText,
    serverDownDetailText,
  ]);

  return (
    <UniversalModal
      buttonText={checkHealthText}
      modalTitle={modalTitle}
      modalText={modalText}
    />
  );
};
