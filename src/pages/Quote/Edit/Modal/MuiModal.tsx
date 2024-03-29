
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MuiDontShowCheckbox from "./MuiDontShowCheckbox";
import SaveBtn from "../SaveBtn";
import MuiQuoteTextField from "./MuiQuoteTextField";
import MuiSpeakerNameTextField from "./MuiSpeakerNameTextField";
import { IQuote } from "../../../../contexts/Quote/interface";

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface Props {
  q: IQuote;
  open: boolean;
  handleClose: () => void;
}

function MuiModal({q, open, handleClose} : Props) {

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
          {/* todo: change default value */}
          <MuiQuoteTextField quoteText={q.quoteText} />
          <MuiSpeakerNameTextField speakerName={q.speakerName} />
          <MuiDontShowCheckbox dontShow={q.dontShow} />
          <SaveBtn handleClose={handleClose} qid={q.id} />
        </Box>
      </Modal>
    </div>
  );
}

export default MuiModal;