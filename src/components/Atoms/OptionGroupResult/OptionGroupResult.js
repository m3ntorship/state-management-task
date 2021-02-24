import React from 'react'
import conditionalProperties from "classnames";

const OptionGroupResult=({maxProgress,option,index,alpha}) =>{
    const divClasses = conditionalProperties(
        "flex justify-between items-center  p-xs mb-xs rounded-md ",
        {
          "bg-primary": maxProgress === option.progress,
          "bg-primary-shd7": maxProgress !== option.progress,
        }
      );
      const textFontClasses = conditionalProperties(
        "text-base font-medium ",
        {
          "text-white": maxProgress === option.progress,
          "text-dark": maxProgress !== option.progress,
        }
      );
      const optionFontClasses = conditionalProperties(
        "text-sm font-normal  mr-xs ",
        {
          "text-white": maxProgress === option.progress,
          "text-dark": maxProgress !== option.progress,
        }
      );
      const div_width = option.progress > 21 ? option.progress : 21;
      return (
        <div className="w-37xl " key={`index${index}`}>
          <div className={divClasses} style={{ width: `${div_width}%` }}>
            <div className="flex items-center">
              <div className=" bg-white py-0.5 px-xs rounded-sm  mr-s">
                <h3 className="text-sm  text-dark-grey font-normal leading-snug  ">
                  {alpha}
                </h3>
              </div>

              <h3 className={optionFontClasses}>{option.inptField}</h3>
            </div>
            <h3 className={textFontClasses}>
              {maxProgress === option.progress ? "🌟" : null}{" "}
              {option.progress} %
            </h3>
          </div>
        </div>
      );
}

export default OptionGroupResult
