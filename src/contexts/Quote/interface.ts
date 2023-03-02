export interface Props {
  children: React.ReactNode;
}
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
  handleQuoteTextInputText: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  quoteTextInputText: string;
  handleSpeakerNameInputText: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  speakerNameInputText: string;
  fetchQuotesCreatedByLoginUser: (uid: string) => void;
  myQuotes: IQuote[];
  handleUpdateQuote: (uid: string) => void;
  handleCreateQuote: (uid: string) => void;
}
