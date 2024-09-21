import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Container = ({ children, direction = "column", gap, height = "default" }) => {
  const { theme } = useContext(ThemeContext);

  // Define Tailwind CSS classes for gap sizes
  const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
  };

  // Select the gap class based on the provided prop, default to gap-4
  const gapClass = gapClasses[gap] || "gap-4";

  // Define height classes for custom values
  const heightClasses = {
    auto: "h-auto", // example height class
    short: "h-24", // example height class
    medium: "h-48", // example height class
    tall: "h-72", // example height class
    full: "h-full", // full height class
    default: "h-[88vh]" // default height to 98vh
  };

  // Select the height class based on the provided prop, default to 98vh
  const heightClass = heightClasses[height] || heightClasses["default"];

  return (
    <div
      className={`flex rounded-lg p-2 m-4 ${direction === "row" ? "flex-row" : "flex-col"} ${gapClass} ${heightClass}`}
    >
      {children}
    </div>
  );
};

export default Container;
