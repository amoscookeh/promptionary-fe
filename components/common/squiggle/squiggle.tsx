import React, { ReactNode } from "react";
import styles from "@styles/Squiggle.module.css";
import { SquiggleEffect } from "./options";

type SquiggleProps = {
  children: ReactNode;
  className?: string;
  squiggle?: SquiggleEffect;
};

const Squiggle: React.FC<SquiggleProps> = ({
  children,
  className = "",
  squiggle = SquiggleEffect.ALWAYS,
}) => {
  const combinedClassName = `${
    squiggle == SquiggleEffect.ALWAYS
      ? styles.squiggle
      : squiggle == SquiggleEffect.HOVER
      ? styles.squiggleHover
      : ""
  } w-fit ${className}`;
  return <div className={combinedClassName}>{children}</div>;
};

export default Squiggle;
