import React from "react";

const Input = (props) => {
  const {
    leftIcon,
    rightIcon,
    prefix,
    prefixDrop,
    variant,
    disabled,
    click,
    setHover,
    placeholder,
  } = props;
  return (
    <input
      className={`w-33xl py-2.5 pr-m ${
        leftIcon
          ? !rightIcon
            ? "pl-9"
            : "pl-m"
          : prefix
          ? "pl-3xl"
          : prefixDrop
          ? "pl-4xl"
          : "pl-m"
      } text-sm text-grey-shd1 font-normal border rounded-md hover:border-grey-shd2 focus:text-dark-grey ${
        variant === "error"
          ? "border-error focus:border-error"
          : variant === "success"
          ? "border-success focus:border-success"
          : "border-grey-shd5 focus:border-dark"
      } focus:outline-none ${
        disabled ? "pointer-events-none opacity-50 border border-grey-shd5" : ""
      }`}
      type="text"
      placeholder={placeholder}
      onClick={click}
      onMouseEnter={() => (leftIcon ? setHover(true) : null)}
      onMouseLeave={() => (leftIcon ? setHover(false) : null)}
    />
  );
};

export default Input;
