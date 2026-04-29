import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadmovie: (state, action) => {
      state.info = {
        ...state.info, // old data preserve
        ...action.payload, // new data add/update
      };
    },

    // reset
    removemovie: (state) => {
      state.info = null;
    },
  },
});

export const { loadmovie, removemovie } = MovieSlice.actions;
export default MovieSlice.reducer;
