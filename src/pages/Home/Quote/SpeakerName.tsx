import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const SpeakerName: React.FC = () => {
  const { currentQuoteIndex, myQuotes } = useQuoteContext();

  return (
    <div>
      <span className="w-full text-sm">
        {myQuotes[currentQuoteIndex]?.speakerName
          ? myQuotes[currentQuoteIndex]?.speakerName
          : ""}
      </span>
    </div>
  );
};

export default SpeakerName;
