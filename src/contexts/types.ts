import dayjs, { Dayjs } from "dayjs";

export type CountdownContextType = {
  currEventDate: Dayjs | Date | null;
  setCurrEventDate: (value: Dayjs | Date | null) => void;
  handleEventDate: (e: Dayjs | Date | null) => void;
  currEventTitle: string;
  setCurrEventTitle: (value: string) => void;
  handleEventTitle: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleDaysLeft: (date: Dayjs | Date | null) => void;
  daysLeft: number;
  isModalOpen: boolean;
  handleToggleModal: () => void;
  eventTitleInputText: string | null;
  eventDateInputText: Dayjs | Date | null;
  handleEventTitleInputText: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleEventDateInputText: (e: Dayjs | Date | null) => void;
  handleSaveBtnClick: () => void;
};

export type QuoteContextType = {
  getRandomeQuote: () => void;
  quote: {
    text: string;
    author: string;
  };
  handleTabScreenText: () => void;
  TabScreenText: string;
};

export type ModalContextType = {
  selectedType: string;
  handleEditType: (text: string) => void;
  currPageNum: number;
  handleCurrPageNum: (move: string) => void;
};
