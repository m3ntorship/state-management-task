import React, { useState } from "react";
import PostType from "./components/PostType";
import Avatar from "../../Atoms/Avatar/Avatar";
import FormInput from "../../Atoms/FormInput/FormInput";

const PostEdit = () => {
  const [active, setActive] = useState(false);
  const inputHandler = () => {
    setActive(true);
  };
  return (
    <div className="flex justify-center relative">
      <div className="misc-box bg-white shadow-dark rounded-md flex items-center p-m mb-10">
        <Avatar size="md" />
        <FormInput withLabel={false} clickHandler={inputHandler} />
      </div>
      {active ? (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-dark bg-opacity-50"
          onClick={() => setActive(false)}
        ></div>
      ) : null}
      <PostType active={active} />
    </div>
  );
};

export default PostEdit;
