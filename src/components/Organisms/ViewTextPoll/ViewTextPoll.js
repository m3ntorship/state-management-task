import React from "react";
import Header from "../../Atoms/Header/Header";
import PostTitle from "../../Atoms/PostTitle/PostTitle";
import TextPoll from "../../Atoms/TextPoll/TextPoll";
import Footer from "../../Atoms/ImagePollFooter/Footer";

function ViewTextPoll() {
  return (
    <div className="  flex items-center flex-wrap w-4/2 flex-col mt-m ">
      <div className=" bg-white shadow-dark rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <PostTitle  postTitle="Which is easier to learn?"/>
        <TextPoll favourites={["red","White","pink"]} />
        <Footer />
      </div>
    </div>
  );
}

export default ViewTextPoll;
