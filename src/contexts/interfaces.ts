import dayjs, { Dayjs } from "dayjs";

export interface Props {
  children: React.ReactNode;
}

export interface IEvent {
  eventTitle: string;
  eventDate: Dayjs | Date | null;
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
