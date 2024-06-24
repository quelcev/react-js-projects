import { useState, useEffect } from "react";

const App = () => {
  const [monthName, setMonthName] = useState("");
  const [dayName, setDayName] = useState("");
  const [dayNumber, setDayNumber] = useState(0);
  const [yearNumber, setYearNumber] = useState(0);

  useEffect(() => {
    const today = new Date();
    setMonthName(getMonthName(today));
    setDayName(getDayName(today));
    setDayNumber(today.getDate());
    setYearNumber(today.getFullYear());
  }, []);

  const getDayName = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = date.getDay();
    return days[dayIndex];
  };

  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    return months[monthIndex];
  };

  return (
    <div className="calendar-section">
      <div className="calendar-container">
        <p className="month-name">{monthName}</p>
        <p className="day-name">{dayName}</p>
        <p className="day-number">{dayNumber}</p>
        <p className="year">{yearNumber}</p>
      </div>
    </div>
  );
};
export default App;
