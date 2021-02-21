import React from "react";
import ViewOneImagePoll from "../../components/Organisms/ViewOneImagePoll/ViewOneImagePoll";
export default function TempAllPosts({ posts, setPerPage, perPage }) {
  const inputHandler = ({ target: { value } }) => {
    setPerPage(+value);
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 py-2.5 px-m text-sm font-normal text-grey-shd1 w-64 md:w-96 rounded-md focus:outline-none"
          type="number"
          value={perPage}
          
          onChange={inputHandler}
          data-testid="perPageSelector"
        />
      </div>
      {posts.map((post) => (
        <ViewOneImagePoll post={post} key={post.id} />
      ))}
    </>
  );
}
