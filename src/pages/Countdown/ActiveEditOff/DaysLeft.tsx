import { useCountdownContext } from "../../../contexts/CountdownContext";

const DaysLeft = () => {
  const { daysLeft } = useCountdownContext();

  return (
    <div>
      {daysLeft === 0 ? (
        <span>YOU GOT THIS!!!</span>
      ) : daysLeft === 1 ? (
        <span>
          <span>{daysLeft}</span>Day Out
        </span>
      ) : daysLeft >= 2 ? (
        <span>
          <span>{daysLeft}</span>Days Out
        </span>
      ) : (
        <span>Invalid Dates</span>
      )}
    </div>
  );
};

export default DaysLeft;
