import React from "react";

type Props = {
  text: string | null;
};

const QuoteText: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className="mb-3 text-xl sm:text-2xl font-Caveat-Brush">
      {text ? text : "Loading..."}
    </div>
  );
};

export default QuoteText;
