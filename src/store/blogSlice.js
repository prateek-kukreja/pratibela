import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listBlog } from "../appwrite/database.js";
import { getFile } from "../appwrite/storage.js";

// Thunk to fetch blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogData = await listBlog();
  const blogsWithImages = await Promise.all(
    blogData.map(async (blog) => {
      const image = await getFile(blog.imageId);
      return { ...blog, imageUrl: image.href };
    })
  );
  return blogsWithImages;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
  },
});

export default blogSlice.reducer;
