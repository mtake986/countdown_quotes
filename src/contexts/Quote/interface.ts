export interface Props {
  children: React.ReactNode;
}

// todo: likes
export interface IQuote {
  quoteText: string;
  speakerName: string;
  uid: string;
  docId?: string;
  dontShow: boolean;
  likes: 0;
  usersLiked: string[];
}
export interface IfilterMyQuotesProperties {
  quoteText: string;
  speakerName: string;
  dontShow?: string;
  likes: number;
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
  fetchQuotesAddedByLoginUser: (uid: string) => void;
  myQuotes: IQuote[];
  handleCreateQuote: (uid: string) => void;
  handleUpdateQuotes: (qid: string) => void;
  handleChangeCurrentQuoteIndex: (text: string, i?: number) => void;
  currentQuoteIndex: number;
  myQuotesBeingChanged: IQuote[];
  handleDelete: (uid: string) => void;
  toggleEditModal: () => void;
  editModalOpen: boolean;
  clearInputs: () => void;
  handleInputDontShow: (text?: string, curr?: boolean) => void;
  inputDontShow: boolean;
  myPublicQuotes: IQuote[];
  handleCurrentQuoteId: (id: string) => void;
  currentQuoteId: string;
  handleFilterMyQuotesProperties: (key: string, e: string) => void;
  filterMyQuotesProperties: IfilterMyQuotesProperties;
  fetchMyQuotesByProperties: (uid: string) => void;
  filteredMyQuotes: IQuote[];
  clearFilterMyQuotesProperties: () => void;

  loading: boolean;
  fetchAllQuotesByUsers: () => void;
  allQuotesByUsers: IQuote[];
  handleLoading: () => void;

  fetchPublicMyQuotes: (uid: string) => void;
  fetchPublicAllQuotes: () => void;
  allPublicQuotes: IQuote[];

  handleFilterAllQuotesProperties: (key: string, e: string) => void;
  filterAllQuotesProperties: IfilterMyQuotesProperties;
  fetchAllQuotesByProperties: () => void;
  filteredAllQuotes: IQuote[];
  clearFilterAllQuotesProperties: () => void;
  handleLike: (qid: string, uid: string) => void
}
