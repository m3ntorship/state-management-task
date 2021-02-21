import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    children,
    disabled = false,
    variant = "primary",
    size = "lg",
    leftIcon = false,
    rightIcon = false,
    onlyIcon = false,
  } = props;
  let button = "";
  let iconSize = "";
  if (onlyIcon) {
    if (size === "md") {
      button = "p-xs text-base font-medium";
    } else if (size === "sm") {
      button = "p-xs text-sm font-medium";
    } else {
      button = "p-s text-md font-bold";
    }
  } else {
    if (size === "md") {
      button = "py-xs px-l text-base font-medium";
    } else if (size === "sm") {
      button = "py-1.5 px-m text-sm font-medium";
    } else {
      button = "py-m px-xl text-md font-bold";
    }
  }
  if (onlyIcon) {
    if (size === "md") {
      iconSize = "24";
    } else if (size === "sm") {
      iconSize = "16";
    } else {
      iconSize = "32";
    }
  } else {
    if (size === "md" || size === "sm") {
      iconSize = "16";
    } else {
      iconSize = "24";
    }
  }
  return (
    <button
      className={`rounded-full focus:outline-none ml-4 mt-4 focus:border-2 focus:border-dark-btnFocus ${
        variant === "secondary"
          ? "bg-white hover:bg-grey-bg border border-primary focus:border-primary text-primary"
          : variant === "text"
          ? "bg-none text-accent hover:text-accent-hover focus:underline"
          : "bg-primary hover:bg-primary-hover text-white"
      } ${button} ${disabled ? "opacity-25 pointer-events-none" : ""}`}
    >
      {rightIcon ? (
        <svg
          className={`${onlyIcon ? null : "mr-xxs"} inline-block`}
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={`${
              variant === "secondary"
                ? "#7048E8"
                : variant === "text"
                ? "#00A8E8"
                : "white"
            }`}
          ></path>
        </svg>
      ) : null}
      {onlyIcon ? null : children}
      {leftIcon ? (
        <svg
          className={`${onlyIcon ? null : "ml-xxs"} inline-block`}
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={`${
              variant === "secondary"
                ? "#7048E8"
                : variant === "text"
                ? "#00A8E8"
                : "white"
            }`}
          ></path>
        </svg>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  onlyIcon: PropTypes.bool,
};

export default Button;
