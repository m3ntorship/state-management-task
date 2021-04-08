import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../../../Atoms/Progress/Progress";
import { useDispatch, useSelector } from "react-redux";
import {
  addImagePollImageSrc,
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
      })
      .catch(console.error);
  }, [file]);
  return { response, progress, uploaded, setUploaded };
};
// return data, progress, uploaded
const ImagePost = ({ file: { file, imageId } }) => {
  // States
  const imagesState = useSelector(
    (state) => state.picklyPosts.postEdit.imagePoll.imagesInfo
  );
  const [fileUrl, setFileUrl] = useState("");
  // const [imgCaption, setImgCaption] = useState("");
  const { progress, response, uploaded, setUploaded } = useCloudinaryUploader(
    file
  );
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
  useEffect(() => {
    return () => {
      if (!uploaded) {
        setUploaded(true);
      }
    };
  }, [uploaded]);
  useEffect(() => {
    if (progress !== 100) {
      setUploaded(false);
    } else {
      dispatch(imageUploaded({ imageId }));
      setUploaded(true);
    }
  }, [response]);
  return (
    <div className="flex flex-col">
      {!uploaded && <Progress row progress={progress} />}
    </div>
  );
};

export default ImagePost;
