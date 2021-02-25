import React from "react";
import PostEdit from "./components/Organisms/PostEdit/PostEdit";
import Posts from "./features/posts/Posts.jsx";
import ViewImagePoll from "./components/Organisms/ImagePoll/ImagePoll";
// import ViewImagePollResult from "./components/Organisms/ViewImagePollResult/ViewImagePollResult";
import ViewTextPoll from "./components/Organisms/ViewTextPoll/ViewTextPoll";
import ViewMiniSurvey from "./components/Organisms/ViewMiniSurvey/ViewMiniSurvey";
// import ViewTextPollReaults from "./components/Organisms/ViewTextPollReaults/ViewTextPollReaults";
// import ViewMiniSurveyResults from "./components/Organisms/ViewMiniSurveyResults/ViewMiniSurveyResults";
import { useSelector } from "react-redux";
const App = () => {
  const posts = useSelector((state) => state.picklyPosts);

  return (
    <>
      <PostEdit />
      <Posts />
      {posts.map((post, index) => {
        switch (post.type) {
          case "Image Poll":
            <ViewImagePoll key={index + 100} />;
            break;
          case "Text Poll":
            <ViewTextPoll key={index} />;
            break;
          case "Mini survey":
            <ViewMiniSurvey key={index + 200} />;
            break;
          default:
            return;
        }
      })}
      {/* <ViewImagePoll />
      <ViewImagePollResult />
      <ViewTextPoll />
      <ViewMiniSurvey />
      <ViewTextPollReaults />
      <ViewMiniSurveyResults /> */}
    </>
  );
};

export default App;
