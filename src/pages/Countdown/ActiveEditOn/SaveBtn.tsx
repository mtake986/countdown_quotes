import { Button } from "@mui/material";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const SaveBtn = () => {
  const { handleToggleEdit } = useCountdownContext();
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleToggleEdit}
    >
      Save
    </Button>
  );
}
export default SaveBtn;