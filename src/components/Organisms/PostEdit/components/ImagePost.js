import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../../../Atoms/Progress/Progress";
import { useDispatch } from "react-redux";
import { addImages } from "../../../../features/picklyPosts/picklyPostsSlice";

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
  return { response, progress, uploaded };
};
// return data, progress, uploaded
const ImagePost = ({ alpha, file, postIsAdded }) => {
  // States
  const [fileUrl, setFileUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");
  const { progress, uploaded } = useCloudinaryUploader(file);
  const dispatch = useDispatch();

  // Transfrom images to  base64
  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", function (e) {
      setFileUrl(e.target.result);
    });
  }, [file]);
  useEffect(() => {
    if (fileUrl) {
      dispatch(addImages(fileUrl, imgCaption));
    }
  }, [postIsAdded]);
  // Upload Image to server
  return (
    <div className="flex flex-col">
      {uploaded ? (
        <>
          <img src={fileUrl} alt="fashion" width="344" className="md:w-96" />
          <div className="relative mt-xxs">
            <input
              className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 bg-transparent md:bg-white py-2.5 pr-m pl-11 text-sm font-normal text-grey-shd1 w-full rounded-b-md focus:outline-none"
              type="text"
              onChange={(e) => setImgCaption(e.target.value)}
              value={imgCaption}
              placeholder="Type caption (optional)"
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
