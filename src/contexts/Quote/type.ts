export interface IQuote {
  quoteText: string;
  speakerName: string;
  uid: string;
  id?: string;
}

export interface QuoteContextType {
  getRandomeQuote: () => void;
  quote: {
    text: string;
    speakerName: string;
  };
  handleTabScreenText: () => void;
  TabScreenText: string;
  handleQuoteInputs: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) => void;
  quoteInput: IQuote;
  handleUpdateQuote: (uid: string) => void;
  handleCreateQuote: (uid: string) => void;
  myQuotes: IQuote[];
  fetchQuotesCreatedByLoginUser: (uid: string) => void;
};


export interface Props {
  children: React.ReactNode;
}
