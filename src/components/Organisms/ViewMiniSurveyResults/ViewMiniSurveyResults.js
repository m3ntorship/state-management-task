import React from "react";
import Header from "../../Atoms/Header/Header";
import PostTitle from "../../Atoms/PostTitle/PostTitle";
import MiniSurveyResults from "../../Atoms/MiniSurveyResults/MiniSurveyResults";
import Footer from "../../Atoms/ImagePollFooter/Footer";

function ViewMiniSurveyResults() {
    return (
        <div className="  flex items-center flex-wrap w-4/2 flex-col mt-m ">
        <div className=" bg-white shadow-dark rounded-md flex flex-col items-center p-m mb-10">
          <Header />
          <PostTitle />
          <MiniSurveyResults />
          <Footer />
        </div>
      </div>
    )
}

export default ViewMiniSurveyResults
