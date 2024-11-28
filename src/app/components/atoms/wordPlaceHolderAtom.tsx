"use client";
import React from "react";
export const WordHolderAtom: React.FC<{ word: string[] }> = ({ word }) => (
  <div className="word-cell">
    {word.map((letter, index) => (
      <div key={index} className={`${letter === " " ? "space" : ""}`}>
        {letter}
      </div>
    ))}
  </div>
);
