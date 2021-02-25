import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    startPost(state) {
      return [
        ...state,
        {
          type: "",
          postTitle: "",
          fileUrls: [],
          favorites: [],
          miniSurvey: [],
        },
      ];
    },
    addImages(state, action) {
      const stateLen = state.length;
      state.map((post, i) => {
        if (stateLen === i + 1) {
          post.fileUrls = [...post.fileUrls, action.payload];
        }
        return post;
      });
      return state;
    },
    addFavorites(state, action) {
      const stateLen = state.length;
      state.map((post, i) => {
        if (stateLen === i + 1) {
          post.favorites = action.payload;
        }
        return post;
      });
      return state;
    },
    postAdded: {
      reducer: (state, action) => {
        const stateLen = state.length;
        state.map((post, i) => {
          if (stateLen === i + 1) {
            post.type = action.payload.type;
            post.postTitle = action.payload.postTitle;
            post.miniSurvey = action.payload.miniSurvey;
          }
          return post;
        });
        return state;
      },
      prepare: (type, postTitle, miniSurvey) => {
        return { payload: { type, postTitle, miniSurvey } };
      },
    },
  },
});

export const { startPost, addImages, addFavorites, postAdded } = posts.actions;

export default posts.reducer;
