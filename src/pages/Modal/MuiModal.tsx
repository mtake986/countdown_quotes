import React from "react";
import { useCountdownContext } from "../../contexts/CountdownContext";
import { Box, Modal } from "@mui/material";
import ModalContentPageManager from "./ModalContentPageManager";
import { useModalContext } from "../../contexts/ModalContext";

const MuiModal = () => {
  const { isModalOpen, handleToggleModal } = useModalContext();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
  };

  return (
    <>
      {isModalOpen ? (
        <Modal
          open={isModalOpen}
          onClose={handleToggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalContentPageManager />
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

export default MuiModal;
