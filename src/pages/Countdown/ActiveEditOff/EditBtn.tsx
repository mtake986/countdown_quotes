import { Button } from "@mui/material";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EditBtn = () => {
  const { handleToggleEdit } = useCountdownContext();
  return (
    <Button variant="outlined" color="secondary" onClick={handleToggleEdit}>
      Edit
    </Button>
  );
};
export default EditBtn;
