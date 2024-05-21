import { formatTime, months, tConvert, weekdays } from "../utils";
import DeadlineContainer from "./DeadlineContainer";
import { useSelector } from "react-redux";

const GiveawayInfo = () => {
  const countdown = useSelector((state) => state.countdown);

  if (countdown.endDateValues === null) return;

  const { year, month, day, weekday, hours, minutes, seconds } =
    countdown.endDateValues;

  return (
    <div className="giveaway-info">
      <h2>iPhone Giveaway</h2>
      <p className="info">
        <strong>
          Giveaway Ends On {weekdays[weekday]}, {day} {months[month]} {year}{" "}
          {tConvert(formatTime(hours, minutes))}
        </strong>
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione et nam
        sint numquam maiores a ipsum consequatur, iusto, delectus eveniet esse
        totam eius fugiat nesciunt facere! Eaque hic ducimus libero.
      </p>

      <DeadlineContainer />
    </div>
  );
};
export default GiveawayInfo;
