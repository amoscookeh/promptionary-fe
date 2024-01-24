"use client";

import {
  ButtonColor,
  ButtonSize,
} from "@/components/common/sketch-button/options";
import SketchButton from "@/components/common/sketch-button/sketch-button";
import { SquiggleEffect } from "@/components/common/squiggle/options";

export default function LandingPage() {
  return (
    <div className={`h-2/5 flex flex-col justify-end items-center`}>
      <h1 className="text-5xl font-bold tracking-tighter text-center mb-4 z-10">
        Promptionary
      </h1>
      <SketchButton
        className={`mx-auto`}
        size={ButtonSize.LG}
        color={ButtonColor.PRI}
        squiggle={SquiggleEffect.ALWAYS}
        pencilCursor={true}
        onClick={() => {
          console.log("Let the games begin");
        }}
      >
        Play Game
      </SketchButton>
    </div>
  );
}
