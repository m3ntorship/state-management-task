import React from "react";

const Variants = ({ variant, focus, rightIcon, leftIcon, withLabel }) => {
  return (
    <>
      {variant === "error" ? (
        <svg
          className={`${
            focus
              ? `block absolute ${withLabel ? "top-10" : "top-4"} ${
                  rightIcon ? (!leftIcon ? "right-10" : "right-3") : "right-3"
                }`
              : "hidden"
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.96883 1.33337C4.31016 1.33337 1.3335 4.32404 1.3335 8.00004C1.3335 11.676 4.32416 14.6667 8.00016 14.6667C11.6762 14.6667 14.6668 11.676 14.6668 8.00004C14.6668 4.32404 11.6622 1.33337 7.96883 1.33337ZM8.00016 13.3334C5.0595 13.3334 2.66683 10.9407 2.66683 8.00004C2.66683 5.05937 5.04483 2.66671 7.96883 2.66671C10.9275 2.66671 13.3335 5.05937 13.3335 8.00004C13.3335 10.9407 10.9408 13.3334 8.00016 13.3334Z"
            fill="#FE544A"
          ></path>
          <path
            d="M7.3335 4.66663H8.66683V9.33329H7.3335V4.66663ZM7.3335 9.99996H8.66683V11.3333H7.3335V9.99996Z"
            fill="#FE544A"
          ></path>
        </svg>
      ) : variant === "success" ? (
        <svg
          className={`${
            focus
              ? `block absolute ${withLabel ? "top-10" : "top-4"} ${
                  rightIcon ? (!leftIcon ? "right-10" : "right-3") : "right-3"
                }`
              : "hidden"
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z"
            fill="#07B255"
          ></path>
        </svg>
      ) : (
        <svg
          className={`${
            focus
              ? `block absolute ${withLabel ? "top-10" : "top-4"} ${
                  rightIcon ? (!leftIcon ? "right-10" : "right-3") : "right-3"
                }`
              : "hidden"
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00016 1.33331C4.32416 1.33331 1.3335 4.32398 1.3335 7.99998C1.3335 11.676 4.32416 14.6666 8.00016 14.6666C11.6762 14.6666 14.6668 11.676 14.6668 7.99998C14.6668 4.32398 11.6762 1.33331 8.00016 1.33331ZM10.8048 9.86198L9.86216 10.8046L8.00016 8.94265L6.13816 10.8046L5.1955 9.86198L7.0575 7.99998L5.1955 6.13798L6.13816 5.19531L8.00016 7.05731L9.86216 5.19531L10.8048 6.13798L8.94283 7.99998L10.8048 9.86198Z"
            fill="#8D9A9E"
          ></path>
        </svg>
      )}
    </>
  );
};

export default Variants;
