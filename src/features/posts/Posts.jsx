import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TempAllPosts from "./TempAllPosts";
import { getPosts, setPerPage as setPerPageAction } from "./postsSlice";

const Posts = () => {
  const { data: posts, perPage } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();
  const setPerPage = useCallback((count) => dispatch(setPerPageAction(count)), [
    dispatch,
  ]);
  useEffect(() => {
    dispatch(getPosts(perPage));
  }, [dispatch, perPage]);
  return (
    <TempAllPosts setPerPage={setPerPage} perPage={perPage} posts={posts} />
  );
};

export default Posts;
