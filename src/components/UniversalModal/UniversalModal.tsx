import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";

import "./UniversalModal.css";

export const UniversalModal = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={handleOpen}>{t("open_modal")}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("modal_title")}
          </Typography>
          <Typography id="modal-modal-description">
            {t("modal_text")}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
