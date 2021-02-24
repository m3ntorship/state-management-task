import React, { useState } from "react";
import PropTypes from "prop-types";
import conditionalProperties from "classnames";

const Toggle = (props) => {
  const { size = "lg", disabled } = props;
  const [checked, setChecked] = useState(false);
  const toggleClasses = conditionalProperties(
    "rounded-full flex items-center px-1 cursor-pointer transition duration-100 ease-out",
    {
      "w-7 h-4": size === "md",
      "w-10 h-6": size === "lg",
      "bg-primary-shd7 hover:bg-primary-shd6": checked,
      "bg-grey-shd4 hover:bg-grey-shd3": !checked,
      "pointer-events-none opacity-25": disabled,
    }
  );
  const circleClasses = conditionalProperties(
    "rounded-full transition-all duration-500 ease-in-out",
    {
      "bg-primary transform": checked,
      "bg-white": !checked,
      "translate-x-2.5": checked && size === "md",
      "translate-x-4": checked && size === "lg",
      "w-2.5 h-2.5": size === "md",
      "w-4 h-4": size === "lg",
    }
  );
  return (
    <div className={toggleClasses} onClick={() => setChecked(!checked)}>
      <div className={circleClasses}></div>
    </div>
  );
};

Toggle.propTypes = {
  checked: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
};

export default Toggle;
