import dayjs, { Dayjs } from "dayjs";

export interface Props {
  children: React.ReactNode;
}

export interface IEvent {
  eventTitle: string;
  eventDate: Dayjs | Date | number | null;
  uid: string;
}

export interface IQuote {
  quoteText: string;
  speakerName: string;
}

export interface IUser {
  username: string;
  email: string;
  profilePic: string;
  uid: string;
}
