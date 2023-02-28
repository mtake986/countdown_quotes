import dayjs, { Dayjs } from "dayjs";
import { IEvent, IQuote, IUser } from "./interfaces";

export type CountdownContextType = {
  handleChangeEventTitle: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    i: number
  ) => void;
  handleDaysLeft: (date: Dayjs | Date | null) => void;
  daysLeft: number;
  eventTitleInputText: string | null;
  eventDateInputText: Dayjs | Date | null;
  handleEventTitleInputText: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleEventDateInputText: (e: Dayjs | Date | null) => void;
  handleSaveBtnClick: (type: string, uid: string) => void;
  events: IEvent[];
  handleDisplayEvent: (text: string) => void;
  displayEventIndex: number;
  fetchEvent: (uid: string) => void;
};

export type QuoteContextType = {
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
};

export type ModalContextType = {
  selectedTypeAndAct: {
    type: string;
    act: string;
  };
  handleSelectTypeAndAct: (type: string, act: string) => void;
  currPageNum: number;
  handleCurrPageNum: (text: string) => void;

  isModalOpen: boolean;
  handleToggleModal: () => void;
};

export type AuthContextType = {
  loginUser: IUser;
  handleGoogleLogin: () => void;
  handleLogout: () => Promise<void>;
};
