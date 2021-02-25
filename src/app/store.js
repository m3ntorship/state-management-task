import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../features/posts/postsSlice";
import picklyPostsReducer from "../features/picklyPosts/picklyPostsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    picklyPosts: picklyPostsReducer,
  },
});
