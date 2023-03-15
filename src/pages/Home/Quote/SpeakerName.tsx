import { IQuote } from "../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  q: IQuote;
}

const SpeakerName: React.FC<Props> = ({q}) => {
  return (
    <div>
      <span className="w-full text-sm">
        {q?.speakerName
          ? q?.speakerName
          : ""}
      </span>
    </div>
  );
};

export default SpeakerName;
