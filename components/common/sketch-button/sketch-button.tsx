import React from "react";
import { ButtonSize, ButtonColor } from "./options";
import Squiggle from "@components/common/squiggle/squiggle";
import { SquiggleEffect } from "@components/common/squiggle/options";
import CursorStyle from "@styles/Cursor.module.css";

type SketchButtonProps = {
  size: ButtonSize;
  color: ButtonColor;
  squiggle: SquiggleEffect;
  pencilCursor?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const SketchButton: React.FC<SketchButtonProps> = ({
  size,
  color,
  squiggle,
  pencilCursor = false,
  onClick,
  children,
  className = "",
}) => {
  return (
    <Squiggle className={`text-white ${className}`} squiggle={squiggle}>
      <button
        className={`${
          pencilCursor ? CursorStyle.pencilCursorHover : ""
        } ${size} ${color} font-bold rounded`}
        onClick={onClick}
      >
        {children}
      </button>
    </Squiggle>
  );
};

export default SketchButton;
