import React from "react";
import Header from "../../Atoms/Header/Header";
import PostTitle from "../../Atoms/PostTitle/PostTitle";
import ImagePollResult from "../../Atoms/ImagePollResult/ImagePollResult";
import Footer from "../../Atoms/ImagePollFooter/Footer";
function ViewImagePollResult() {
  return (
    <div className="  flex items-center flex-wrap w-4/2 flex-col mt-m ">
      <div className=" bg-white shadow-dark rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <PostTitle />
        <ImagePollResult />
        <Footer />
      </div>
    </div>
  );
}

export default ViewImagePollResult;
