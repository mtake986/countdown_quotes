import { IQuote } from "../../../contexts/Quote/interface";
import QuoteText from "./QuoteText";
import SpeakerName from "./SpeakerName";

interface Props {
  q: IQuote;
}

const Quote = ({ q }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <QuoteText q={q} />
      <SpeakerName q={q} />
    </div>
  );
};

export default Quote;
