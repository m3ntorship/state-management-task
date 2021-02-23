import React from "react";
import PropTypes from "prop-types";
import conditionalProperties from "classnames";
import filled from "../../../img/large-avatar.png";
import anon from "../../../img/large-anan.png";
import user from "../../../img/large-notfilled.png";

const Button = (props) => {
  const { variant = "filled", size = "lg" } = props;
  const imgClasses = conditionalProperties("mr-m", {
    "w-10": size === "md",
    "w-8": size === "sm",
    "w-14": size === "lg",
  });
  const variants = conditionalProperties({
    user: variant === "user",
    anon: variant === "anon",
    filled: variant === "filled",
  });
  return (
    <img
      className={imgClasses}
      src={variant === "user" ? user : variant === "anon" ? anon : filled}
      alt={variants}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "anon", "user"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
