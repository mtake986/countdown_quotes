import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IQuote } from "../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";
import SaveBtn from "../SaveBtn";
import MuiQuoteTextField from "./MuiQuoteTextField";
import MuiSpeakerNameTextField from "./MuiSpeakerNameTextField";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   width: 300,
// };

interface Props {
  q: IQuote;
}

function MuiModal({ q }: Props) {
  const { editModalOpen, toggleEditModalOpen } =
    useQuoteContext();
    
  return (
    <div>
      <Modal
        open={editModalOpen}
        onClose={toggleEditModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-between items-center p-5"
      >
        <Box className="max-w-lg w-screen shadow-2xl flex flex-col justify-center items-center gap-5 bg-white p-5 py-10 sm:p-10 rounded-lg">
          <MuiQuoteTextField />
          <MuiSpeakerNameTextField />
          <SaveBtn q={q} />
        </Box>
      </Modal>
    </div>
  );
}

export default MuiModal;
