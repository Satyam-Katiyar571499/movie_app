import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/Movieslice";
import tvReducer from "./reducers/Tvslice";
import peopleReducer from "./reducers/Peopleslice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});
