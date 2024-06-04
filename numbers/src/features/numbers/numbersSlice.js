import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numbersData: {
    succeededProjects: 0,
    workingHoursSpent: 0,
    happyClients: 0,
  },
};

const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    setNumbersData: (state, action) => {
      const { idName, goalNum } = action.payload;
      state.numbersData[idName] = goalNum;
    },
  },
});

export const { setNumbersData } = numbersSlice.actions;

export default numbersSlice.reducer;
