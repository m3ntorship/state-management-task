import React, { useState, useEffect } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";
import FormInput from "../../../Atoms/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addImagePollPostTitle,
  deleteImage,
} from "../../../../features/picklyPosts/picklyPostsSlice";
import DisplayImagePost from "./ImagePostFirst";

const ImagePoll = () => {
  const [files, setFiles] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [deletedImageId, setDeletedImageId] = useState("");
  const imagePoll = useSelector(
    (state) => state.picklyPosts.postEdit.imagePoll
  );
  const [deleteImageButtonPressed, setDeleteImageButtonPressed] = useState(
    false
  );
  const generateRandomID = () => {
    let randomNumber = Math.random() * 1000000000;
    let randomID = Math.round(randomNumber);
    return randomID;
  };
  useEffect(async () => {
    let testfiles = [];
    if (!files[0]) {
      await imagePoll.imagesInfo.forEach((imageInfo) => {
        if (imageInfo.imageUploaded) {
          testfiles.push({
            file: imageInfo.fileUrl,
            imageId: imageInfo.imageId,
            imageUploaded: imageInfo.imageUploaded,
          });
        } else {
          handleDelete(imageInfo.imageId);
        }
      });
    }
    setFiles(testfiles);
    setInputVal(imagePoll.postTitle);
  }, []);
  const handleDelete = (imageId) => {
    setDeletedImageId(imageId);
    setDeleteImageButtonPressed(true);
    dispatch(deleteImage({ imageId }));
  };
  useEffect(() => {
    setFiles(
      files.map((file) => {
        for (let i = 0; i < imagePoll.imagesInfo.length; i++) {
          if (imagePoll.imagesInfo[i].imageId === file.imageId) {
            return {
              ...file,
              imageUploaded: imagePoll.imagesInfo[i].imageUploaded,
            };
          }
        }
        return file;
      })
    );
  }, [imagePoll.imagesInfo]);

  useEffect(() => {
    setFiles(
      files.filter((file) => {
        return file.imageId !== deletedImageId;
      })
    );
    setDeletedImageId("");
    setDeleteImageButtonPressed(false);
  }, [deleteImageButtonPressed]);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    if (e.target.files.length + files.length > 4) {
      alert("You Can only upload up to 4 images");
    } else {
      let newUploadedFiles = [...e.target.files];
      let newUloadedFilesWithId = newUploadedFiles.map((newUploadedFile) => {
        return { file: newUploadedFile, imageId: `img_${generateRandomID()}` };
      });

      setFiles((prev) => [...prev, ...newUloadedFilesWithId]);
    }
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
          blur={() => dispatch(addImagePollPostTitle(inputVal))}
          withLabel={false}
          inputVal={inputVal}
          changed={(e) => {
            setInputVal(e.target.value);
          }}
          setInputVal={setInputVal}
        />
      </div>
      <div className={imgClasses}>
        {files.map((file, index) => {
          const letter = letters[index];
          let imageCaption = "";
          if (file.imageUploaded) {
            imagePoll.imagesInfo.forEach((image) => {
              if (image.imageId === file.imageId) {
                imageCaption = image.imageCaption;
              }
            });
            return (
              <DisplayImagePost
                imagesNumber={files.length}
                key={index}
                alpha={letter}
                imageCaption={imageCaption}
                file={file}
                handleDelete={handleDelete}
              />
            );
          } else {
            return (
              <ImagePost
                imagesNumber={files.length}
                key={index}
                alpha={letter}
                file={file}
                handleDelete={handleDelete}
              />
            );
          }
        })}
      </div>
      {files.length < 4 ? (
        <ImageUpload changed={changeHandler} />
      ) : (
        <h2 className="text-error-shd4 text-center">
          You can only upload 4 images
        </h2>
      )}
    </>
  );
};

export default ImagePoll;
