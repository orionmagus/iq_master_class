import { useState, useCallback } from "react";

export const useField = <T extends string | boolean>(defaultValue:T, changeHandler: (value: T) => void) => {
  const [value, setValue] = useState<T>(defaultValue);
  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = (evt.target.type === "checkbox" ? evt.target.checked : evt.target.value) as T;
      changeHandler(newValue);
      setValue(newValue);
    },
    [changeHandler],
  );
  return {
    value,
    onChange,
  };
};
