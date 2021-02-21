import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getposts", async (count) => {
  return Array(count)
    .fill(true)
    .map((e, i) => {
      return {
        id: i,
        name: `name ${i}`,
        date: `${i} hours ago`,
        caption: `yes or no ${i}`,
        image: `https://via.placeholder.com/600x644?text=Image number ${i}`,
        label: `label number ${i}`,
      };
    });
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    perPage: 0,
    data: [],
  },
  reducers: {
    setPerPage: (state, { payload }) => {
      state.perPage = payload;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      const { payload } = action;
      state.data = payload;
    },
  },
});

export const {
  actions: { setPerPage },
  reducer: postsReducer,
} = postsSlice;
