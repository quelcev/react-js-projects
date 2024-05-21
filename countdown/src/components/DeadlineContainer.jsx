import { useSelector } from "react-redux";

const DeadlineContainer = () => {
  const countdown = useSelector((store) => store.countdown);

  if (countdown.timeDifference === null) return;

  const { days, hours, minutes, seconds } = countdown.timeDifference;

  return (
    <div className="deadline-container">
      {!countdown.giveawayEnded ? (
        <>
          <div>
            <span className="num days">{days}</span>
            <span className="letter days">Day</span>
          </div>
          <div>
            <span className="num hours">{hours}</span>
            <span className="letter hours">Hours</span>
          </div>
          <div>
            <span className="num mins">{minutes}</span>
            <span className="letter mins">Mins</span>
          </div>
          <div>
            <span className="num secs">{seconds}</span>
            <span className="letter secs">Secs</span>
          </div>
        </>
      ) : (
        <h3>Giveaway Ended</h3>
      )}
    </div>
  );
};
export default DeadlineContainer;
