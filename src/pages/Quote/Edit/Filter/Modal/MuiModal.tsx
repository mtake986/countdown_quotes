
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import MuiDontShowCheckbox from "./MuiDontShowCheckbox";
// import SaveBtn from "../SaveBtn";
import MuiQuoteTextField from "./MuiQuoteTextField";
import MuiSpeakerNameTextField from "./MuiSpeakerNameTextField";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

function MuiModal({open, handleClose}: Props) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=" flex justify-between items-center p-5"
      >
        <Box
          sx={style}
          className="max-w-lg w-screen shadow-2xl flex flex-col justify-center items-center gap-5 bg-white p-5 py-10 sm:p-10 rounded-lg"
        >
          <Title />
          <MuiQuoteTextField />
          <MuiSpeakerNameTextField />
          <MuiDontShowCheckbox />
          <SubmitBtn handleClose={handleClose} />
          {/* <SaveBtn handleClose={handleClose} /> */}
        </Box>
      </Modal>
    </div>
  );
}

export default MuiModal;