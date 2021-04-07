import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImagePollImageCaption } from "../../../../features/picklyPosts/picklyPostsSlice";

// return data, progress, uploaded
const DisplayImagePost = ({
  alpha,
  file: { file, imageId },
  handleDelete,
  imagesNumber,
  imageCaption,
}) => {
  const [fileUrl, setfileUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");
  const dispatch = useDispatch();

  // Transfrom images to  base64
  useEffect(() => {
    if (file.type) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function (e) {
        setfileUrl(e.target.result);
      });
      setImgCaption(imageCaption);
    } else {
      setfileUrl(file);
      setImgCaption(imageCaption);
    }
  }, [file]);
  // console.log("First");
  // console.log("fileHere: ", file);

  // useEffect(() => {}, []);
  // Upload Image to server
  return (
    <div className="flex flex-col">
      {/*
       */}
      <div className="relative">
        <h2
          className=" w-5 h-5 flex justify-center items-center absolute text-black bg-white rounded-full top-5 right-5 cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => {
            handleDelete(imageId);
          }}
        >
          <span>x</span>
        </h2>

        <img
          src={fileUrl}
          alt="fashion"
          className={`${
            imagesNumber === 1 ? "w-full max-h-96" : "md:w-96 h-72"
          } `}
        />
      </div>

      <div className="relative mt-xxs">
        <input
          className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 bg-transparent md:bg-white py-2.5 pr-m pl-11 text-sm font-normal text-grey-shd1 w-full rounded-b-md focus:outline-none"
          type="text"
          onChange={(e) => setImgCaption(e.target.value)}
          value={imgCaption}
          onBlur={() =>
            dispatch(addImagePollImageCaption({ imgCaption, imageId }))
          }
          placeholder="Type caption (optional)"
        />
        <div className="bg-grey-shd7 py-0.5 px-xs rounded-sm absolute top-2 left-2">
          <h3 className="text-sm text-grey font-normal leading-snug">
            {alpha}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DisplayImagePost;
