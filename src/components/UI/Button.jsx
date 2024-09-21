import React from "react";

// Function to get background color class
const getBgColorClass = (bgcolor) => {
  switch (bgcolor) {
    case "blue":
      return "bg-blue-400 hover:bg-blue-600";
    case "red":
      return "bg-red-400 hover:bg-red-600";
    case "none":
      return "bg-transparent hover:bg-white";
    default:
      return "bg-blue-400 hover:bg-blue-600";
  }
};

// Function to get text color class
const getTextColorClass = (textColor) => {
  switch (textColor) {
    case "white":
      return "text-white hover:text-black";
    case "black":
      return "text-black";
    default:
      return "text-white";
  }
};

// CustomButton Component
const CustomButton = ({
  name,
  bgcolor = "blue",
  textColor = "white",
  borderClr = "white",
  size = "text-base",
  borderRadius = "rounded",
  padding = "px-4 py-3",
  icon = null,
  onClick,
}) => {
  const bgClass = getBgColorClass(bgcolor);
  const textClass = getTextColorClass(textColor);

  return (
    <button
      className={`${padding} ${bgClass} ${textClass}  border-white border-1.8 border-${borderClr} ${size} ${borderRadius} flex items-center justify-center transform transition-transform duration-300 hover:scale-105 outline-none`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </button>
  );
};

export default CustomButton;
