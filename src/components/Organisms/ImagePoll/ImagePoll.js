import React from "react";
import Header from "../../Atoms/Header/Header";
import PostTitle from "../../Atoms/PostTitle/PostTitle";
import ImagePoll from "../../Atoms/ImagePoll/ImagePoll";
import Footer from "../../Atoms/ImagePollFooter/Footer";

const ViewImagePoll = () => {
  return (
    <div className="  flex items-center flex-wrap w-4/2 flex-col mt-m ">
      <div className=" bg-white shadow-dark rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <PostTitle />
        <ImagePoll />
        <Footer />
      </div>
    </div>
  );
};

export default ViewImagePoll;
