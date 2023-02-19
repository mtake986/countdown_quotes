import dayjs, { Dayjs } from "dayjs";

export type CountdownContextType = {
  activeEdit: boolean;
  setActiveEdit: (value: boolean) => void;
  eventDate: Dayjs | Date | null;
  setEventDate: (value: Dayjs | Date | null) => void;
  handleEventDate: (e: Dayjs | Date | null) => void;
  eventTitle: string;
  setEventTitle: (value: string) => void;
  handleEventTitle: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleToggleEdit: () => void;
  handleDaysLeft: (date: Dayjs | Date | null) => void;
  daysLeft: number; 
};
