import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Progress = (props) => {
  const { progress, row = false, disabled = false } = props;
  const progressClasses = classNames("rounded-full", {
    "bg-error": progress < 50,
    "bg-primary": progress < 100,
    "bg-success": progress === 100,
    "h-1": row,
    "w-2": !row,
    "opacity-25": disabled,
  });
  return (
    <div
      className={progressClasses}
      style={row ? { width: `${progress}%` } : { height: `${3 * progress}px` }}
    ></div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  row: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Progress;
