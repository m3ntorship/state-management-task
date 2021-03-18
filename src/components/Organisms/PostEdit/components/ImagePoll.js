import React, { useState } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";
import FormInput from "../../../Atoms/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { addImagePollPostTitle } from "../../../../features/picklyPosts/picklyPostsSlice";

const ImagePoll = ({ postIsAdded }) => {
  const [files, setFIles] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setFIles([...e.target.files]);
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
              id={index}
              file={file}
              postIsAdded={postIsAdded}
            />
          );
        })}
      </div>
      <ImageUpload changed={changeHandler} />
    </>
  );
};

export default ImagePoll;
