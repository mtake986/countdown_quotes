import { useQuoteContext } from "../../contexts/Quote/QuoteContext";

const SpeakerName: React.FC = () => {
  const { currentQuoteIndex, myQuotes } = useQuoteContext();

  return (
    <span className="text-sm sm:text-xl ">
      {myQuotes[currentQuoteIndex]?.speakerName
        ? myQuotes[currentQuoteIndex]?.speakerName
        : "Loading..."}
    </span>
  );
};

export default SpeakerName;
