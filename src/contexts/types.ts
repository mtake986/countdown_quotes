import dayjs, { Dayjs } from "dayjs";
import { IEvent } from './interfaces'

export type CountdownContextType = {
  currEventDate: Dayjs | Date | null;
  setCurrEventDate: (value: Dayjs | Date | null) => void;
  handleEventDate: (e: Dayjs | Date | null) => void;
  currEventTitle: string;
  setCurrEventTitle: (value: string) => void;
  handleChangeEventTitle: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    i: number
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
  handleSaveBtnClick: (text: string) => void;
  events: IEvent[];
  handleDisplayEvent: (text: string) => void;
  displayEventIndex: number;
  currDisplayEvent: IEvent;
  eventsCopyBeingChanged: IEvent[];
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
  selectedTypeAndAct: {
    type: string;
    act: string;
  };
  handleSelectTypeAndAct: (type: string, act: string) => void;
  currPageNum: number;
  handleCurrPageNum: () => void;
};
