import React from "react";

const SideIcons = ({ rightIcon, leftIcon, hover, focus, withLabel }) => {
  return (
    <>
      {rightIcon ? (
        !leftIcon ? (
          <svg
            className={`absolute ${withLabel ? "top-10" : "top-4"} right-3`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.862 6.19537L7.99998 9.05737L5.13798 6.19537L4.19531 7.13804L7.99998 10.9427L11.8046 7.13804L10.862 6.19537Z"
              fill="#94ACB5"
            ></path>
          </svg>
        ) : null
      ) : null}
      {leftIcon ? (
        !rightIcon ? (
          <svg
            className={`absolute ${withLabel ? "top-10" : "top-4"} left-3 ${
              hover ? "opacity-70" : "opacity-50"
            } ${focus ? "opacity-100" : "opacity-50"}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9998 8.66669H2.66647V10V13.3334C2.66647 14.0687 3.26447 14.6667 3.9998 14.6667H5.9998H9.9998H11.9998C12.7351 14.6667 13.3331 14.0687 13.3331 13.3334V10V8.66669H13.9998C14.2691 8.66669 14.5131 8.50402 14.6158 8.25536C14.7191 8.00602 14.6618 7.71936 14.4711 7.52869L8.47113 1.52869C8.21047 1.26802 7.78913 1.26802 7.52847 1.52869L1.52847 7.52869C1.3378 7.71936 1.28047 8.00602 1.3838 8.25536C1.48647 8.50402 1.73047 8.66669 1.9998 8.66669ZM6.66647 13.3334V10H9.33313V13.3334H6.66647ZM7.9998 2.94269L11.9998 6.94269V10L12.0005 13.3334H10.6665V10C10.6665 9.26469 10.0685 8.66669 9.33313 8.66669H6.66647C5.93113 8.66669 5.33313 9.26469 5.33313 10V13.3334H3.9998V10V8.00002V6.94269L7.9998 2.94269Z"
              fill="#5B6366"
            ></path>
          </svg>
        ) : null
      ) : null}
    </>
  );
};

export default SideIcons;
