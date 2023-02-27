import { IconButton, Tooltip } from "@mui/material";
import { HiRefresh } from "react-icons/hi";
import { useQuoteContext } from "../../contexts/QuoteContext";

const QuoteRefreshBtn = () => {
  const { getRandomeQuote } = useQuoteContext();

  return (
    <Tooltip title="Refresh">
      <IconButton>
        <HiRefresh
          onClick={getRandomeQuote}
          className="text-2xl cursor-pointer"
        />
      </IconButton>
    </Tooltip>
  );
};

export default QuoteRefreshBtn;
