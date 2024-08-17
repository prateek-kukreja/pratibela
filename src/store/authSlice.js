import { createSlice } from "@reduxjs/toolkit";

const getItemFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error(`Error parsing JSON from localStorage key "${key}":`, e);
    return null;
  }
};

const initialState = {
  userData: getItemFromLocalStorage("userData") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      localStorage.setItem("status", JSON.stringify(true));
      localStorage.setItem("userData", JSON.stringify(action.payload.userData));
    },
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem("status");
      localStorage.removeItem("userData");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
