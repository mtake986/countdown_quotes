import { IconButton, Tooltip } from "@mui/material";
import { HiRefresh } from "react-icons/hi";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";

const QuoteRefreshBtn = () => {
  const { getRandomeQuote } = useQuoteContext();

  return (
    <Tooltip title="Refresh">
      <IconButton onClick={getRandomeQuote} className="text-2xl cursor-pointer">
        <HiRefresh />
      </IconButton>
    </Tooltip>
  );
};

export default QuoteRefreshBtn;
