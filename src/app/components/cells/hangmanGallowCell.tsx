"use client"
import React from "react";
import { HangmanBodyAtom } from "../atoms/hangmanBodyAtom"
import { HangmanBodyType } from "@/app/context/hangmanProvider";

export const HangmansGallowCell: React.FC<HangmanBodyType> = (props) => {
    
    return (<div className="gallow-cell">
        <HangmanBodyAtom {...props} />
    </div>);
}