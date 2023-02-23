
import { HiRefresh } from "react-icons/hi";
import { useQuoteContext } from "../../contexts/QuoteContext";

const QuoteRefreshBtn = () => {
  const { getRandomeQuote } = useQuoteContext();
  
  return (
    <div
      className="md:text-3xl text-2xl cursor-pointer"
      onClick={getRandomeQuote}
    >
      <HiRefresh />
    </div>
  );
}

export default QuoteRefreshBtn