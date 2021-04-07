import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../../../Atoms/Progress/Progress";
import { useDispatch, useSelector } from "react-redux";
import {
  addImagePollImageSrc,
  addImagePollImageCaption,
  imageUploaded,
} from "../../../../features/picklyPosts/picklyPostsSlice";

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
  file: { file, imageId },
  handleDelete,
  imagesNumber,
}) => {
  // States
  const imagesState = useSelector(
    (state) => state.picklyPosts.postEdit.imagePoll.imagesInfo
  );
  const [fileUrl, setFileUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");
  const { progress, uploaded, setUploaded, response } = useCloudinaryUploader(
    file
  );
  const dispatch = useDispatch();
  // console.log("ImagePost");
  // Transfrom images to  base64
  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", function (e) {
      setFileUrl(e.target.result);
    });
  }, [file]);
  useEffect(() => {
    let alreadyuploaded = false;
    imagesState.forEach((image) => {
      if (image.imageId === imageId) {
        alreadyuploaded = true;
      }
    });
    if (fileUrl && !alreadyuploaded) {
      alreadyuploaded = false;
      dispatch(
        addImagePollImageSrc({
          fileUrl,
          imageId,
          imageCaption: "",
          imageUploaded: false,
        })
      );
    }
  }, [fileUrl]);
  // Upload Image to server
  useEffect(() => {
    // console.log("HERE");
    if (progress !== 100) {
      setUploaded(false);
    } else {
      dispatch(imageUploaded({ imageId }));
      setUploaded(true);
    }
  }, [response]);
  return (
    <div className="flex flex-col">
      {uploaded ? (
        <>
          <img
            src={fileUrl}
            alt="fashion"
            className={`${
              imagesNumber === 1 ? "max-w-96   max-h-96" : "md:w-96 h-72"
            } `}
          />
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
          <button
            onClick={() => {
              handleDelete(imageId);
            }}
            className="bg-primary cursor-pointer"
          >
            Delete
          </button>
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
