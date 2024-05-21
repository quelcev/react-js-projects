import { createSlice } from "@reduxjs/toolkit";
import { getTempDate } from "../../utils";

// add 2 days to current date to keep the countdown working at anytime
const {
  tempYear,
  tempMonth,
  tempDay,
  tempHours,
  tempMinutes,
  tempSeconds,
  daysToAdd,
} = getTempDate();

const countdownSlice = createSlice({
  name: "countdown",
  initialState: {
    endDate: new Date(
      tempYear,
      tempMonth,
      tempDay + daysToAdd,
      tempHours,
      tempMinutes,
      tempSeconds
    ),
    timeDifference: null,
    giveawayEnded: false,
    endDateValues: null,
  },
  reducers: {
    setTimeDifference: (state, action) => {
      state.timeDifference = { ...action.payload };
    },
    setGiveawayEnded: (state, action) => {
      state.giveawayEnded = action.payload;
    },
    setEndDateValues: (state, action) => {
      state.endDateValues = { ...action.payload };
    },
  },
});

export const { setTimeDifference, setGiveawayEnded, setEndDateValues } =
  countdownSlice.actions;

export default countdownSlice.reducer;
