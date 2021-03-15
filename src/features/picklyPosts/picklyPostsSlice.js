import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: {
    postEdit: {
      imagePoll: {
        postTitle: "",
        imagesData: [],
      },
      textPoll: {
        postTitle: "",
        favorites: [],
      },
      miniSurvey: {
        postTitle: "",
        fileUrls: [],
        miniSurvey: [],
      },
    },
    posts: [],
  },
  reducers: {
    addImagePoll(state, { payload }) {
      const { postTitle, imagesData } = payload;
      if (imagesData) {
        // const { imageCaption, fileUrls, imageId } = imagesData;
        const { fileUrls, imageId } = imagesData;
        // console.log("Reducer :    ", imageId);
        // if (imageCaption) {
        // state.postEdit.imagePoll.imagesData.forEach((imageData, i) => {
        // if (index === i) {
        //   imageData.imageCaption = imageCaption;
        //   // }
        // });
        // }
        if (fileUrls) {
          state.postEdit.imagePoll.imagesData = [
            ...state.postEdit.imagePoll.imagesData,
            { fileUrls, imageCaption: "", imageId },
          ];
        }
      }

      if (postTitle) {
        state.postEdit.imagePoll.postTitle = postTitle;
      }

      // if (imageCaption) {
      //   state.postEdit.imagePoll.imageCaption = imageCaption;
      // }
      // if (fileUrls) {
      //   state.postEdit.imagePoll.fileUrls = [
      //     ...state.postEdit.imagePoll.fileUrls,
      //     fileUrls,
      //   ];
      // }

      return state;
    },
    addTextPoll(state, { payload }) {
      const { postTitle, favorites } = payload;
      state.postEdit.textPoll.postTitle = postTitle;
      state.postEdit.textPoll.favorites = [
        ...state.postEdit.textPoll.favorites,
        favorites,
      ];
      return state;
    },
    addMiniSurvey(state, { payload }) {
      const { postTitle, fileUrls, miniSurvey } = payload;
      state.postEdit.miniSurvey.postTitle = postTitle;
      state.postEdit.miniSurvey.miniSurvey = [
        ...state.postEdit.miniSurvey.miniSurvey,
        miniSurvey,
      ];
      state.postEdit.miniSurvey.fileUrls = [
        ...state.postEdit.miniSurvey.fileUrls,
        fileUrls,
      ];
      return state;
    },
    postAdded(state, { payload }) {
      const { postType } = payload;
      switch (postType) {
        case "Image Poll":
          state.posts = [...state.posts, state.postEdit.imagePoll];
          break;
        case "Text Poll":
          state.posts = [...state.posts, state.postEdit.textPoll];
          break;
        case "Mini survey":
          state.posts = [...state.posts, state.postEdit.miniSurvey];
          break;
        default:
          return state;
      }
      state.postEdit = {
        imagePoll: {
          postTitle: "",
          captions: [],
          fileUrls: [],
        },
        textPoll: {
          postTitle: "",
          favorites: [],
        },
        miniSurvey: {
          postTitle: "",
          fileUrls: [],
          miniSurvey: [],
        },
      };
      return state;
    },
    //   startPost(state) {
    //     return [
    //       ...state,
    //       {
    //         type: "",
    //         postTitle: "",
    //         fileUrls: [],
    //         imageCaptions: [],
    //         favorites: [],
    //         miniSurvey: [],
    //       },
    //     ];
    //   },
    //   addImages: {
    //     reducer: (state, { payload: { fileUrls, imageCaption } }) => {
    //       const stateLen = state.length;
    //       state.map((post, i) => {
    //         if (stateLen === i + 1) {
    //           post.fileUrls = [...post.fileUrls, fileUrls];
    //           post.imageCaptions = [...post.imageCaptions, imageCaption];
    //         }
    //         return post;
    //       });
    //       return state;
    //     },
    //     prepare: (fileUrls, imageCaption) => {
    //       return { payload: { fileUrls, imageCaption } };
    //     },
    //   },
    //   addFavorites(state, action) {
    //     const stateLen = state.length;
    //     state.map((post, i) => {
    //       if (stateLen === i + 1) {
    //         post.favorites = action.payload;
    //       }
    //       return post;
    //     });
    //     return state;
    //   },
    //   postAdded: {
    //     reducer: (state, action) => {
    //       const stateLen = state.length;
    //       state.map((post, i) => {
    //         if (stateLen === i + 1) {
    //           post.type = action.payload.type;
    //           post.postTitle = action.payload.postTitle;
    //           post.miniSurvey = action.payload.miniSurvey;
    //         }
    //         return post;
    //       });
    //       return state;
    //     },
    //     prepare: (type, postTitle, miniSurvey) => {
    //       return { payload: { type, postTitle, miniSurvey } };
    //     },
    //   },
  },
});

export const {
  addImagePoll,
  addTextPoll,
  addMiniSurvey,
  postAdded,
} = posts.actions;

export default posts.reducer;
