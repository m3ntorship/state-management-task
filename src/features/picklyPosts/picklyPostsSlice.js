import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: {
    postEdit: {
      imagePoll: {
        postTitle: "",
        // imageInfo: { src: [], caption: [] },
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
    },
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

    // startPost(state) {
    //   return [
    //     ...state,
    //     {
    //       type: "",
    //       postTitle: "",
    //       fileUrls: [],
    //       imageCaptions: [],
    //       favorites: [],
    //       miniSurvey: [],
    //     },
    //   ];
    // },
    // addImages: {
    //   reducer: (state, { payload: { fileUrls, imageCaption } }) => {
    //     const stateLen = state.length;
    //     state.map((post, i) => {
    //       if (stateLen === i + 1) {
    //         post.fileUrls = [...post.fileUrls, fileUrls];
    //         post.imageCaptions = [...post.imageCaptions, imageCaption];
    //       }
    //       return post;
    //     });
    //     return state;
    //   },
    //   prepare: (fileUrls, imageCaption) => {
    //     return { payload: { fileUrls, imageCaption } };
    //   },
    // },
    // addFavorites(state, action) {
    //   const stateLen = state.length;
    //   state.map((post, i) => {
    //     if (stateLen === i + 1) {
    //       post.favorites = action.payload;
    //     }
    //     return post;
    //   });
    //   return state;
    // },
    // postAdded: {
    //   reducer: (state, action) => {
    //     const stateLen = state.length;
    //     state.map((post, i) => {
    //       if (stateLen === i + 1) {
    //         post.type = action.payload.type;
    //         post.postTitle = action.payload.postTitle;
    //         post.miniSurvey = action.payload.miniSurvey;
    //       }
    //       return post;
    //     });
    //     return state;
    //   },
    //   prepare: (type, postTitle, miniSurvey) => {
    //     return { payload: { type, postTitle, miniSurvey } };
    //   },
    // },
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
} = posts.actions;

export default posts.reducer;
