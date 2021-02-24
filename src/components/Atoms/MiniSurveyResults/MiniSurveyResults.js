import React from "react";
import imagePost from "../../../img/Frame 145.png";
import OptionGroupResult from "../../Atoms/OptionGroupResult/OptionGroupResult";
const  MiniSurveyResults=(props)=> {
  const Options = [
    {
      id: "1",
      optionName: "front",
      optionsInpVals: [
        { inptField: "react", progress: 75 },
        { inptField: "value", progress: 25 },
      ],
    },
    {
      id: "2",
      optionName: "back",
      optionsInpVals: [
        { inptField: "node", progress: 20 },
        { inptField: "express", progress: 50 },
        { inptField: "nested", progress: 30 },
      ],
    },
  ];
  const { image = imagePost, MiniSurveyOptions = Options } = props;
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <>
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

      {MiniSurveyOptions.map((MiniSurveyOption,index) => {
           let maxProgress = Math.max.apply(
            Math,
            MiniSurveyOption.optionsInpVals.map(function (o) {
              return o.progress;
            })
          );
         
     return   <div key={MiniSurveyOption.optionName}>
            
          <h3 className="text-sm font-normal text-dark mb-xs w-full">
            {MiniSurveyOption.optionName}
          </h3>
          {MiniSurveyOption.optionsInpVals.map((optionsInpVal, index) => {
            const letter = letters[index];
            return (
             <OptionGroupResult key={`OptionGroupResult_${index}_`} option={optionsInpVal} index={index} maxProgress={maxProgress} alpha={letter}/>
            );
          })}
        </div>
})}
    </>
  );
}

export default MiniSurveyResults;
