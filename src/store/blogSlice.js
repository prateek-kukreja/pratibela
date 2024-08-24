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
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;

// Selector to get blogs
export const selectBlogs = (state) => state.blog.blogs;
export const selectBlogStatus = (state) => state.blog.status;
export const selectBlogError = (state) => state.blog.error;
