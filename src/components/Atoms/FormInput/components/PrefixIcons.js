import React from "react";
import conditionalProperties from "classnames";

const PrefixIcons = ({ prefix, prefixDrop, withLabel }) => {
  const spanClasses = conditionalProperties(
    "absolute left-3 opacity-50 font-normal text-sm text-grey",
    {
      "top-9": withLabel,
      "top-3": !withLabel,
    }
  );
  const divClasses = conditionalProperties(
    "absolute left-3 opacity-50 w-px h-4 bg-grey-shd6",
    {
      "top-9": withLabel,
      "top-3": !withLabel,
      "ml-xl": prefix,
      "ml-10": !prefix,
    }
  );
  const svgClasses = conditionalProperties("absolute left-9 opacity-50", {
    "top-9": withLabel,
    "top-3": !withLabel,
  });
  const prefixSpan = <span className={spanClasses}>+20</span>;
  const devider = <div className={divClasses}></div>;
  return (
    <>
      {prefix ? (
        <div className="prefix-container">
          {prefixSpan}
          {devider}
        </div>
      ) : null}
      {prefixDrop ? (
        <div className="prefix-container">
          {prefixSpan}
          <svg
            className={svgClasses}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.862 6.19537L7.99998 9.05737L5.13798 6.19537L4.19531 7.13804L7.99998 10.9427L11.8046 7.13804L10.862 6.19537Z"
              fill="#8D9A9E"
            ></path>
          </svg>
          {devider}
        </div>
      ) : null}
    </>
  );
};

export default PrefixIcons;
