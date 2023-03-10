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
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  quoteTextInputText: string;
  handleSpeakerNameInputText: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  speakerNameInputText: string;
  fetchQuotesCreatedByLoginUser: (uid: string) => void;
  myQuotes: IQuote[];
  handleCreateQuote: (uid: string) => void;
  handleUpdateQuotes: () => void;
  handleChangeCurrentQuoteIndex: (text: string, i?: number) => void;
  currentQuoteIndex: number;
  myQuotesBeingChanged: IQuote[];
  // myQuotesBeingChanged: IMyQuotesBeingChanged[];
  handleDelete: (uid: string) => void;
  toggleEditModal: () => void;
  editModalOpen: boolean;
  clearInputs: () => void;
}
