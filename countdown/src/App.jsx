import { useEffect } from "react";
import GiveawayInfo from "./components/GiveawayInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  setEndDateValues,
  setGiveawayEnded,
  setTimeDifference,
} from "./features/countdown/countdownSlice";
import { getDateInfo } from "./utils";

const App = () => {
  const countdown = useSelector((store) => store.countdown);
  const dispatch = useDispatch();

  useEffect(() => {
    const dateInfo = getDateInfo(countdown.endDate);
    dispatch(setEndDateValues(dateInfo));

    let countdownInterval = undefined;
    const getTimeDifference = (startDate, endDate) => {
      // Calculate the total difference in milliseconds
      const totalDiff = endDate - startDate;
      if (totalDiff < 1) {
        clearInterval(countdownInterval);
        dispatch(setGiveawayEnded(true));
        return;
      }
      // Calculate the difference in days
      const days = Math.floor(totalDiff / (1000 * 60 * 60 * 24));
      // Calculate the difference in hours
      const hours = Math.floor(
        (totalDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      // Calculate the difference in minutes
      const minutes = Math.floor((totalDiff % (1000 * 60 * 60)) / (1000 * 60));
      // Calculate the difference in seconds
      const seconds = Math.floor((totalDiff % (1000 * 60)) / 1000);
      return {
        days,
        hours,
        minutes,
        seconds,
        totalDiff,
      };
    };
    const initCountdown = () => {
      const now = new Date();
      const timeDifference = getTimeDifference(now, countdown.endDate);
      dispatch(setTimeDifference(timeDifference));
    };
    initCountdown();
    countdownInterval = setInterval(initCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="giveaway-section">
      <div className="section-center">
        <img
          src="https://vannilla-js-basic-project-12-countdown.netlify.app/gift.jpeg"
          alt="iPhone"
          className="phone-img"
        />
        <GiveawayInfo />
      </div>
    </section>
  );
};
export default App;
