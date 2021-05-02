import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../../../Atoms/Progress/Progress";
import {
  addImagePollImageSrc,
  addImagePollImageCaption,
  imageUploaded,
} from "../../../../features/picklyPosts/picklyPostsSlice";
import { useDispatch } from "react-redux";
import classnames from "classnames";

const useCloudinaryUploader = (file) => {
  const [response, setResponse] = useState({});
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  useEffect(() => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "picklyImgUplader");
    axios
      .post("https://api.cloudinary.com/v1_1/dou0yrmsb/image/upload", data, {
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      })
      .then((res) => {
        const data = res.data;
        setResponse(data);
        setUploaded(true);
      })
      .catch(console.error);
  }, [file]);
  return { response, progress, uploaded, setUploaded };
};
// return data, progress, uploaded
const ImagePost = ({
  alpha,
  file: { imageId, file },
  deleteHandler,
  fileSrc,
  captionValue,
  imagesNumber,
  // imagePoll,
}) => {
  // States
  const [fileUrl, setFileUrl] = useState("");
  const { progress, uploaded } = !fileSrc && useCloudinaryUploader(file);
  const [uploadeds, setUploadeds] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [captionVal, setCaptionVal] = useState("");
  const dispatch = useDispatch();

  !fileSrc &&
    useEffect(() => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", function (e) {
        setFileUrl(e.target.result);
      });
    }, [file]);

  useEffect(() => {
    if (fileUrl && !deleteClick) {
      dispatch(
        addImagePollImageSrc({
          imageId,
          imageCaption: "",
          imageUploaded: false,
          fileUrl,
        })
      );
    }
  }, [fileUrl]);
  useEffect(() => {
    dispatch(imageUploaded({ imageId }));
    return () => {
      if (!uploaded) {
        setUploadeds(true);
      }
    };
  }, [uploaded]);
  const imgStyle = classnames("object-cover", {
    "w-full max-h-96": imagesNumber === 1,
    "w-96 h-72": imagesNumber !== 1,
  });
  return (
    <div className="flex flex-col">
      {uploadeds || fileSrc ? (
        <>
          <div className="relative">
            <h2
              className=" w-5 h-5 flex justify-center items-center absolute text-black bg-white rounded-full top-5 right-5 cursor-pointer hover:bg-primary hover:text-white"
              onClick={() => {
                deleteHandler(imageId);
                setDeleteClick(true);
              }}
            >
              <span>x</span>
            </h2>
            {fileSrc ? (
              <img
                src={fileSrc}
                alt="fashion"
                width="344"
                className={imgStyle}
              />
            ) : (
              <img
                src={fileUrl}
                alt="fashion"
                width="344"
                className={imgStyle}
              />
            )}
          </div>
          <div className="relative mt-xxs">
            <input
              className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 bg-transparent md:bg-white py-2.5 pr-m pl-11 text-sm font-normal text-grey-shd1 w-full rounded-b-md focus:outline-none"
              type="text"
              placeholder="Type caption (optional)"
              value={captionValue ? captionValue : captionVal}
              onChange={(e) => setCaptionVal(e.target.value)}
              onBlur={() => {
                dispatch(
                  addImagePollImageCaption({
                    imageId,
                    imageCaption: captionVal,
                  })
                );
              }}
            />
            <div className="bg-grey-shd7 py-0.5 px-xs rounded-sm absolute top-2 left-2">
              <h3 className="text-sm text-grey font-normal leading-snug">
                {alpha}
              </h3>
            </div>
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center">
          <Progress row progress={progress} />
        </div>
      )}
    </div>
  );
};

export default ImagePost;
