import { createSlice } from "@reduxjs/toolkit";
const postEdit = {
  imagePoll: {
    postTitle: "",
    imagesInfo: [],
  },
  textPoll: {
    postTitle: "",
    favourites: [
      { id: 1, value: "" },
      { id: 2, value: "" },
    ],
  },
  miniSurvey: {
    postTitle: "",
    optionGroup: [
      {
        id: 1,
        optionName: "",
        optionInpVals: [
          { id: 1, value: "" },
          { id: 2, value: "" },
        ],
      },
    ],
  },
};
const posts = createSlice({
  name: "posts",
  initialState: {
    postEdit: postEdit,
    posts: [],
  },
  reducers: {
    addImagePollPostTitle(state, action) {
      state.postEdit.imagePoll.postTitle = action.payload;
      return state;
    },
    addTextPollPostTitle(state, action) {
      state.postEdit.textPoll.postTitle = action.payload;
      return state;
    },
    addMiniSurveyPostTitle(state, action) {
      state.postEdit.miniSurvey.postTitle = action.payload;
      return state;
    },
    addImagePollImageSrc(state, action) {
      state.postEdit.imagePoll.imagesInfo = [
        ...state.postEdit.imagePoll.imagesInfo,
        action.payload,
      ];
      return state;
    },
    addImagePollImageCaption(state, action) {
      state.postEdit.imagePoll.imagesInfo = state.postEdit.imagePoll.imagesInfo.map(
        (imgInfo) => {
          if (imgInfo.imageId === action.payload.imageId) {
            return {
              ...imgInfo,
              imageCaption: action.payload.imgCaption,
            };
          } else {
            return imgInfo;
          }
        }
      );
    },
    imageUploaded(state, action) {
      state.postEdit.imagePoll.imagesInfo = state.postEdit.imagePoll.imagesInfo.map(
        (imgInfo) => {
          if (imgInfo.imageId === action.payload.imageId) {
            return { ...imgInfo, imageUploaded: true };
          } else {
            return imgInfo;
          }
        }
      );
    },
    deleteImage(state, action) {
      state.postEdit.imagePoll.imagesInfo = state.postEdit.imagePoll.imagesInfo.filter(
        (img) => img.imageId !== action.payload.imageId
      );
    },
    addTextPollFavourites(state, action) {
      state.postEdit.textPoll.favourites = action.payload;
      return state;
    },
    addMiniSurveyOptionGroup(state, action) {
      state.postEdit.miniSurvey.optionGroup = action.payload;
      return state;
    },
    postAdding(state, { payload }) {
      switch (payload.type) {
        case "Image Poll":
          state.posts = [
            ...state.posts,
            { data: state.postEdit.imagePoll, postType: payload.type },
          ];
          state.postEdit = postEdit;
          return state;
        case "Text Poll":
          state.posts = [
            ...state.posts,
            { data: state.postEdit.textPoll, postType: payload.type },
          ];
          state.postEdit = postEdit;
          return state;
        case "Mini survey":
          state.posts = [
            ...state.posts,
            { data: state.postEdit.miniSurvey, postType: payload.type },
          ];
          state.postEdit = postEdit;
          return state;
        default:
          return;
      }
    },
  },
});

export const {
  addImagePollPostTitle,
  addTextPollPostTitle,
  addMiniSurveyPostTitle,
  addImagePollImageSrc,
  addImagePollImageCaption,
  addTextPollFavourites,
  addMiniSurveyOptionGroup,
  deleteImage,
  imageUploaded,
  postAdding,
} = posts.actions;

export default posts.reducer;
