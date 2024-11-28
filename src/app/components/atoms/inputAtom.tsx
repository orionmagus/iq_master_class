"use client";
import React from "react";
export type InputAtomPropsType = {
  inputClass?:string;
  className?: string;
  label?: string;
  onSubmit?: (evt: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: unknown;
};
export const InputAtom: React.FC<InputAtomPropsType> = ({ className = "input-cell",inputClass='', onSubmit, label = "OK", value = "", onChange, ...props }) => (
  <div className={className}>
    {onSubmit ? (
      <form onSubmit={onSubmit}>
        <input type="text" value={value} className={inputClass} onChange={onChange} {...props} />
        <button type="submit">{label}</button>
      </form>
    ) : (
      <input type="text" value={value}  className={inputClass} onChange={onChange} {...props} />
    )}
  </div>
);
