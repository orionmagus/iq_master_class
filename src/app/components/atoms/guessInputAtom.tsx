"use client";
import { HangmanContextType } from "@/app/context/hangmanProvider";
import React, { useCallback, useState } from "react";
import { InputAtom } from "./inputAtom";
export type GuessInputAtomPropsType = {
  send: HangmanContextType["send"];
};
export const GuessInputAtom: React.FC<GuessInputAtomPropsType> = ({ send }) => {
  const [value, setValue] = useState<string>("");
  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = evt.target.value;
      if (/[a-z]/i.test(newValue) || newValue === "") {
        setValue(newValue);
      }
    },
    [setValue],
  );
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (value !== "") {
      send("addGuess", value);
    }
    setValue("");
  };
  return <InputAtom {...{ value, onChange, onSubmit, label: "guess", maxLength: 1 }} />;
};


