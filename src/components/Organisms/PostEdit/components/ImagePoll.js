import React, { useState, useEffect } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";
import FormInput from "../../../Atoms/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { addImagePollPostTitle } from "../../../../features/picklyPosts/picklyPostsSlice";

const ImagePoll = () => {
  const [files, setFiles] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [deletePressed, setDeletePressed] = useState(false);
  const imagesInfo = useSelector(
    (state) => state.picklyPosts.postEdit.imagePoll.imagesInfo
  );
  const generateRandomID = () => {
    let randomNumber = Math.random() * 1000000000;
    let randomID = Math.round(randomNumber);
    return randomID;
  };
  useEffect(() => {
    if (deletePressed) {
      setDeletePressed(false);
      console.log(imagesInfo);
      // setFiles(
      //   files.filter((file) => {
      //     imagesInfo.forEach((imageInfo) => {
      //       if (imageInfo.imageId === file.imageId) {
      //         return true
      //       }
      //     });
      //     return false;
      //   })
      // );
    }
  }, [deletePressed]);

  const dispatch = useDispatch();
  const changeHandler = (e) => {
    let newUploadedFiles = [...e.target.files];
    let newUloadedFilesWithId = newUploadedFiles.map((newUploadedFile) => {
      return { file: newUploadedFile, imageId: `img_${generateRandomID()}` };
    });
    // console.log(newUloadedFilesWithId);
    // let newFiles = newUloadedFilesWithId.filter(({ imageId }) => {
    //    console.log(imageId);
    //   for (let i = 0; i < files.length; i++) {
    //     console.log("imageId: ", imageId);
    //     console.log(`files[${i}].imageId: ${files[i].imageId}`);
    //     if (imageId === files[i].imageId) {
    //       return false;
    //     }
    //   }
    //   return true;
    // });

    setFiles((prev) => [...prev, ...newUloadedFilesWithId]);
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
          setInputVal={setInputVal}
        />
      </div>
      <div className={imgClasses}>
        {files.map((file, index) => {
          const letter = letters[index];
          return (
            <ImagePost
              key={index}
              alpha={letter}
              file={file}
              setDeletePressed={setDeletePressed}
            />
          );
        })}
      </div>
      <ImageUpload changed={changeHandler} />
    </>
  );
};

export default ImagePoll;
