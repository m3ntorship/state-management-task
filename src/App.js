import React from "react";
import PostEdit from "./components/Organisms/PostEdit/PostEdit";
import Posts from "./features/posts/Posts.jsx";
import ViewImagePoll from './components/Organisms/ImagePoll/ImagePoll';
import ViewImagePollResult from './components/Organisms/ViewImagePollResult/ViewImagePollResult';
import ViewTextPoll from './components/Organisms/ViewTextPoll/ViewTextPoll';
import ViewMiniSurvey from './components/Organisms/ViewMiniSurvey/ViewMiniSurvey';
import ViewTextPollReaults from './components/Organisms/ViewTextPollReaults/ViewTextPollReaults';


const  App = () => {
  return (
    <>
      <PostEdit />
      <Posts />
      <ViewImagePoll/>
      <ViewImagePollResult/>
      <ViewTextPoll/>
      <ViewMiniSurvey/>
      <ViewTextPollReaults/>
    </>
  );
}

export default App;
