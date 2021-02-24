import React from "react";
import Header from "../../Atoms/Header/Header";
import OneImage from "../../Atoms/OneImage";
import Footer from "../../Atoms/ImagePollFooter/Footer";
const ViewOneImagePoll = ({ post }) => {
  const { name, date, caption, image, label } = post;

  return (
    <div
      data-testid="post"
      className="flex items-center flex-wrap w-4/2 flex-col"
    >
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header name={name} date={date} />
        <OneImage
          caption={caption}
          image={image}
          label={label}
          casePost="result"
        />

        <Footer footerContent="120 Voters" />
      </div>
    </div>
  );
};

export default ViewOneImagePoll;
