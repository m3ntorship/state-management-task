import React from "react";
import PropTypes from "prop-types";
import conditionalProperties from "classnames";

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
  const buttonWithOnlyIcon = conditionalProperties({
    "p-xs text-base font-medium": size === "md",
    "p-xs text-sm font-medium": size === "sm",
    "p-s text-md font-bold": size === "lg",
  });
  const buttonWithoutOnlyIcon = conditionalProperties({
    "py-xs px-l text-base font-medium": size === "md",
    "py-1.5 px-m text-sm font-medium": size === "sm",
    "py-m px-xl text-md font-bold": size === "lg",
  });
  const buttonClasses = conditionalProperties(
    "rounded-full focus:outline-none ml-4 mt-4 focus:border-2 focus:border-dark-btnFocus",
    {
      "bg-white hover:bg-grey-bg border border-primary focus:border-primary text-primary":
        variant === "secondary",
      "bg-none text-accent hover:text-accent-hover focus:underline":
        variant === "text",
      "bg-primary hover:bg-primary-hover text-white": variant === "primary",
      "opacity-25 pointer-events-none": disabled,
      [buttonWithOnlyIcon]: onlyIcon,
      [buttonWithoutOnlyIcon]: !onlyIcon,
    }
  );
  const svgSizeWithOnlyIcon = conditionalProperties({
    16: size === "sm",
    24: size === "md",
    32: size === "lg",
  });
  const svgSizeWithoutOnlyIcon = conditionalProperties({
    16: size === "md" || size === "sm",
    24: size === "lg",
  });

  const svgClasses = conditionalProperties("inline-block", {
    "mr-xxs": !onlyIcon && rightIcon,
    "ml-xxs": !onlyIcon && leftIcon,
  });

  const svgSize = conditionalProperties({
    [svgSizeWithOnlyIcon]: onlyIcon,
    [svgSizeWithoutOnlyIcon]: !onlyIcon,
  });

  const svgFill = conditionalProperties({
    "#7048E8": variant === "secondary",
    "#00A8E8": variant === "text",
    white: variant === "primary",
  });
  return (
    <button className={buttonClasses}>
      {rightIcon ? (
        <svg
          className={svgClasses}
          width={svgSize}
          height={svgSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={svgFill}
          ></path>
        </svg>
      ) : null}
      {onlyIcon ? null : children}
      {leftIcon ? (
        <svg
          className={svgClasses}
          width={svgSize}
          height={svgSize}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill={svgFill}
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
