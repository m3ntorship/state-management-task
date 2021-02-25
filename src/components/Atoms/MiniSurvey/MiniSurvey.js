import React from "react";
import imagePost from "../../../img/Frame 145.png";
import OptionOfSurvey from "../../Atoms/OptionOfSurvey/OptionOfSurvey";
function MiniSurvey(props) {
  const { image = imagePost, miniSurvey = [] } = props;
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <div>
      <div className=" grid gap-x-2 gap-y-4 mb-m rounded-md relative">
        <div className=" mb-m relative rounded-md overflow-hidden">
          <img
            src={image}
            alt="post"
            className="md:w-37xl"
            style={{ width: "600px", height: "450px" }}
          />
        </div>
      </div>
      {miniSurvey.map((MiniSurveyOption) => (
        <div key={MiniSurveyOption.id}>
          <h3 className="text-sm font-normal text-dark-grey mb-xs w-full">
            {MiniSurveyOption.optionName}
          </h3>
          {MiniSurveyOption.optionInpVals.map((optionsInpVal, index) => {
            const letter = letters[index];
            return (
              <OptionOfSurvey
                alpha={letter}
                index={index}
                optionsInpVal={optionsInpVal}
                key={optionsInpVal}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default MiniSurvey;
