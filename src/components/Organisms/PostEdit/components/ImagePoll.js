import React, { useState } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";
import conditionalProperties from "classnames";

const ImagePoll = ({ postIsAdded }) => {
  const [files, setFIles] = useState([]);
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
      <div className={imgClasses}>
        {files.map((file, index) => {
          const letter = letters[index];
          return (
            <ImagePost
              key={index}
              alpha={letter}
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
