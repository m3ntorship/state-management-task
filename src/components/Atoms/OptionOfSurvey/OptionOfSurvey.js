import React from "react";

const OptionOfSurvey = ({ optionsInpVal, alpha }) => {
  return (
    <div
      key={optionsInpVal}
      className="bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md  "
    >
      <div className=" bg-white py-0.5 px-xs rounded-sm  mr-s">
        <h3 className="text-sm text-dark-grey font-normal leading-snug  ">
          {alpha}
        </h3>
      </div>
      <h3 className="text-sm font-normal text-dark">{optionsInpVal}</h3>
    </div>
  );
};

export default OptionOfSurvey;
