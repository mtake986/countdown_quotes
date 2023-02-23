import React from "react";
import { EventTitleInput, EventDateInput, SaveBtn } from "../index";
import { useCountdownContext } from "../../../contexts/CountdownContext";
import { Box, Modal } from "@mui/material";

const CdModal = () => {
  const { isModalOpen, handleToggleModal } = useCountdownContext();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
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
            <div className="flex flex-col items-center gap-6">
              <EventTitleInput />
              <EventDateInput />
              <SaveBtn />
            </div>
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

export default CdModal;
