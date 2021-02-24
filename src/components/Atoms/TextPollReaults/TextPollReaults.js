import React from "react";
import OptionGroupResult from "../../Atoms/OptionGroupResult/OptionGroupResult";

const TextPollReaults = ({ favourites }) => {
  favourites = [
    { inptField: "red", progress: 20 },
    { inptField: "White", progress: 50},
    { inptField: "pink", progress: 30 },
  ];
  let maxProgress = Math.max.apply(
    Math,
    favourites.map(function (o) {
      return o.progress;
    })
  );
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();

  return (
    <>
      {favourites.map((option, index) => {
        const letter = letters[index];
     return  <OptionGroupResult key={`OptionGroupResult_${index}`} option={option} index={index} maxProgress={maxProgress} alpha={letter}/>
      })}
    </>
  );
};

export default TextPollReaults;
