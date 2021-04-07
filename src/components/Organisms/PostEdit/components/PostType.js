import React, { useState } from "react";
import Avatar from "../../../Atoms/Avatar/Avatar";
import TabGroup from "../../TabGroup/TabGroup";
import { useDispatch } from "react-redux";
import { tabGroupData } from "../../TabGroup/data";
import OptionGroup from "../../../Molecules/OptionGroup/OptionGroup";
import ImagePoll from "./ImagePoll";
import TextDefault from "../../../Molecules/TextDefault/TextDefault";
import Footer from "../../../Molecules/Footer/Footer";
import { postAdding } from "../../../../features/picklyPosts/picklyPostsSlice";

const PostType = ({ active, setActive }) => {
  const [data, setData] = useState(tabGroupData());
  const dispatch = useDispatch();
  const addPost = () => {
    let postType = "";
    data.map((tap) => {
      if (tap.active === true) {
        postType = tap.content;
      }
    });
    dispatch(postAdding({ type: postType }));
    setActive(false);
  };
  return (
    <div
      className={`flex flex-col z-10 absolute left-1/2 transform -translate-x-2/4 ${
        active ? "-translate-y-0.5 top-1/2" : "-translate-y-full bottom-1/2"
      } transition-all duration-200 ease-out`}
      data-testid="postType"
    >
      <div className="md:bg-white md:shadow-soft rounded-t-md border-b border-grey-shd6 flex flex-col p-m">
        <div className="mb-m flex items-center">
          <Avatar size="md" />
          <TabGroup data={data} setData={setData} />
        </div>
        {data.map((tab, i) => {
          if (tab.active) {
            switch (tab.content) {
              case "Image Poll":
                return <ImagePoll key={i} />;
              case "Text Poll":
                return <TextDefault key={i} />;
              case "Mini survey":
                return <OptionGroup key={i} />;
              default:
                return tab;
            }
          }
          return true;
        })}
        <div className="h-32 md:hidden w-full bg-transparent"></div>
      </div>
      <div className="md:bg-white md:shadow-soft md:rounded-b-md border-b border-grey-shd6 md:border-none flex p-m md:mb-10">
        <div className="flex justify-between w-full">
          <Footer addPost={addPost} />
        </div>
      </div>
      <div className="flex md:hidden p-m mb-10 w-full justify-between">
        <button className="bg-white text-error text-sm font-medium py-1.5 px-xl rounded-full">
          Cancel
        </button>
        <button className="bg-primary opacity-25 pointer-events-none text-white font-medium text-sm py-1.5 px-24 rounded-full">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostType;
