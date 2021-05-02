import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../../Atoms/FormInput/FormInput";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";
import {
  addImagePollPostTitle,
  deleteImage,
} from "../../../../features/picklyPosts/picklyPostsSlice";

const ImagePoll = () => {
  const [inputVal, setInputVal] = useState("");
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const imagePoll = useSelector(
    (state) => state.picklyPosts.postEdit.imagePoll
  );

  useEffect(() => {
    let storagefiles = [];
    if (!files.length) {
      imagePoll.imagesInfo.forEach((imageInfo) => {
        if (!imageInfo.imageUploaded) {
          dispatch(deleteImage(imageInfo.imageId));
        } else {
          storagefiles.push({
            imageId: imageInfo.imageId,
            fileSrc: imageInfo.fileUrl,
            caption: imageInfo.imageCaption,
          });
        }
      });
    }
    setFiles(storagefiles);
    setInputVal(imagePoll.postTitle);
  }, []);
  const randId = () => {
    return Math.floor(Math.random() * 123456789);
  };
  const changeHandler = (e) => {
    if (e.target.files.length + files.length > 4) {
      alert("You can upload up to 4 images");
    } else {
      let uploadedFiles = [...e.target.files];
      let uploadedFilesWId = uploadedFiles.map((uploadedFile) => {
        return { imageId: randId(), file: uploadedFile };
      });
      setFiles((prev) => [...prev, ...uploadedFilesWId]);
    }
  };

  const deleteHandler = (id) => {
    setFiles(
      files.filter((file) => {
        return file.imageId !== id;
      })
    );
    dispatch(deleteImage({ id }));
  };
  const imgClasses = conditionalProperties(
    "grid-img-upload grid gap-x-2 gap-y-4 rounded-md relative",
    {
      "mb-m": files.length !== 0,
    }
  );
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <>
      <div className="mb-m">
        <FormInput
          withLabel={false}
          inputVal={inputVal}
          setInputVal={setInputVal}
          changed={(e) => {
            setInputVal(e.target.value);
          }}
          blur={() => dispatch(addImagePollPostTitle(inputVal))}
        />
      </div>
      <div className={imgClasses}>
        {files.map((file, index) => {
          const letter = letters[index];
          return (
            <ImagePost
              imagePoll={imagePoll.imagesInfo}
              key={index}
              alpha={letter}
              file={file}
              fileSrc={file.fileSrc}
              captionValue={file.caption}
              imagesNumber={files.length}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
      {files.length < 4 && <ImageUpload changed={changeHandler} />}
    </>
  );
};

export default ImagePoll;
