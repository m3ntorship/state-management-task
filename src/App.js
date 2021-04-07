import React from "react";
import PostEdit from "./components/Organisms/PostEdit/PostEdit";
import Posts from "./features/posts/Posts.jsx";
import ViewImagePoll from "./components/Organisms/ImagePoll/ImagePoll";
import ViewTextPoll from "./components/Organisms/ViewTextPoll/ViewTextPoll";
import ViewMiniSurvey from "./components/Organisms/ViewMiniSurvey/ViewMiniSurvey";
import { useSelector } from "react-redux";
const App = () => {
  const posts = useSelector((state) => state.picklyPosts.posts);

  return (
    <>
      <PostEdit />
      <Posts />
      {posts.map((post, index) => {
        let component;
        switch (post.postType) {
          case "Image Poll":
            component = <ViewImagePoll post={post.data} key={index + 100} />;
            break;
          case "Text Poll":
            component = <ViewTextPoll post={post.data} key={index} />;
            break;
          case "Mini survey":
            component = <ViewMiniSurvey post={post.data} key={index + 200} />;
            break;
          default:
            return;
        }
        return component;
      })}
    </>
  );
};

export default App;
