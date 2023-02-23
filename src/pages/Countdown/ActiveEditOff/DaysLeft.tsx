import { useCountdownContext } from "../../../contexts/CountdownContext";

const DaysLeft = () => {
  const { daysLeft } = useCountdownContext();

  return (
    <div>
      {daysLeft <= 0 ? (
        <span className="text-3xl font-bold text-red-600">YOU GOT THIS!!!</span>
      ) : daysLeft === 1 ? (
        <span>
          <span className="text-3xl font-bold mr-2 text-red-600">
            {daysLeft}
          </span>
          Day Out
        </span>
      ) : daysLeft <= 3 && daysLeft >= 2 ? (
        <span className="">
          <span className="text-3xl font-bold mr-2 text-red-600">
            {daysLeft}
          </span>
          Days Out
        </span>
      ) : daysLeft > 3 ? (        
        <span className="">
          <span className="text-3xl font-bold mr-2 ">
            {daysLeft}
          </span>
          Days Out
        </span>
      ) : null}
    </div>
  );
};

export default DaysLeft;
