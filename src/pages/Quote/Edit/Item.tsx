import { IQuote } from "../../../contexts/Quote/interface";
import Icons from "./Icons";

interface Props {
  q: IQuote;
  i: number;
}
const Item = ({ q, i }: Props) => {

  return (
    <div className="flex justify-between items-center gap-3">
      <div className="text-md flex items-center gap-1 overflow-hidden whitespace-nowrap">
        <span>{i + 1}. </span>
        <p className="text-ellipsis overflow-hidden">{q.quoteText}</p>
      </div>
      <Icons q={q} i={i} />
    </div>
  );
};

export default Item;
