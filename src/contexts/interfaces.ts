import dayjs, { Dayjs } from "dayjs";

export interface Props {
  children: React.ReactNode;
}

export interface IEvent {
  eventTitle: string;
  eventDate: Dayjs | Date | null;
}
