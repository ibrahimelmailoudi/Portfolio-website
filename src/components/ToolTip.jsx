import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../Context/ThemeContext";

const ToolTip = ({ title, children, position = "top", delay = 400 }) => {
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  let timeout;

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-4",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-4",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-6",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-4",
  };

  const showTip = () => {
    timeout = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-block group z-50"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      <span
        className={`z-50 hidden lg:block select-none text-m ${
          theme === "dark" ? "bg-white text-gray-600" : "bg-gray-600 text-white"
        } ${visible ? "visible opacity-100" : "invisible opacity-0"}
        rounded-lg transition duration-75 ease p-1 absolute whitespace-nowrap ${
          positionClasses[position]
        }`}
      >
        {title}
      </span>
    </div>
  );
};

ToolTip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  delay: PropTypes.number,
};

export default ToolTip;
