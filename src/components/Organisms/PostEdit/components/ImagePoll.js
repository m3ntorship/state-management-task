import React, { useState, useEffect } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";
import { useDispatch } from "react-redux";
import FormInput from "../../../Atoms/FormInput/FormInput";
import { addImagePoll } from "../../../../features/picklyPosts/picklyPostsSlice";

const ImagePoll = () => {
  const [files, setFIles] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (e) => {
    setFIles([...e.target.files]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addImagePoll({ postTitle: inputVal }));
  }, [inputVal]);

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
        />
      </div>
      <div className={imgClasses}>
        {files.map((file, index) => {
          const letter = letters[index];
          return (
            <ImagePost key={index} index={index} alpha={letter} file={file} />
          );
        })}
      </div>
      <ImageUpload changed={changeHandler} />
    </>
  );
};

export default ImagePoll;
