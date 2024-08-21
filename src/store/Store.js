import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import blogSlice from "./blogSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    blog: blogSlice,
    user: userSlice,
  },
});

export default store;
