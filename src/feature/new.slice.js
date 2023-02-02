import { createSlice } from "@reduxjs/toolkit";

export const newSlice = createSlice({
  name: "news",
  initialState: {
    news: null,
  },
  reducers: {
    getNews: (state, { payload }) => {
      state.news = payload;
    },
  },
});
export const { getNews } = newSlice.actions;
export default newSlice.reducer;
