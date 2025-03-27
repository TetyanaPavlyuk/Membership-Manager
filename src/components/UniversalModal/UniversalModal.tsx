import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./UniversalModal.css";

interface UniversalModalProps {
  open: boolean;
  handleClose: () => void;
  modalTitle: string;
  modalText: string;
  children?: ReactNode;
}

export const UniversalModal = ({
  open,
  handleClose,
  modalTitle,
  modalText,
  children,
}: UniversalModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalBox">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description">{modalText}</Typography>
        <Box>{children}</Box>
      </Box>
    </Modal>
  );
};
