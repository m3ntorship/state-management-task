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
          imageCaptions: [],
          favorites: [],
          miniSurvey: [],
        },
      ];
    },
    addImages: {
      reducer: (state, { payload: { fileUrls, imageCaption } }) => {
        const stateLen = state.length;
        state.map((post, i) => {
          if (stateLen === i + 1) {
            post.fileUrls = [...post.fileUrls, fileUrls];
            post.imageCaptions = [...post.imageCaptions, imageCaption];
          }
          return post;
        });
        return state;
      },
      prepare: (fileUrls, imageCaption) => {
        return { payload: { fileUrls, imageCaption } };
      },
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
