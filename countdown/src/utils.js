export const getDateInfo = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const weekday = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    year,
    month,
    day,
    weekday,
    hours,
    minutes,
    seconds,
  };
};
export const months = [
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
export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const tConvert = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "am" : "pm"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
};
export const formatTime = (hours, minutes) => {
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
};
export const getTempDate = () => {
  const tempDate = new Date();
  const tempYear = tempDate.getFullYear();
  const tempMonth = tempDate.getMonth();
  const tempDay = tempDate.getDate();
  const tempHours = tempDate.getHours();
  const tempMinutes = tempDate.getMinutes();
  const tempSeconds = tempDate.getSeconds();
  const daysToAdd = 2;

  return {
    tempYear,
    tempMonth,
    tempDay,
    tempHours,
    tempMinutes,
    tempSeconds,
    daysToAdd,
  };
};
