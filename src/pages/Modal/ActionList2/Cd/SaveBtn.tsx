import { useCountdownContext } from "../../../../contexts/CountdownContext";

const SaveBtn = () => {
  const { handleSaveBtnClick } = useCountdownContext();
  return (
    <button
      onClick={handleSaveBtnClick}
      className="w-56 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
