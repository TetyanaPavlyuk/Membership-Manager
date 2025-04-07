import { useState } from "react";
import { useTranslation } from "react-i18next";

import { checkHealthAPI, HealthResponse } from "../../api";
import { UniversalModal } from "../";
import { Box, Button } from "@mui/material";

export const HealthCheckComponent = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalText, setModalText] = useState<string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkServerHealth = async () => {
    try {
      const healthResponse: HealthResponse = await checkHealthAPI();
      setModalTitle(t("serverUp"));
      setModalText(healthResponse.result || t("serverUpText"));
    } catch (error) {
      setModalTitle(t("serverDown"));
      setModalText(t("serverDownText"));
    }
  };

  return (
    <Box>
      <Button
        onClick={() => {
          handleOpen();
          checkServerHealth();
        }}
      >
        {t("checkHealth")}
      </Button>
      <UniversalModal
        open={open}
        handleClose={handleClose}
        modalTitle={modalTitle}
        modalText={modalText}
      />
    </Box>
  );
};
