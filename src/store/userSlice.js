import { createSlice } from "@reduxjs/toolkit";

const getItemFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error(`Error parsing JSON from localStorage key "${key}":`, e);
    return { img: "", name: "", bio: "" };
  }
};

const initialState = {
  userProfile: getItemFromLocalStorage("userProfile") || {
    img: "",
    name: "",
    bio: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserProfile: (state, action) => {
      state.userProfile = action.payload;
      console.log("action", action.payload);
      localStorage.setItem("userProfile", JSON.stringify(action.payload));
    },
  },
});

export const { addUserProfile } = userSlice.actions;

export default userSlice.reducer;
