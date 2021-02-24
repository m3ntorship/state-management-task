import React from "react";
import imagePost from "../../../img/post-img.jpg";
import Progress from "../../Atoms/Progress/Progress";
function ImagePollResult(props) {
  const { image = imagePost, label = "image Caption" } = props;
  return (
    <div className="grid grid-img-upload  w-37xl gap-2 gap-x-2 gap-y-4 mb-m">
      <div className=" relative rounded-md overflow-hidden">
        <img src={image} alt="post" className=" relative" />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="flex items-start">
            <p className="bg-white py-xxs font-sans font-light text-b px-xsvv rounded-tl-md rounded-bl-md">
              {10}%
            </p>
            <div className="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
              <Progress progress={10} />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative rounded-md overflow-hidden">
        <img src={image} alt="post" />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="flex items-start">
            <p className="bg-white py-xxs font-sans font-light text-b px-xsvv rounded-tl-md rounded-bl-md">
              {20}%
            </p>
            <div className="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
              <Progress progress={20} disabled={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative   rounded-md overflow-hidden">
        <img src={image} alt="post" className=" relative" />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="flex items-start">
            <p className="bg-white py-xxs font-sans font-light text-b px-xsvv rounded-tl-md rounded-bl-md">
              {10}%
            </p>
            <div className="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
              <Progress progress={15} />
            </div>
          </div>
        </div>
      </div>
      <div className="  relative rounded-md overflow-hidden">
        <img src={image} alt="post" />
        <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
          {label}
        </div>
        <div className="absolute bottom-4 right-4 flex">
          <div className="flex items-start">
            <span className="bg-white py-xxs px-xsvv  font-sans font-light text-base rounded-tl-md rounded-bl-md">
              {70}%
            </span>
            <div className="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
              <Progress progress={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePollResult;
