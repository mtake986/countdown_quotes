export interface Props {
  children: React.ReactNode;
}
export interface IQuote {
  quoteText: string;
  speakerName: string;
  uid: string;
  id?: string;
}

export interface IMyQuotesBeingChanged {
  [currentQuoteIndex: number]: IQuote;
}

export interface QuoteContextType {
  getRandomeQuote: () => void;
  quote: {
    text: string;
    speakerName: string;
  };
  handleQuoteTextInputText: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) => void;
  quoteTextInputText: string;
  handleSpeakerNameInputText: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) => void;
  speakerNameInputText: string;
  fetchQuotesCreatedByLoginUser: (uid: string) => void;
  myQuotes: IQuote[];
  handleUpdateQuotes: () => void;
  handleCreateQuote: (uid: string) => void;
  handleChangeCurrentQuoteIndex: (text: string) => void;
  currentQuoteIndex: number;
  // myQuotesBeingChanged: IQuote[];
  myQuotesBeingChanged: IMyQuotesBeingChanged[];
}
