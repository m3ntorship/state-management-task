import React, { useState } from "react";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";

const ImagePoll = () => {
  const [files, setFIles] = useState([]);
  const changeHandler = (e) => {
    setFIles([...e.target.files]);
  };
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <>
      <div
        className={`grid gap-x-2 gap-y-4 ${
          files.length === 0 ? "" : "mb-m"
        } rounded-md relative`}
      >
        {files.map((file, index) => {
          const letter = letters[index];
          return <ImagePost key={index} alpha={letter} file={file} />;
        })}
      </div>
      <ImageUpload changed={changeHandler} />
    </>
  );
};



export default ImagePoll;
