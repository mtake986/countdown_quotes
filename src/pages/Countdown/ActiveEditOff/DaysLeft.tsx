import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const DaysLeft = () => {
  const { events } = useCountdownContext();

  return (
    <div className="mb-8 sm:mb-10">
      {events[0].daysLeft <= 0 ? (
        <span className="text-3xl font-bold text-red-600">YOU GOT THIS!!!</span>
      ) : events[0].daysLeft === 1 ? (
        <span>
          <span className="text-3xl font-bold mr-2 text-red-600">
            {events[0].daysLeft}
          </span>
          Day Out
        </span>
      ) : events[0].daysLeft <= 3 && events[0].daysLeft >= 2 ? (
        <span className="">
          <span className="text-3xl font-bold mr-2 text-red-600">
            {events[0].daysLeft}
          </span>
          Days Out
        </span>
      ) : events[0].daysLeft > 3 ? (
        <span className="">
          <span className="text-3xl font-bold mr-2 ">{events[0].daysLeft}</span>
          Days Out
        </span>
      ) : null}
    </div>
  );
};

export default DaysLeft;
