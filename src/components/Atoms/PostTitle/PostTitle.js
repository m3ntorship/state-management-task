import React from "react";

function PostTitle({ postTitle = "" }) {
  return (
    <div className="mb-m w-full">
      <h3 className="text-md text-dark font-normal">{postTitle}</h3>
    </div>
  );
}

export default PostTitle;
