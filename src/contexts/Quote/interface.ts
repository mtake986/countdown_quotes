export interface Props {
  children: React.ReactNode;
}
export interface IQuote {
  quoteText: string;
  speakerName: string;
  uid: string;
  id?: string;
  dontShow: boolean;
}
export interface IFilterProperties {
  quoteText: string;
  speakerName: string;
  dontShow: string;
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
  handleInputDontShow: (text?: string, curr?: boolean) => void;
  inputDontShow: boolean;
  myPublicQuotes: IQuote[];
  handleCurrentQuoteId: (id: string) => void;
  currentQuoteId: string;
  handleFilterProperties: (key: string, e: string) => void;
  filterProperties: IFilterProperties;
  excludeDontShowQuotes: (uid: string) => void;
  excludeQuotes: (uid: string) => void;
  filteredMyQuotes: IQuote[];
  loading: boolean;
}
