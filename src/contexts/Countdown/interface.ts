import dayjs, { Dayjs } from "dayjs";

export interface Props {
  children: React.ReactNode;
}

export interface IEvent {
  eventTitle: string;
  eventDate: Dayjs | Date | null;
  daysLeft: number;
  uid: string;
  id?: string;
}

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
  fetchMyEvent: (uid: string) => void;
  handleCreateEvent: (uid: string) => void;
  handleUpdateEvent: (uid: string) => void;
  handleDelete: () => void
};
