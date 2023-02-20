
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EditBtn = () => {
  const { handleToggleModal } = useCountdownContext();
  return (
    <div>
      <button onClick={handleToggleModal}>Open modal</button>
    </div>
  );
};
export default EditBtn;
