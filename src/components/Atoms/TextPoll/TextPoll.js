import React from "react";
import OptionOfSurvey from "../../Atoms/OptionOfSurvey/OptionOfSurvey";
function TextPoll({ favourites = [] }) {
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <>
      {favourites.map((optionsInpVal, index) => {
        const letter = letters[index];
        return (
          <OptionOfSurvey
            optionsInpVal={optionsInpVal}
            index={index}
            alpha={letter}
            key={letter}
          />
        );
      })}
    </>
  );
}

export default TextPoll;
