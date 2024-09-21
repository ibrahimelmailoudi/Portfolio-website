import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Box = ({ children, direction = "column", gap = 4, flexGrow = 0, position }) => {
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

  return (
    <div
      className={`flex rounded-lg p-2 m-4 ${
        direction === "row" ? "flex-row" : "flex-col"
      } ${gapClass} ${flexGrow === 1 ? "flex-grow" : ""}`}
      style={{ position }} // Apply position style if provided
    >
      {children}
    </div>
  );
};

export default Box;
