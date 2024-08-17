import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [], //using an array to store multiple blogs
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // console.log("Reducer payload:", action.payload);
      state.posts.unshift(action.payload); // Adds the new post to the beginning of the array
    },

    setPosts: (state, action) => {
      state.posts = action.payload; //replace the entire list of blogs
      console.log("action", action.payload);
    },
  },
});

export const { addPost, setPosts } = blogSlice.actions;

export default blogSlice.reducer;
