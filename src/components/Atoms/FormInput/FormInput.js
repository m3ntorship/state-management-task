import React, { useState } from "react";
import PropTypes from "prop-types";
import PrefixIcons from "./components/PrefixIcons";
import Input from "./components/Input";
import Variants from "./components/Variants";
import SideIcons from "./components/SideIcons";

const FormInput = (props) => {
  const {
    variant = "default",
    rightIcon = false,
    leftIcon = false,
    withLabel = true,
    disabled = false,
    prefix = false,
    prefixDrop = false,
    placeholder = "What do you want to ask about?",
    clicked,
  } = props;
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const hideIconHandler = (e) => {
    setFocus(false);
    e.stopPropagation();
  };
  const showIconHandler = (e) => {
    setFocus(true);
    e.stopPropagation();
  };
  return (
    <div className="flex" onClick={hideIconHandler}>
      <form className="relative">
        {withLabel ? (
          <label className="text-xs text-dark-grey font-light mb-xs block">
            Label
          </label>
        ) : null}
        <PrefixIcons
          prefix={prefix}
          prefixDrop={prefixDrop}
          withLabel={withLabel}
        />
        <Input
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          prefix={prefix}
          prefixDrop={prefixDrop}
          variant={variant}
          disabled={disabled}
          click={showIconHandler}
          click={clicked}
          setHover={setHover}
          placeholder={placeholder}
        />
        <Variants
          variant={variant}
          focus={focus}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          withLabel={withLabel}
        />
        <SideIcons
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          hover={hover}
          focus={focus}
          withLabel={withLabel}
        />
      </form>
    </div>
  );
};

FormInput.propTypes = {
  variant: PropTypes.oneOf(["default", "error", "success"]),
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  withLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.bool,
  prefixDrop: PropTypes.bool,
};

export default FormInput;