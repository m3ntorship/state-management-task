import React from "react";

const PrefixIcons = ({ prefix, prefixDrop, withLabel }) => {
  const prefixSpan = (
    <span
      className={`absolute ${
        withLabel ? "top-10" : "top-4"
      } left-3 opacity-50 font-normal text-sm text-grey`}
    >
      +20
    </span>
  );
  const devider = (
    <div
      className={`absolute ${
        withLabel ? "top-10" : "top-4"
      } left-3 opacity-50 w-px h-4 bg-grey-shd6 ${prefix ? "ml-xl" : "ml-10"}`}
    ></div>
  );
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
            className={`absolute ${
              withLabel ? "top-10" : "top-4"
            } left-9 opacity-50`}
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
