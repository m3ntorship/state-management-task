import React from "react";
import conditionalProperties from "classnames";

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
    setInputVal,
    inputVal,
  } = props;

  const inputClasses = conditionalProperties(
    "w-33xl py-2.5 pr-m text-sm text-grey-shd1 font-normal border rounded-md hover:border-grey-shd2 focus:text-dark-grey focus:outline-none",
    {
      "pl-9": leftIcon && !rightIcon,
      "pl-m": (leftIcon && rightIcon) || (!leftIcon && !prefixDrop),
      "pl-3xl": !leftIcon && prefix,
      "pl-4xl": !leftIcon && prefixDrop,
      "border-error focus:border-error": variant === "error",
      "border-success focus:border-success": variant === "success",
      "border-grey-shd5 focus:border-dark":
        variant === "error" && variant === "success",
      "pointer-events-none opacity-50 border border-grey-shd5": disabled,
    }
  );

  return (
    <input
      data-variant={variant}
      data-testid="nile-input"
      className={inputClasses}
      type="text"
      placeholder={placeholder}
      onClick={click}
      onChange={(e) => setInputVal(e.target.value)}
      value={inputVal}
      onMouseEnter={() => (leftIcon ? setHover(true) : null)}
      onMouseLeave={() => (leftIcon ? setHover(false) : null)}
    />
  );
};

export default Input;
